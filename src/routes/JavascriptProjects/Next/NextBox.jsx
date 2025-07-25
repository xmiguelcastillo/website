import React from "react";
import mundoWorldGif from "../../assets/nextpic.png";
import soccerGif from "/soccer.gif";
import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import NextIcon from "../../../assets/nextsvg";
import ApiIcon from "../../../assets/apisvg";
function NextBox() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full mb-5">
      <div className="text-white flex justify-center  mt-3">
        Premier League Soccer with Next Js
      </div>
      <div
        className="
        w-[91%] sm:w-[400px] lg:w-[500px] mt-3
        font-light rounded-lg shadow shadow-black bg-[#111111]
        border-[1px] border-[#222224] text-md
        lg:h-[350px] h-[300px] overflow-hidden
      "
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${soccerGif})`,
          }}
        >
          <div className="w-full h-3/5 rounded-lg"></div>
          <div className="flex-col w-full h-1/5">
            <div className="text-white font-normal  flex justify-center items-center text-sm">
              Soccer Next Js
            </div>
            <div className="flex w-full px-2 h-full justify-center font-normal items-center">
              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24">
                <div className="flex justify-center items-center h-full w-1/3">
                  <JavascriptIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  Javascript
                </div>
              </div>

              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24">
                <div className="flex justify-center items-center h-full w-1/3">
                  <ReactIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  React
                </div>
              </div>

              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24">
                <div className="flex justify-center items-center h-full w-1/3">
                  <NextIcon />
                </div>
                <div className="flex justify-center items-center sm:text-[12px] text-[11px] h-full w-2/3">
                  Next js
                </div>
              </div>

              <div className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24">
                <div className="flex justify-center items-center h-full w-1/3">
                  <ApiIcon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3">
                  Api
                </div>
              </div>
            </div>
            <div className="text-[#757a83] font-normal flex justify-center items-center text-xs">
              Premier League Fixtures
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextBox;
