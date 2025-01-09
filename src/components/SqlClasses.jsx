import React from "react";

import SqlIcon from "../assets/sqlsvg";
function SqlClasses() {
  return (
    <div className="flex flex-row flex-wrap w-[400px] lg:w-[500px] sm:w-[400px] mx-auto">
      <div className="w-1/2 p-2 group">
        <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-full h-24 text-xs mx-2 group-hover:border-[#ff0500]">
          <div className="w-1/3 flex justify-center text-black items-center bg-[#111111] rounded-l-md">
            <SqlIcon />
          </div>
          <div className="w-2/3 flex font-normal justify-center text-[15px] items-center h-full">
            <a
              href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              01:198:336 - Principles of Information and Data Management
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SqlClasses;
