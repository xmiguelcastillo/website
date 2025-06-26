import React, { useState } from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import copyPic from "../assets/copyIcon.png";

function TopBar() {
  const [email] = useState("xmiguelcastillo@gmail.com");

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };
  https: return (
    <div className="lg:w-[500px] sm:w-[400px] w-[400px] font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224]">
      <div className="flex justify-center pt-2 text-xl text-white items-center  w-full h-2/5">
        <div className="flex flex-row">
          <div className="mx-6">Miguel Castillo</div>
        </div>
      </div>
      <div className="flex flex-row text-xs justify-center  items-center text-[#757a83]  w-full h-1/5 gap-3">
        <div className="w-fit h-fit flex justify-center items-center  mt-[5px]">
          <a href="https://www.linkedin.com/in/miguel-castillo-aa91bb34a/">
            <img
              src={linkedin}
              className="w-[13px] h-[13px] filter invert brightness-50 hover:brightness-[10%] "
            />
          </a>
        </div>
        Newark, New Jersey
        <a href="https://github.com/xmiguelcastillo">
          <div className="w-fit h-fit flex justify-center items-center mt-[5px]">
            <img
              src={github}
              className="w-[13px] h-[13px] filter invert brightness-50 hover:brightness-[10%]"
              alt="GitHub icon"
            />
          </div>
        </a>
      </div>

      <div className="flex flex-row text-center justify-center items-center">
        <div className="flex justify-center mx-3  items-center text-xs text-[#757a83]   h-1/5">
          {email}
        </div>
        <button onClick={handleCopy} className="">
          <img
            src={copyPic}
            className="w-[9px] h-[9px] filter invert brightness-[40%] hover:brightness-[10%]"
          />
        </button>
      </div>
      <div className="flex justify-center  mb-2 items-center text-[10px] text-[#757a83]  w-full h-1/5">
        Bachelor of Computer Science from Rutgers University, New Brunswick
      </div>
    </div>
  );
}

export default TopBar;
