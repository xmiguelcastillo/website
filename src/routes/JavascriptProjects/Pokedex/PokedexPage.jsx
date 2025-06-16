import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/mundworldvid.gif";
import PokedexCode from "./PokedexCode";
import PokedexTools from "./PokedexTools";
import pokemon from "../../assets/pokemon";
import pokedex from "../../assets/Pokemon.gif";
import PokedexSearch from "./PokedexSearch";
import JavascriptCode from "../../../components/CodeBlock/JavascriptCode";
function PokedexPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-[#f04037] via-[#FFFFFF] to-[#f04037] text-transparent bg-clip-text">
        Pokedex
      </div>
      <a
        href="https://xmiguelcastillo.github.io/pokedex/bulbasaur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-[400px] h-[300px] lg:w-[600px] hover:shadow-black lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224] cursor-pointer"
          style={{
            backgroundImage: `url(${pokedex})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </a>

      <PokedexTools />
      <PokedexSearch />
      <JavascriptCode codeBlock={PokedexCode} filename="PokeNumber.jsx" />
    </div>
  );
}

export default PokedexPage;
