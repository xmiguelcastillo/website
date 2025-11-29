import { useEffect } from "react";
import pythonIcon from "../../assets/pythonIcon.svg";
import githubIcon from "../../assets/githubIcon.png";
import copyIcon from "../../assets/copyIcon.png";

import hljs from "highlight.js";
import "highlight.js/styles/idea.css";

function PythonCode({ codeBlock, link, filename, color }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlock);
  };

  return (
    <div className="w-[91%] min-h-screen lg:w-[600px] sm:w-[400px] mt-3 rounded-lg shadow shadow-black border border-[#222224] border-l-blue-500 flex flex-col">
      <div className="flex flex-row w-full px-4 py-2 text-white border-[#222224] border-b rounded-t-lg">
        <div className="flex justify-center items-center">
          <img
            className="w-[20px] h-[20px]"
            src={pythonIcon}
            alt="Python icon"
          />
        </div>

        <div className="ml-4">{filename}</div>

        <div className="flex ml-auto justify-center items-center">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              className="w-[20px] h-[20px]"
              alt="GitHub icon"
            />
          </a>
        </div>

        <button onClick={handleCopy} className="ml-2">
          <img src={copyIcon} className="w-[18px] h-[18px]" alt="Copy icon" />
        </button>
      </div>

      <div className="rounded text-sm overflow-auto bg-[#111111]">
        <pre className="bg-transparent">
          <code
            className="language-python"
            style={{ background: "transparent" }}
          >
            {codeBlock.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default PythonCode;
