import React from "react";
import pythonIcon from "../../assets/pythonIcon.svg";
import githubIcon from "../../assets/githubIcon.png";
import reactIcon from "../../assets/reactIcon.svg";
import copyIcon from "../../assets/copyIcon.png";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function JavascriptCode({ codeBlock, link, filename, theme }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlock);
  };

  return (
    <div className="w-[400px] h-full lg:h-full lg:w-[500px] sm:w-[400px] mt-3 rounded-lg shadow shadow-black border-[1px] border-l-red-500 border-[#222224] flex-col">
      <div className="flex flex-row w-full px-4 py-2 text-white border-[#222224] border-b-[1px] rounded-t-lg">
        <div className="flex justify-center items-center">
          <img className="w-[15px] h-[15px]" src={reactIcon} alt="react" />
        </div>
        <div className="ml-4">{filename}</div>
        <div className="flex ml-auto justify-center items-center">
          <a href={link} target="_blank">
            <img
              src={githubIcon}
              className="w-[24px] h-[24px]"
              alt="GitHub icon"
            />
          </a>
        </div>
        <button onClick={handleCopy} className="ml-2">
          <img src={copyIcon} className="w-[12px] h-[15px]" alt="Copy icon" />
        </button>
      </div>

      <div className=" rounded text-sm overflow-x-auto bg-[#111111]">
        <SyntaxHighlighter
          language="python"
          style={dracula}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            padding: 8,
          }}
        >
          {codeBlock}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default JavascriptCode;
