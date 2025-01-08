import React from "react";
import mundoWorldGif from "../../assets/mundoworld.gif";
import PythonIcon from "../../../assets/pythonsvg";
import ReactIcon from "../../../assets/reactsvg";
import DjangoIcon from "../../../assets/djangosvg";
import JavascriptIcon from "../../../assets/javascriptsvg";
function MundoWorldBox() {
  return (
    <div>
      <div className="text-white flex justify-center mt-3">
        Mundo World Flight Reservation
      </div>
      <div
        className="h-[350px] w-[500px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-3/5 rounded-lg"></div>
        <div className="flex-col w-full h-1/5">
          <div className="text-white  flex justify-center items-center text-sm">
            Mundo Travel
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="border-[.05px] rounded-sm bg-[#111111] border-[#8f909c] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center bg-[#111111] text-black items-center h-full">
                <PythonIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Python
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] bg-[#111111] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <DjangoIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Django
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-24 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <JavascriptIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Javascript
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-24 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <ReactIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                React
              </div>
            </div>
          </div>

          <div className="text-[#757a83] flex justify-center items-center text-xs">
            Retro Flight Reservation Website
          </div>
        </div>
      </div>
    </div>
  );
}

export default MundoWorldBox;
