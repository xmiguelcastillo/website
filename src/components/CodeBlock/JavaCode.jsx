import githubIcon from "../../assets/githubIcon.png";
import copyIcon from "../../assets/copyIcon.png";
import javaIcon from "../../assets/javaicon.svg";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/srcery.css";
import linkIcon from "../../assets/linkIcon.png";
function JavaCode({ codeBlock, link, filename, theme }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlock);
  };

  return (
    <div className="w-[91%] min-h-screen lg:w-[500px] sm:w-[400px] mt-3 rounded-lg shadow shadow-black border border-[#222224] border-l-red-500 flex flex-col">
      <div className="flex flex-row w-full px-4 py-2 text-white border-[#222224] border-b rounded-t-lg">
        <div className="flex justify-center items-center">
          <img className="w-[25px] h-[25px]" src={javaIcon} alt="React icon" />
        </div>
        <div className="ml-4">{filename}</div>
        <div className="flex ml-auto justify-center items-center">
          <a
            href={
              "https://xmiguelcastillo.github.io/millenniumcomics-frontend/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkIcon}
              className="w-[22px] h-[22px]"
              alt="GitHub icon"
            />
          </a>
        </div>

        <div className="flex ml-2 justify-center  items-center">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              className="w-[18px] h-[18px]"
              alt="GitHub icon"
            />
          </a>
        </div>
        <button onClick={handleCopy} className="ml-2">
          <img src={copyIcon} className="w-[18px] h-[18px]" alt="Copy icon" />
        </button>
      </div>

      <div className="rounded text-sm overflow-x-auto bg-[#111111] ">
        <pre style={{ background: "transparent" }}>
          <code className="language-java" style={{ background: "transparent" }}>
            {codeBlock.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default JavaCode;
