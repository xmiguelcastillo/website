import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/mundworldvid.gif";
import MundoWorldCode from "./MundoWorldCode";
import MundoWorldTools from "./MundoWorldTools";

function MundoWorldPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Mundo World
      </div>
      <div
        className="h-[500px] w-[600px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <MundoWorldTools />
      <MundoWorldCode />
    </div>
  );
}

export default MundoWorldPage;
