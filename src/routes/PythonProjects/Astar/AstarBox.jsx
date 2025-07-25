import React from "react";
import mundoWorldGif from "../../assets/astar.png";
import PythonIcon from "../../../assets/pythonsvg";
import NumpyIcon from "../../../assets/numpysvg";
import MatplotIcon from "../../../assets/matplotsvg";
function AstarBox() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <div className="text-white flex justify-center  mt-3">
        Fast Trajectory & A star
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
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${mundoWorldGif})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-3/5 rounded-lg"></div>
          <div className="flex-col w-full h-1/5">
            <div className="text-white font-normal mt-4 flex justify-center items-center text-sm"></div>
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
                  <NumpyIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  Numpy
                </div>
              </div>

              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-[85px]">
                <div className="flex justify-center items-center h-full w-1/3">
                  <MatplotIcon />
                </div>
                <div className="flex justify-center items-center sm:text-[12px] text-[11px] h-full w-2/3">
                  Matplotlib
                </div>
              </div>
            </div>
            <div className="text-[#757a83] font-normal flex justify-center items-center text-xs">
              Adaptive A*
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstarBox;
