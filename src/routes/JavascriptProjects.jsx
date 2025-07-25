import React, { useEffect, useRef } from "react";
import HeadingBar from "../components/HeadingBar";
import { Link } from "react-router-dom";
import PokedexBox from "./JavascriptProjects/Pokedex/PokedexBox";
import NextBox from "./JavascriptProjects/Next/NextBox";
import SnakeGameBox from "./JavascriptProjects/SnakeGame/SnakeGameBox";
import MazeBox from "./JavascriptProjects/Maze/MazeBox";
import MazeBoxy from "../components/MazeBoxy";
function JavascriptProjects() {
  return (
    <div className="flex flex-col items-center  h-full">
      <HeadingBar />
      <div className="text-xl font-bold bg-gradient-to-r from-[#f7e024] via-yellow-400 to-[#77681f] text-transparent bg-clip-text">
        JAVASCRIPT PROJECTS
      </div>
      <Link
        className="block w-full flex justify-center"
        to="/javascript/pokedex"
      >
        <PokedexBox />
      </Link>
      <Link className="block w-full flex justify-center" to="/javascript/maze">
        <MazeBox />
      </Link>
      {/* 
      <Link  className="block w-full flex justify-center" to="/javascript/snake">
         <SnakeGameBox />
      </Link>
*/}
      <Link className="block w-full flex justify-center" to="/javascript/next">
        <NextBox />
      </Link>
    </div>
  );
}

export default JavascriptProjects;
