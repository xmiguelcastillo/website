import React, { useState } from "react";
import JavascriptIcon from "../../assets/javascriptsvg";
import ReactIcon from "../../assets/reactsvg";
import ThreeIcon from "../../assets/threesvg";
import ApiIcon from "../../assets/apisvg";
import { Bulbasaur } from "../Bulbasaur";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

function JavascriptDisplay() {
  const [loading] = useState(false);

  const typeColors = {
    default: "#1b3e66",
    Fire: "#FF5733",
    Grass: "#0aff00",
    Electric: "#f5ff00",
  };
  const background = loading ? "rgba(0, 0, 0, 0.2)" : typeColors.Grass;

  return (
    <div className="flex flex-col justify-center items-center min-w-full mb-3">
      <div className="text-white flex justify-center mt-3">
        JavaScript Projects
      </div>

      <div
        className="
          w-[91%] sm:w-[400px] lg:w-[500px] mt-3
          font-light rounded-lg shadow shadow-black bg-[#111111]
          border-[1px] border-[#222224] text-md
          lg:h-[350px] h-[300px] overflow-hidden
        "
      >
        {/* TOP 3D section */}
        <div className="relative w-full h-3/5 flex justify-center items-center">
          {/* Radial Background */}
          <div
            className="absolute mt-[90px] flex items-center justify-center w-[200px] h-[100px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${background} 0%, transparent 100%)`,
              filter: "blur(70px)",
            }}
          ></div>

          <Canvas shadows>
            <Environment preset="city" />
            <PerspectiveCamera
              makeDefault
              far={1000}
              fov={10.598}
              position={[450, 1, 1]}
            />
            <Bulbasaur
              scale={[1, 1, 1]}
              position={[10, -32, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              castShadow
              receiveShadow
            />
            <OrbitControls enableZoom={true} autoRotate={true} />
          </Canvas>
        </div>

        {/* BOTTOM INFO */}
        <div className="flex-col w-full h-1/5">
          <a
            href="https://xmiguelcastillo.github.io/pokedex/bulbasaur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-normal flex justify-center items-center text-sm hover:underline"
          >
            3D Pokedex
          </a>

          <div className="flex w-full px-2 h-full justify-center font-normal items-center">
            {/* BADGE LIST */}
            {[
              { Icon: JavascriptIcon, label: "Javascript" },
              { Icon: ReactIcon, label: "React" },
              { Icon: ApiIcon, label: "API" },
              { Icon: ThreeIcon, label: "Three JS" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24"
              >
                <div className="flex justify-center items-center h-full w-1/3">
                  <Icon />
                </div>
                <div className="flex justify-center items-center h-full w-2/3 sm:text-[12px] text-[11px]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#757a83] font-normal flex justify-center items-center text-xs">
            3D Rendered Models with Three.js
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavascriptDisplay;
