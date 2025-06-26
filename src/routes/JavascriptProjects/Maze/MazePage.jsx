import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import soccerGif from "/soccer.gif";
import MazeTools from "./MazeTools";
import JavascriptCode from "../../../components/CodeBlock/JavascriptCode";
import MazeCode from "./MazeCode";
import Maze from "../../../components/Maze";
function MazePage() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-red-600 via-green-500 to-blue-600 text-transparent bg-clip-text">
        Maze Generator/Backtracker
      </div>

      {/* Button now above the maze and tools */}

      <div className="mt-2 flex flex-col justify-center items-center pb-2 rounded-md border-[1px] bg-black border-[#222224]">
        <Maze key={resetKey} />
      </div>

      <button
        onClick={() => setResetKey((prev) => prev + 1)}
        className="mt-4 px-4 py-1 rounded border-[1px] border-[#222224]  text-white hover:bg-gradient-to-r from-red-500 via-green-600 to-blue-900"
      >
        Generate{" "}
      </button>
      <MazeTools />
      <JavascriptCode filename="Maze.jsx" codeBlock={MazeCode} />
    </div>
  );
}

export default MazePage;
