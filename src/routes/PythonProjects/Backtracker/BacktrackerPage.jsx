import HeadingBar from "../../../components/HeadingBar";
import mundoWorldVidGif from "../../assets/snake.gif";
import BracktackerCode from "./BacktrackerCode.js";
import BacktrackerTools from "./BacktrackerTools";
import PythonCode from "../../../components/CodeBlock/PythonCode";
import backtrackerGif from "../../assets/backtracker.gif";

function BacktrackerPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeadingBar />

      <div className="text-xl font-bold bg-gradient-to-r from-[#004d00] via-[#00ff00] to-[#25ff9e] text-transparent bg-clip-text">
        Backtracker/DFS Maze Generator
      </div>
      <div
        className=" w-[400px] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224] bg-black"
        style={{
          backgroundImage: `url(${backtrackerGif})`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <BacktrackerTools />
      <PythonCode filename="main.py" codeBlock={BracktackerCode} />
    </div>
  );
}

export default BacktrackerPage;
