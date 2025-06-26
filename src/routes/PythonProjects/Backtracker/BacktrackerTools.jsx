import React from "react";
import PygameIcon from "../../../assets/pygamesvg";
import PythonIcon from "../../../assets/pythonsvg";

function BacktrackerTools() {
  return (
    <div className="flex flex-row">
      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <PythonIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Python
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <PygameIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Pygame
        </div>
      </div>
    </div>
  );
}
export default BacktrackerTools;
