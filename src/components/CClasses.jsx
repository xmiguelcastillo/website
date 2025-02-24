import React from "react";

import JavaIcon from "../assets/javasvg";
import CIcon from "../assets/csvg";
function CClasses() {
  return (
    <div className="flex flex-row flex-wrap  w-[400px] lg:w-[500px] sm:w-[400px] ">
      <div className="lg:w-[240px] w-[190px]  group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs group-hover:border-[#48496e]">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <CIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture"
              target="_blank"
              rel="noopener noreferrer"
            >
              01:198:211 - Computer Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CClasses;
