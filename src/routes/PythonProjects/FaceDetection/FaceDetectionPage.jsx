import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/Perceptron.png";
import FaceDetectionCode from "./FaceDetectionCode";
import FaceDetectionTools from "./FaceDetectionTools";
import PythonCode from "../../../components/CodeBlock/PythonCode";

import codeBlock from "./FaceDetectionCode.js";
function FaceDetectionPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="lg:text-xl md:text-xl sm:text-xl text-[18px] font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Perceptron & Two-Layer Neural Network
      </div>
      <div
        className=" w-[91%] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <FaceDetectionTools />
      <PythonCode
        codeBlock={codeBlock}
        link="https://github.com/xmiguelcastillo/Perceptron-Two-Layer-Neural-Network"
        filename="main.py"
      />
    </div>
  );
}

export default FaceDetectionPage;
