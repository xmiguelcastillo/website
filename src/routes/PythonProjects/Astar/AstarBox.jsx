import React from "react";
import mundoWorldGif from "../../assets/astar.png";
import PythonIcon from "../../../assets/pythonsvg";
import NumpyIcon from "../../../assets/numpysvg";
import MatplotIcon from "../../../assets/matplotsvg";
function AstarBox() {
  return (
    <div>
      <div className="text-white flex justify-center mt-3">
        Fast Trajectory & A star
      </div>
      <div
        className="h-[350px] w-[500px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center ",
        }}
      >
        <div className="w-full h-3/5 rounded-lg"></div>
        <div className="flex-col w-full h-1/5">
          <div className="text-black  flex justify-center items-center text-sm">
            A*
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="border-[.05px] rounded-sm bg-[#111111] border-[#8f909c] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center bg-[#111111] text-black items-center h-full">
                <PythonIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Python
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] bg-[#111111] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <NumpyIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Numpy
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <MatplotIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center pr-2 h-full">
                Matplotlib
              </div>
            </div>
          </div>
          <div className="text-[#757a83] flex justify-center items-center text-xs">
            Adaptive A*
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstarBox;
