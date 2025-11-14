import React from "react";
import PythonIcon from "../assets/pythonsvg2";
import DjangoIcon from "../assets/djangosvg";
import ReactIcon from "../assets/reactsvg";
import JavascriptIcon from "../assets/javascriptsvg";
import SqlIcon from "../assets/sqlsvg";
import CppIcon from "../assets/cppsvg";
import JavaIcon from "../assets/javaIcon.jsx";
import CsharpIcon from "../assets/csharpsvg";
import NumpyIcon from "../assets/numpysvg";
import MatplotIcon from "../assets/matplotsvg";
import HtmlIcon from "../assets/htmlsvg";
import CssIcon from "../assets/csssvg";
function Tools() {
  return (
    <div className="flex flex-wrap justify-center lg:w-[600px] md:w-[500px] sm:w-[100px] mx-auto">
      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28  h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <PythonIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Python
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white mx-6  lg:mx-2 bg-[#111111] w-28 h-9 text-xs ">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <DjangoIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Django
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

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <MatplotIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Matplotlib
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white mx-6  lg:mx-2 bg-[#111111] w-28 h-9 text-xs ">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <CppIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          C++
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavaIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Java
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <CsharpIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          C#
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white mx-6  lg:mx-2 bg-[#111111] w-28 h-9 text-xs ">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavascriptIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] mr-2 items-center h-full">
          Javascript
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

      <div className="border-[.05px] rounded-md border-[#3d3d42] shadow-white mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <HtmlIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Html
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white mx-6  lg:mx-2 bg-[#111111] w-28 h-9 text-xs ">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <CssIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Css
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] shadow-white mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
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
export default Tools;
