import React from "react";
import PythonIcon from "../assets/pythonsvg2";

function PythonClasses() {
  return (
    <div className="flex flex-row flex-wrap w-full max-w-[520px] mx-auto">
      <div className="w-1/2 p-2 group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs mx-2 group-hover:border-yellow-300">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <PythonIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-440-introduction-to-artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              01:198:440 - Introduction to Artificial Intelligence
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-2 group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs mx-2 group-hover:border-yellow-300">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <PythonIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-210-data-management-for-data-science"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              01:198:210 - Data Management for Data Science
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PythonClasses;
