import React from "react";
import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import ApiIcon from "../../../assets/apisvg";
import NextIcon from "../../../assets/nextsvg";

function NextTools() {
  return (
    <div className="flex w-[400px] flex-row">
      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavascriptIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center sm:text-[12px] md:text-[15px] lg:text-[12px] items-center h-full">
          Javascript
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <ReactIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          React
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <ApiIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] mr-2 items-center h-full">
          Api
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <NextIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center sm:text-[12px] md:text-[15px] lg:text-[12px] mr-2 items-center h-full">
          Next Js
        </div>
      </div>
    </div>
  );
}
export default NextTools;
