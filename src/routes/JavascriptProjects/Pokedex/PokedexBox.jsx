import React, { useState } from "react";
import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import ThreeIcon from "../../../assets/threesvg";
import ApiIcon from "../../../assets/apisvg";
import PokedexImage from "../../assets/pokedex";

import { Pikachu } from "../../../Pikachu";
import { Bulbasaur } from "../../../components/Bulbasaur";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

export default function PokedexBox() {
  const [loading, setLoading] = useState(false);

  const typeColors = {
    default: "#1b3e66",
    Fire: "#FF5733",
    Grass: "#0aff00",
    Electric: "#f5ff00",
  };

  const background = loading ? "rgba(0, 0, 0, 0.2)" : typeColors.Electric;

  return (
    <div>
      <div className="text-white flex justify-center mt-3">
        JavaScript Projects
      </div>
      <div
        className="h-[300px] w-[400px] sm:h-[300px] sm:w-[400px] lg:h-[350px] lg:w-[500px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-3/5 rounded-lg flex justify-center items-center">
          {/* Radial Background Effect */}
          <div
            className="w-[300px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[150px] md:h-[80px]  lg:w-[260px]  lg:h-[150px]  rounded-full absolute lg:top-[30%] top-[37%] left-[50%] md:top-[28%] sm:top-[30%] translate-x-[-50%] z-0 translate-y-[-50%] blur-[50px]  pointer-events-none transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at center, ${background} 0%, transparent 100%)`,
            }}
          ></div>

          {/* 3D Model Canvas */}
          <Canvas shadows camera={{ position: [80, 1, 1] }}>
            <Environment preset="city" />
            <PerspectiveCamera
              makeDefault={true}
              far={1000}
              fov={10.598}
              position={[450, 1, 1]}
              rotation={[0, 0, 0]}
            />
            <Pikachu
              scale={[1, 1, 1]}
              position={[10, -32, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              castShadow
              receiveShadow
            />
            <OrbitControls enableZoom={true} autoRotate={true} />
          </Canvas>
        </div>

        {/* Tech Stack & Description */}
        <div className="flex flex-col w-full h-1/5">
          <a
            href="https://xmiguelcastillo.github.io/pokedex/pikachu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex z-50 justify-center items-center text-sm hover:underline "
          >
            3D Pokedex
          </a>
          <div className="flex w-full h-full justify-center items-center">
            {/* Tech Tags */}
            {[
              { icon: <JavascriptIcon />, label: "JavaScript" },
              { icon: <ReactIcon />, label: "React" },
              { icon: <ApiIcon />, label: "API" },
              { icon: <ThreeIcon />, label: "Three.js" },
            ].map(({ icon, label }, index) => (
              <div
                key={index}
                className="border-[0.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-20 h-5 text-xs mx-2"
              >
                <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                  {icon}
                </div>
                <div className="w-2/3 flex justify-center items-center h-full">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[#757a83] flex justify-center items-center text-xs">
            3D Rendered Models with Three.js
          </div>
        </div>
      </div>
    </div>
  );
}
