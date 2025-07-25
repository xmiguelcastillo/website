import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/snake.gif";
import SnakeCode from "./SnakeCode";
import SnakeTools from "./SnakeTools";
import PythonCode from "../../../components/CodeBlock/PythonCode";

function SnakePage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 text-transparent bg-clip-text">
        Snake Game with Pygame
      </div>
      <div
        className=" w-[91%] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
        style={{
          backgroundImage: `url(${mundoWorldVidGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <SnakeTools />
      <PythonCode filename="main.py" codeBlock={SnakeCode} />
    </div>
  );
}

export default SnakePage;
