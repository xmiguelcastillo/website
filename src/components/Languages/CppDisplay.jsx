import React from "react";
import PythonIcon from "../../assets/pythonsvg";
import DjangoIcon from "../../assets/djangosvg";
import mundoWorldGif from "../../routes/assets/ray.png";
import JavascriptIcon from "../../assets/javascriptsvg";
import ReactIcon from "../../assets/reactsvg";
import CppIcon from "../../assets/cppsvg";

function CppDisplay() {
  return (
    <div>
      <div className="text-white flex justify-center mt-3">C++ Projects</div>
      <div
        className="h-[350px] lg:w-[500px] sm:w-[400px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-3/5 rounded-lg"></div>
        <div className="flex-col w-full h-1/5">
          <div className="text-white  flex justify-center items-center text-sm">
            Ray Tracer
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="border-[.05px] rounded-sm bg-[#111111] border-[#8f909c] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center bg-[#111111] text-black items-center h-full">
                <CppIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Cpp
              </div>
            </div>
          </div>
          <div className="text-[#757a83] flex justify-center items-center text-xs">
            Ray Tracer with C++
          </div>
        </div>
      </div>
    </div>
  );
}

export default CppDisplay;
