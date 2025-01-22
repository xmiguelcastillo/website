import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/mundworldvid.gif";
import PokedexCode from "./PokedexCode";
import PokedexTools from "./PokedexTools";
function PokedexPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-[#f04037] via-[#FFFFFF] to-[#f04037] text-transparent bg-clip-text">
        Pokedex
      </div>
      <div
        className=" w-[400px] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <PokedexTools />
      <PokedexCode />
    </div>
  );
}

export default PokedexPage;
