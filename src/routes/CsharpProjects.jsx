import React, { useEffect, useRef } from "react";
import HeadingBar from "../components/HeadingBar";
import { Link } from "react-router-dom";
import FaceDetectionBox from "./PythonProjects/FaceDetection/FaceDetectionBox";
function CsharpProjects() {
  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />
      <div className="text-xl font-bold bg-gradient-to-r from-[#557ebc] via-[#46899e] to-[#369781] text-transparent bg-clip-text">
        CPP PROJECTS
      </div>
      <Link className="" to="/python/perceptron">
        <FaceDetectionBox />
      </Link>
    </div>
  );
}

export default CsharpProjects;
