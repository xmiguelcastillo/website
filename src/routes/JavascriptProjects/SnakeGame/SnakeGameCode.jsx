import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function SnakeGameCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Javascript",
      code: `
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import HomeIcon from "../assets/homeIcon";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { PokeBall } from "../Models/PokeBall";
import { Link } from "react-router-dom";
const PokeNumber = ({ pokemonURL }) => {
  const [pokemonNumber, setPokemonNumber] = useState("");
  const [error, setError] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          https://pokeapi.co/api/v2/pokemon/$pokemonURL}/,
        );
  if (!response.ok) {
    throw new Error("Could not fetch Pokemon Number");
  }
  const data = await response.json();
  let pokeNum = data.id;
  if (pokeNum < 10) {
    pokeNum = "000" + pokeNum;
  } else if (pokeNum > 10 && pokeNum < 100) {
    pokeNum = "00" + pokeNum;
  } else if (pokeNum > 100 && pokeNum < 1000) {
    pokeNum = "0" + pokeNum;
  } else {
    pokeNum = data.id;
  }
  setPokemonNumber(pokeNum);
} catch (error) {
  setError(error.message);
}
    }
fetchData();
  }, [pokemonURL]);

const handlePokeBallClick = () => {
  setShowSearch(!showSearch);
};

const handleSearch = () => {
  if (searchTerm.trim() !== "") {
    window.location.href = / $searchTerm.toLowerCase();
    }
};

return (
  <div className="relative flex flex-col items-center mt-10">
    <div className="flex flex-row items-center justify-between w-[400px]">
      <div className="w-1/3 flex h-[70px] pl-5 items-center justify-start relative z-50">
        <Link to="/" className="cursor-pointer">
          <HomeIcon className="w-10 h-10" />
        </Link>
      </div>

      <div className="text-2xl text-center font-extrabold w-1/3">
        #{error ? <span>Error: {error}</span> : pokemonNumber || "Loading..."}
      </div>

      <div
        className="w-1/3 flex h-[70px] pb-2 pl-16 z-50 justify-end cursor-pointer"
        onClick={handlePokeBallClick}
      >
        <Canvas shadows camera={{ position: [150, -15, 1] }}>
          <Environment preset="city" />
          <PokeBall
            scale={[10, 10, 10]}
            position={[60, -22, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          />
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Canvas>
      </div>
    </div>

    {showSearch && (
      <div
        className="absolute inset-0 w-full z-50 h-full flex items-center justify-center bg-black bg-opacity-50 z-100"
        onClick={() => setShowSearch(false)}
      >
        <div
          className="bg-[#151515] shadow-black p-6 rounded-lg shadow-lg flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-white flex items-center justify-center mb-2 font-bold text-lg">
            Pokedex (Gen 1)
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pokémon Name"
            className="border rounded-lg p-2 text-black w-80"
          />
          <button
            onClick={handleSearch}
            className="bg-[#fb0505] mt-2 text-white rounded-lg px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default PokeNumber;
      `,
    },
  ];

  useEffect(() => {
    hljs.highlightAll();
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="mt-6 w-[400px] lg:w-[600px] sm:w-[400px]">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      {/* Code Block */}
      <div className="relative bg-[#111111] text-white rounded-s4 p-4">
        <div
          className="overflow-auto max-h-[1000px] text-sm leading-5"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <pre>
            <code
              className={`language-${codeSnippets[
                activeTab
              ].label.toLowerCase()}`}
            >
              {codeSnippets[activeTab].code.trim()}
            </code>
          </pre>
        </div>
        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeSnippets[activeTab].code)}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default SnakeGameCode;
