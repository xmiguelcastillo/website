import React from "react";
import mundoworld from "./mundoworld.gif"; // Adjust the path if needed

function MundoWorld() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-6 text-blue-600"></h1>
      <img
        src={mundoworld}
        alt="Mundo World"
        className="  rounded-lg shadow-lg w-[500px] "
      />
    </div>
  );
}

export default MundoWorld;
