import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/snake.gif";
import space_invaders_vid from "../../assets/space_invaders.mov";
import SpaceInvadersCode from "./SpaceInvadersCode";
import SpaceInvadersTools from "./SpaceInvadersTools";
import PythonCode from "../../../components/CodeBlock/PythonCode";

function SpaceInvadersPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-[#3af1fe] via-[#5e5bff] to-[#fff47f] text-transparent bg-clip-text">
        Space Invaders with Pygame
      </div>
      <div className="w-[91%] h-[400px] lg:w-[600px] lg:h-[600px] sm:w-[400px] sm:h-[400px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]">
        <video
          className="w-full h-full rounded-lg shadow shadow-black border-[1px] border-[#222224]"
          style={{ objectFit: "cover" }}
          src={space_invaders_vid}
          controls
          autoPlay
          loop
        />
      </div>

      <SpaceInvadersTools />
      <PythonCode
        filename="alien_invasion.py"
        codeBlock={SpaceInvadersCode}
        link="http://github.com/xmiguelcastillo/space_invaders"
      />
    </div>
  );
}

export default SpaceInvadersPage;
