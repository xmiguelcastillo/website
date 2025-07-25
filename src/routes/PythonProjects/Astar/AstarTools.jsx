import React from "react";
import NumpyIcon from "../../../assets/numpysvg";
import MatplotIcon from "../../../assets/matplotsvg";
import PythonIcon from "../../../assets/pythonsvg";

function AstarTools() {
  return (
    <div className="flex justify-center items-center flex-row  lg:w-[600px] sm:w-[400px] w-[91%]">
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
          <NumpyIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Numpy
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <MatplotIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] mr-2 items-center h-full">
          Matplotlib
        </div>
      </div>
    </div>
  );
}
export default AstarTools;
