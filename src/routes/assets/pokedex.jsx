import React from "react";
import pokedex from "./pokedex.png";

function PokedexImage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-6 text-blue-600"></h1>
      <img
        src={pokedex}
        alt="Pokedex"
        className="  rounded-lg shadow-lg w-[500px] "
      />
    </div>
  );
}

export default PokedexImage;
