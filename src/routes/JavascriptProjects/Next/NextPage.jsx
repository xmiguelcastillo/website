import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldGif from "../../assets/nextpic.png";
import soccerGif from "/soccer.gif";
import NextCode from "./NextCode";
import NextTools from "./NextTools";
import pokemon from "../../assets/pokemon";
import pokedex from "../../assets/Pokemon.gif";
function NextPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-700 via-yellow-300 to-pink-500 text-transparent bg-clip-text">
        Premier League Soccer
      </div>
      <a
        href="https://soccer-kohl.vercel.app/Chelsea"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full flex justify-center"
      >
        <div
          className=" w-[91%] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
          style={{
            backgroundImage: `url(${soccerGif})`,
            backgroundSize: "120%",
            backgroundPosition: "center -3px", // Moves the background image up
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </a>

      <NextTools />
      <NextCode />
    </div>
  );
}

export default NextPage;
