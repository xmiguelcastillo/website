import React from "react";
import mundoWorldGif from "../../assets/snake.gif";
import spaceInvadersGif from "../../assets/space_invaders.gif";
import PygameIcon from "../../../assets/pygamesvg";
import PythonIcon from "../../../assets/pythonsvg";
function SpaceInvadersBox() {
  return (
    <div>
      <div className="text-white flex justify-center mt-3">
        Space Invaders with Pygame
      </div>
      <div
        className="w-[400px] h-[300px] lg:h-[350px] lg:w-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224] overflow-hidden"
        style={{
          backgroundImage: `url(${spaceInvadersGif})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-3/5 rounded-lg"></div>
        <div className="flex-col w-full h-1/5">
          <div className="text-white  flex justify-center items-center text-sm">
            Space Invaders
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="border-[.05px] rounded-sm bg-[#111111] border-[#8f909c] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center bg-[#111111] text-black items-center h-full">
                <PythonIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Python
              </div>
            </div>

            <div className="border-[.05px] rounded-sm border-[#8f909c] bg-[#111111] flex text-white w-20 h-5 text-xs mx-2">
              <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111]">
                <PygameIcon />
              </div>
              <div className="w-2/3 flex justify-center items-center h-full">
                Pygame
              </div>
            </div>
          </div>
          <div className="text-[#757a83] flex justify-center items-center text-xs">
            Space Invaders using Pygame
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceInvadersBox;
