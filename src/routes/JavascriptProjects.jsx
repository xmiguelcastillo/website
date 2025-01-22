import React, { useEffect, useRef } from "react";
import HeadingBar from "../components/HeadingBar";
import { Link } from "react-router-dom";
import PokedexBox from "./JavascriptProjects/Pokedex/PokedexBox";
function JavascriptProjects() {
  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-[#f7e024] via-yellow-400 to-[#77681f] text-transparent bg-clip-text">
        JAVASCRIPT PROJECTS
      </div>

      <Link className="" to="/javascript/pokedex">
        <PokedexBox />
      </Link>
    </div>
  );
}

export default JavascriptProjects;
