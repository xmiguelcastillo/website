import React from "react";
import JavascriptIcon from "../../assets/javascriptsvg";
import ReactIcon from "../../assets/reactsvg";
import ThreeIcon from "../../assets/threesvg";
import ApiIcon from "../../assets/apisvg";
import PokedexImage from "../../routes/assets/pokedex";
import { Pikachu } from "../../Pikachu";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import pokedex from "../../routes/assets/pokedex.png";

function JavascriptDisplay() {
  const typeColors = {
    Fire: "#FF5733",
    Water: "#1b3e66",
    Grass: "#4CAF50",
    Electric: "#FFD700",
    Bug: "#afb71f",
    Normal: "#c0bdb6",
    Psychic: "#f02c96",
    Fighting: "#8e3605",
    default: "#1b3e66",
  };
  const backGround = typeColors[1] || typeColors.default;
  return (
    <div>
      <div className="text-white flex justify-center mt-3">
        Javascript Projects
      </div>
      <div
        className="h-[300px] w-[400px] sm:h-[300px] sm:w-[400px] lg:h-[350px] lg:w-[500px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full  h-3/5 rounded-lg flex justify-center items-center">
          <Canvas shadows camera={{ position: [80, 1, 1] }}>
            <Environment preset="city" />
            <PerspectiveCamera
              makeDefault={true}
              far={1000}
              fov={10.598}
              position={[500, 1, 1]}
              //Camera(zoom,idk,idk)
              rotation={[0, 0, 0]}
            />

            <Pikachu
              scale={[1, 1, 1]}
              position={[10, -22, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              castShadow
              receiveShadow
            />
            <OrbitControls enableZoom={true} autoRotate={true} />
          </Canvas>
        </div>
        <div className="flex-col w-full h-1/5">
          <div className="text-white  flex justify-center items-center text-sm">
            3D Pokedex
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="border-[.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <JavascriptIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Javascript
              </div>
            </div>
            <div className="border-[.05px] rounded-sm border-[#8f909c] flex text-white bg-[#111111] w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <ReactIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                React
              </div>
            </div>

            <div className="border-[.05px] rounded-sm bg-[#111111] border-[#8f909c] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center bg-[#111111] text-black items-center h-full">
                <ApiIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Api
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] bg-[#111111] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <ThreeIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Three Js
              </div>
            </div>
          </div>
          <div className="text-[#757a83] flex justify-center items-center text-xs">
            3D Rendered Models with Three js
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavascriptDisplay;
