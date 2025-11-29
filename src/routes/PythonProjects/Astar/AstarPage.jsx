import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/astar.png";
import FaceDetectioDetectionnCode from "./AstarCode";
import AstarCode from "./AstarCode";
import AstarTools from "./AstarTools";
import PythonCode from "../../../components/CodeBlock/PythonCode";
import codeBlock from "./AstarCode.js";

function AstarPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Fast Trajectory Replanning & A*
      </div>
      <img
        src={mundoWorldVidGif}
        className=" w-[91%] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <AstarTools />
      <PythonCode filename="astar.py" codeBlock={codeBlock} />
    </div>
  );
}

export default AstarPage;
