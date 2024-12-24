import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const modelUrl = "/images/tripo_pbr_model_585d9e38-94f0-415b-aa0d-6b74503a517a (1).glb"; // Path to your 3D model
  const { scene } = useGLTF(modelUrl); // Load the 3D model

  return <primitive object={scene} scale={5.5} />;
};

export default Model;
