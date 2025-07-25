import React from "react";
import mundoWorldGif from "../../assets/snake.gif";
import backtrackerGif from "../../assets/backtracker.gif";
import PygameIcon from "../../../assets/pygamesvg";
import PythonIcon from "../../../assets/pythonsvg";
function BacktrackerBox() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <div className="text-white flex justify-center  mt-3">
        Backtracker/DFS Maze Generator
      </div>
      <div
        className="
        w-[91%] sm:w-[400px] lg:w-[500px] mt-3
        font-light rounded-lg shadow shadow-black bg-[#111111]
        border-[1px] border-[#222224] text-md
        lg:h-[350px] h-[300px] overflow-hidden
      "
      >
        <div
          className="w-full bg-black h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backtrackerGif})`,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-3/5 rounded-lg"></div>
          <div className="flex-col w-full h-1/5">
            <div className="text-white font-normal  flex justify-center items-center text-sm">
              Backtracker
            </div>
            <div className="flex w-full px-2 gap-1 h-full justify-center font-normal items-center">
              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-[85px]">
                <div className="flex justify-center items-center h-full w-1/3">
                  <PythonIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  Python
                </div>
              </div>

              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1  w-[85px]">
                <div className="flex justify-center items-center h-full w-1/3">
                  <PygameIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  Pygame
                </div>
              </div>
            </div>
            <div className="text-[#757a83] font-normal flex justify-center items-center text-xs">
              Maze Generator using Pygame
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BacktrackerBox;
