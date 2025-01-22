import React from "react";
import HeadingBar from "./components/HeadingBar";
import MiguelBox from "./components/MiguelBox";
import PicIcon from "./assets/picsvg";
import Tools from "./components/Tools";
function Miguel() {
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />

      <div className="lg:w-[500px] w-[400px] sm:w-[400px] md:w-[500px] font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224]">
        <div className="flex justify-center pt-2 text-xl text-white items-center  w-full h-2/5">
          <div>Miguel Castillo </div>
        </div>
      </div>

      <div className="mt-3"></div>
      <PicIcon />
      <div className="mt-3"></div>

      <div className="text-white flex justify-center mt-3">About Me</div>

      <div className="text-white">Languages</div>

      <Tools />
    </div>
  );
}

export default Miguel;
