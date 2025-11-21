import React from "react";
import TopBar from "../../components/TopBar";
import Tools from "../../components/Tools";
import PythonIcon from "../../assets/pythonsvg";
import PythonClasses from "../../components/PythonClasses";
import MathIcon from "../../assets/mathsvg";
import MathClasses from "../../components/MathClasses";
import JavaIcon from "../../assets/javaIcon.jsx";
import JavaClasses from "../../components/JavaClasses";
import CIcon from "../../assets/csvg";
import CClasses from "../../components/CClasses";
import SqlIcon from "../../assets/sqlsvg";
import SqlClasses from "../../components/SqlClasses";
import RutgersIcon from "../../assets/rutgersvg";
import HeadingBar from "../../components/HeadingBar";
function University() {
  return (
    <div className="flex flex-col items-center   bg-[#101010] h-full ">
      <HeadingBar />

      <TopBar />

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-[400px] lg:w-[500px] sm:w-[400px] h-14 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <RutgersIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Bachelor of Computer Science from Rutgers, New Brunswick
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111]  w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <PythonIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Python
        </div>
      </div>

      <PythonClasses />

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <MathIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Math
        </div>
      </div>
      <MathClasses />

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavaIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Java
        </div>
      </div>
      <JavaClasses />

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <CIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          C
        </div>
      </div>
      <CClasses />
      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <SqlIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
          Sql
        </div>
      </div>
      <SqlClasses />
    </div>
  );
}
export default University;
