import React from "react";
import SqlIcon from "../../../assets/sqlsvg";
import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import DjangoIcon from "../../../assets/djangosvg";
import PythonIcon from "../../../assets/pythonsvg";

function ImageEditorTools() {
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
          <DjangoIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Django
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavascriptIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] sm:text-[12px] md:text-[12px] lg:text-[15px] mr-2 items-center h-full">
          <span className="hidden sm:inline">JavaScript</span>
          <span className="inline sm:hidden">JS</span>
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] shadow-white mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <ReactIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          React
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] shadow-white mt-5 flex text-white bg-[#111111] w-16 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <SqlIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Sql
        </div>
      </div>
    </div>
  );
}
export default ImageEditorTools;
