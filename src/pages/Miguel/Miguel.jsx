import PicIcon from "../../assets/picsvg";
import PythonCode from "../../components/CodeBlock/PythonCode";
import HeadingBar from "../../components/HeadingBar";
import { Link } from "react-router-dom";

export default function Miguel() {
  let code = "ddeed";
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />

      <div className="lg:w-[500px] w-[400px] sm:w-[400px] md:w-[500px] font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224]">
        <div className="flex justify-center pt-2 text-xl text-white items-center  w-full h-2/5">
          <div>Miguel Castillo </div>
        </div>
      </div>

      <div className="mt-3"></div>
      <PicIcon />
      <div className="mt-3"></div>
      <div className="w-full mb-5 lg:w-[500px] w-[400px] sm:w-[400px] md:w-[500px] text-white">
        <h1 className="font-bold text-[20px] mb-2">Configuration</h1>
        <div className="flex flex-col border-gray-900 border-[1px] rounded-xl  h-[60px] w-full">
          <h1 className="pl-3 pt-3">Neovim</h1>
        </div>
      </div>

      <img src="/nvim.jpg" className="w-fit h-[300px] rounded-lg" />
      <div className="w-full lg:w-[500px] w-[400px] sm:w-[400px] md:w-[500px] text-white">
        <h1 className="font-bold text-[20px] my-2">Leetcode</h1>
        <div className="flex flex-col border-gray-900 border-[1px] rounded-xl  h-[60px] w-full">
          <Link to="leetcode">
            <h1 className="pl-3 pt-3">Leetcode</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
