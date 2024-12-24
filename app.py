from fastapi import FastAPI, File, UploadFile, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
import numpy as np
from skimage.transform import resize
from skimage.io import imread
import os
import shutil

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Model paths ----
MODEL_PATHS = {
    "XR_ELBOW": r"C:\\ML\\mura\\DatasetXR_ELBOW\\XR_ELBOW.h5",
    "XR_WRIST": r"C:\\ML\\mura\\DatasetXR_WRIST\\WRIST.h5",
    "XR_FINGER": r"C:\\ML\\mura\\DatasetXR_FINGER\\XR_FINGER.h5",
    "XR_HUMERUS": r"C:\\ML\\mura\\DatasetXR_FOREARM\\XR_FOREARM.h5",
    "XR_FOREARM": r"C:\\ML\\mura\\DatasetXR_FOREARM\\XR_FOREARM.h5",  # Added this line
    "XR_HAND": r"C:\\ML\\mura\\DatasetXR_FOREARM\\XR_HAND\\.h5",
}

# ---- Image preprocessing function ----
def preprocess_image(img_path, target_size=(224, 224)):
    try:
        img = imread(img_path)
        img_resized = resize(img, (300, 300, 3))  # Resize to (300, 300, 3) first
        h, w, _ = img_resized.shape

        startx = w // 2 - (target_size[0] // 2)
        starty = h // 2 - (target_size[1] // 2)
        img_cropped = img_resized[starty:starty + target_size[1], startx:startx + target_size[0]]

        img_normalized = img_cropped / 255.0
        return img_normalized, None
    except Exception as e:
        return None, str(e)

# ---- Class labels ----
CLASS_NAMES = {
    "XR_ELBOW": ["Positive Abnormality", "Negative Abnormality"],
    "XR_WRIST": ["Positive Abnormality", "Negative Abnormality"],
    "XR_FINGER": ["Positive Abnormality", "Negative Abnormality"],
    "XR_HUMERUS": ["Positive Abnormality", "Negative Abnormality"],
    "XR_FOREARM": ["Positive Abnormality", "Negative Abnormality"],  # Add class names if needed
}

# Models cache
models = {}

def load_model_on_demand(model_name):
    if model_name not in models:
        try:
            print(f"Loading model: {model_name}")
            models[model_name] = load_model(MODEL_PATHS[model_name])
            print(f"Model {model_name} loaded successfully.")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to load model {model_name}: {e}")
    return models[model_name]

# Endpoint to handle image upload and prediction
@app.post("/predict")
async def predict(model_name: str = Form(...), file: UploadFile = File(...)):
    # Now model_name comes first as part of the form data, and file comes second.

    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")

    # Validate the model_name
    if model_name not in MODEL_PATHS:
        print(f"Invalid model name: {model_name}")
        raise HTTPException(status_code=400, detail="Invalid model name selected")

    # Print the selected model name for logging
    print(f"User selected model: {model_name}")

    # Save uploaded file temporarily
    temp_dir = "temp_uploads"
    os.makedirs(temp_dir, exist_ok=True)
    file_path = os.path.join(temp_dir, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Preprocess the image
    preprocessed_image, error_message = preprocess_image(file_path)
    if preprocessed_image is None:
        os.remove(file_path)
        raise HTTPException(status_code=500, detail=error_message)

    # Load the selected model
    try:
        model = load_model_on_demand(model_name)
    except Exception as e:
        os.remove(file_path)
        raise HTTPException(status_code=500, detail=f"Error loading model {model_name}: {str(e)}")

    # Prepare the image for prediction
    img_batch = np.expand_dims(preprocessed_image, axis=0)
    predictions = model.predict(img_batch)
    predicted_class = np.argmax(predictions, axis=1)[0]
    confidence = predictions[0][predicted_class]

    # Clean up the uploaded file
    os.remove(file_path)

    return {
        "class": CLASS_NAMES[model_name][predicted_class],
        "confidence": f"{confidence:.2%}"
    }

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="172.16.102.10", port=8000)
