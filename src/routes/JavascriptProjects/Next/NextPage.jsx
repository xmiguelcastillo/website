import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldGif from "../../assets/nextpic.png";
import NextCode from "./NextCode";
import NextTools from "./NextTools";
import pokemon from "../../assets/pokemon";
import pokedex from "../../assets/Pokemon.gif";
function NextPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-700 via-yellow-300 to-pink-500 text-transparent bg-clip-text">
        Next Crud App
      </div>
      <a
        href="https://nextjs-600m5i8lc-xmiguelcastillo-gmailcoms-projects.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-[400px] h-[300px] lg:w-[600px] hover:shadow-black lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow hover:border-red-500 shadow-black border-[1px] border-[#222224] cursor-pointer"
          style={{
            backgroundImage: `url(${mundoWorldGif})`,
            backgroundSize: "cover",
          }}
        ></div>
      </a>

      <NextTools />
      <NextCode />
    </div>
  );
}

export default NextPage;
