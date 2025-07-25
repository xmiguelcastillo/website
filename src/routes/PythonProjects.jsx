import React, { useEffect, useRef } from "react";
import HeadingBar from "../components/HeadingBar";
import { Link } from "react-router-dom";
import MundoworldBox from "./PythonProjects/MundoWorld/MundoWorldBox";
import FaceDetectionBox from "./PythonProjects/FaceDetection/FaceDetectionBox";
import AstarBox from "./PythonProjects/Astar/AstarBox";
import SnakeBox from "./PythonProjects/Snake/SnakeBox";
import ImageEditorBox from "./PythonProjects/ImageEditor/ImageEditorBox";
import SpaceInvadersBox from "./PythonProjects/SpaceInvaders/SpaceInvadersBox";
import BacktrackerBox from "./PythonProjects/Backtracker/BacktrackerBox";
function PythonProjects() {
  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-700 text-transparent bg-clip-text">
        PYTHON PROJECTS
      </div>

      <Link
        className="block w-full flex justify-center"
        to="/python/mundoworld"
      >
        <MundoworldBox />
      </Link>

      <Link
        className="block w-full flex justify-center"
        to="/python/perceptron"
      >
        <FaceDetectionBox />
      </Link>

      <Link className="block w-full flex justify-center" to="/python/astar">
        <AstarBox />
      </Link>

      <Link
        className="block w-full flex justify-center"
        to="/python/space_invaders"
      >
        <SpaceInvadersBox />
      </Link>

      <Link
        className="block w-full flex justify-center"
        to="/python/image_editor"
      >
        <ImageEditorBox />
      </Link>
      <Link
        className="block w-full flex justify-center"
        to="/python/backtracker"
      >
        <BacktrackerBox />
      </Link>
      <Link className="block w-full flex justify-center" to="/python/snakegame">
        <SnakeBox />
      </Link>
    </div>
  );
}

export default PythonProjects;
