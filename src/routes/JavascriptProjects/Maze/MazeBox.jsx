import React from "react";
import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import NextIcon from "../../../assets/nextsvg";
import ApiIcon from "../../../assets/apisvg";
import MazeBoxy from "../../../components/MazeBoxy";

function MazeBox() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white flex justify-center mt-3">
        Maze Generator/Backtracker
      </div>

      <div className="w-[91%] h-[300px] lg:h-[350px] lg:w-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border border-[#222224] bg-black overflow-hidden flex flex-col">
        <div className="flex  pt-20 justify-center items-center h-[220px]">
          <MazeBoxy />
        </div>

        <div className="text-[#8f909c] mb-2 flex justify-center items-center text-sm">
          DFS
        </div>
        <div className="flex justify-center items-center h-[80px]">
          {[
            { Icon: JavascriptIcon, label: "Javascript" },
            { Icon: ReactIcon, label: "React" },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="border border-[#8f909c] rounded-sm bg-[#111111] flex text-white w-20 h-5 text-xs mx-1"
            >
              <div className="w-1/3 flex justify-center items-center h-full">
                <Icon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-white flex justify-center items-center mb-5 text-xs">
          Backtracker with React
        </div>
      </div>
    </div>
  );
}

export default MazeBox;
