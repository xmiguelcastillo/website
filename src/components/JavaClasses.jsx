import React from "react";

import JavaIcon from "../assets/javaIcon.jsx";
function JavaClasses() {
  return (
    <div className="flex flex-row flex-wrap  w-[400px] lg:w-[500px] sm:w-[400px] ">
      <div className="lg:w-[240px] w-[190px]  group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs  group-hover:border-orange-500">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <JavaIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-111-introduction-to-computer-science"
              target="_blank"
              rel="noopener noreferrer"
            >
              01:198:111 - Introduction to Computer Science
            </a>
          </div>
        </div>
      </div>

      <div className="w-[20px] lg:w-[20px]"></div>
      <div className="w-[190px] lg:w-[240px]  group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs  group-hover:border-orange-500">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <JavaIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures"
              target="_blank"
              rel="noopener noreferrer"
            >
              01:198:112 - Data Structures
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JavaClasses;
