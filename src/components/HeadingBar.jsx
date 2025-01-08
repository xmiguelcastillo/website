import React from "react";
import { Link } from "react-router-dom";
function HeadingBar() {
  return (
    <div className="flex flex-row h-10 mb-8 w-[500px] mt-4 font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224] text-md">
      <Link
        to="/miguel"
        className="text-white flex justify-center items-center w-1/5 hover:text-[#0191ff]"
      >
        Miguel
      </Link>

      <Link
        to="/university"
        className="text-white flex justify-center items-center w-1/5 hover:text-[#00ff80]"
      >
        University
      </Link>

      <Link
        to="/website"
        className="text-white flex justify-center items-center w-1/5 hover:text-[#6373ff]"
      >
        Projects
      </Link>

      <Link
        to="/resume"
        className="text-white flex justify-center items-center w-1/5 hover:text-[#ff0028]"
      >
        Resume
      </Link>

      <Link
        to="/contact"
        className="text-white flex justify-center items-center w-1/5 hover:text-[#00ffd7]"
      >
        Contact
      </Link>
    </div>
  );
}

export default HeadingBar;
