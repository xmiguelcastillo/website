import React, { useState } from "react";

export default function PokedexSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `https://xmiguelcastillo.github.io/pokedex/${searchTerm.trim().toLowerCase()}`;
    }
  };

  return (
    <div className="mt-6  justify-center items-center w-[400px] lg:w-[600px] sm:w-[400px]">
      <form onSubmit={handleSearch} className="flex   items-center gap-2">
        <input
          type="text"
          placeholder="Search Pokémon(Gen 1) Mew, Gengar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 text-white bg-[#0c0d0e] border-[1px] border-[#3d3c43] w-[800px]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc143c]"
        />
        <button
          type="submit"
          className=" bg-[#dc1434] border-[1px] border-[#3d3c43] h-10 w-16 lg:w-32 text-white rounded-lg hover:bg-[#242424] transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
