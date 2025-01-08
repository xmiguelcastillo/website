import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/astar.png";
import FaceDetectioDetectionnCode from "./AstarCode";
import AstarCode from "./AstarCode";
import AstarTools from "./AstarTools";

function AstarPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Fast Trajectory Replanning & A*
      </div>
      <div
        className="h-[500px] w-[600px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <AstarTools />
      <AstarCode />
    </div>
  );
}

export default AstarPage;
