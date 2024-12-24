import React, { useState } from "react";
import axios from "axios"; // Import axios
import "./Predicte.css";

const Predicte = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [xrayResult, setXrayResult] = useState();
  const [loading, setLoading] = useState(false); // State for loading

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload").click();
  };

  const handleUpload = async () => {
    if (!selectedCategory || !uploadedFile) {
      alert("Please select a category and upload a file.");
      return;
    }

    setLoading(true); // Start loading

    // Prepare the form data
    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("model_name", selectedCategory);

    try {
      // Make the POST request
      const response = await axios.post("http://172.16.102.10:8000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setXrayResult({
        class: response.data.class,
        confidence: response.data.confidence,
      });

      console.log("Upload successful:", response.data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the file. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Check your Xray in Few Click's</h1>
      </header>

      <div className="main-content">
        <div className="upload-section">
          <h2>Upload X-Ray</h2>

          <div className="dropdown-container">
            <label htmlFor="category">Select Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">-- Select --</option>
              <option value="XR_ELBOW">ELBOW</option>
              <option value="XR_WRIST">WRIST</option>
              <option value="XR_FINGER">FINGER</option>
              <option value="XR_HUMERUS">HUMERUS</option>
              <option value="XR_HAND">HAND</option>
            </select>
          </div>

          <div className="upload-box" onClick={triggerFileInput}>
            <p>Click to Upload</p>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </div>

          {uploadedFile && (
            <p style={{ color: "#4caf50" }}>
              Uploaded File: {uploadedFile.name}
            </p>
          )}

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}

          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </div>

        <div className="info-section">
          <h2>Details</h2>
          <div className="text-fields">
            <label htmlFor="prompt">Enter name:</label>
            <textarea id="prompt" placeholder="Enter the Name here..." />

            <label htmlFor="caption">Email:</label>
            <textarea id="caption" placeholder="Enter the Email here..." />
          </div>

          <div className="result-section">
            <h2>Result</h2>
            {loading ? (
              <div className="loading-animation">
                <p>We are predicting...</p>
                <div className="spinner"></div>
              </div>
            ) : xrayResult ? (
              <div>
                <p><strong>Predicted Class:</strong> {xrayResult.class}</p>
                <br />
                <p><strong>Confidence:</strong> {xrayResult.confidence}</p>
              </div>
            ) : (
              <p>No results yet. Please upload an image.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predicte;
