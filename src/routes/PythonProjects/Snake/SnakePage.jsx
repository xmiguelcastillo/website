import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/snake.gif";
import FaceDetectioDetectionnCode from "./SnakeCode";
import SnakeCode from "./SnakeCode";
import SnakeTools from "./SnakeTools";

function SnakePage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Snake Game with Pygame
      </div>
      <div
        className="h-[500px] w-[600px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <SnakeTools />
      <SnakeCode />
    </div>
  );
}

export default SnakePage;
