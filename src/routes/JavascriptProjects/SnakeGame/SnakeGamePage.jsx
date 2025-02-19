import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import SnakeCode from "../../PythonProjects/Snake/SnakeCode";
import SnakeGameTools from "./SnakeGameTools";
import SnakeGrid from "./SnakeGrid";
function FaceDetectionPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />
      <SnakeGrid />
    </div>
  );
}

export default FaceDetectionPage;
