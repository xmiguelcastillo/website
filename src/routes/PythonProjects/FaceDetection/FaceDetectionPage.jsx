import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/Perceptron.png";
import FaceDetectionCode from "./FaceDetectionCode";
import FaceDetectionTools from "./FaceDetectionTools";

function FaceDetectionPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Perceptron & Two-Layer Neural Network
      </div>
      <div
        className=" lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <FaceDetectionTools />
      <FaceDetectionCode />
    </div>
  );
}

export default FaceDetectionPage;
