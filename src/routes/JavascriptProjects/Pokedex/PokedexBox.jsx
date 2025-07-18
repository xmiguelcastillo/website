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
      <div className="text-white flex justify-center mt-3">Pokémon Pokédex</div>
      <div className="relative h-[300px]  w-[400px] sm:h-[300px] sm:w-[400px] lg:h-[350px] lg:w-[500px] mt-3 rounded-lg shadow shadow-black border-[1px]  border-[#222224] overflow-hidden">
        <div className="relative w-full h-3/5 flex justify-center items-center">
          <div
            className="absolute   mt-[90px] flex items-center justify-center w-[290px] h-[100px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${background} 0%, transparent 100%)`,
              filter: "blur(70px)",
            }}
          ></div>

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

        <div className="flex-col  w-full h-1/5">
          <a
            href="https://xmiguelcastillo.github.io/pokedex/bulbasaur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex justify-center items-center text-sm hover:underline"
          >
            3D Pokedex
          </a>
          <div className="flex w-full h-full  justify-center items-center">
            {[
              { Icon: JavascriptIcon, label: "Javascript" },
              { Icon: ReactIcon, label: "React" },
              { Icon: ApiIcon, label: "API" },
              { Icon: ThreeIcon, label: "Three JS" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="border-[.05px] rounded-sm border-[#8f909c] bg-[#111111] flex text-white w-20 h-5 text-xs mx-2"
              >
                <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                  <Icon />
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
