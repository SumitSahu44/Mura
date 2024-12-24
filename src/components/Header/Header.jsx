import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Header.css";
import Model from "../Model/Model";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="bg">

  
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h1 className="hero-title">
          MURA: ML-Powered <br />
          Musculoskeletal X-Ray
          <br /> Analysis
        </h1>
        <p className="hero-subtitle">
          Accelerate musculoskeletal diagnosis with the <br /> MURA model—an AI
          tool that detects abnormalities <br />
          in X-ray images with high accuracy.
        </p>
        <Link to="/predict">
          <button className="hero-button">Get Started</button>
        </Link>
      </div>

      {/* Right Section with 3D Model */}
      <div className="hero-right">
        <img src="images/skeloton.png" alt=""/>
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} />
        </Canvas> */}
      </div>
    </div>
    </div>
  );
};

export default Header;
