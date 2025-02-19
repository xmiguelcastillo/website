import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import SnakeCode from "../../PythonProjects/Snake/SnakeCode";

import SnakeGameTools from "./SnakeGameTools";
import { use } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [prevResult, setPrevResult] = useState(null);
  const [operation, setOperation] = useState(null);

  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operationButtons = ["X", "-", "+"];

  function handleClick(num) {
    setResult((prev) => prev * 10 + num); // Allow multi-digit input
  }

  function handleOperation(op) {
    setPrevResult(result);
    setResult(0);
    setOperation(op);
  }

  function handleEqual() {
    if (operation === "+") setResult(prevResult + result);
    if (operation === "-") setResult(prevResult - result);
    if (operation === "X") setResult(prevResult * result);
    setPrevResult(null);
    setOperation(null);
  }

  function handleClear() {
    setResult(0);
    setPrevResult(null);
    setOperation(null);
  }

  return (
    <div className="mt-40 flex flex-col items-center">
      {/* Display */}
      <div className="bg-slate-500 h-24 text-white text-3xl flex flex-col items-end justify-center px-4 w-[400px] border-[1px] border-black">
        <div className="text-gray-300 text-lg">
          {prevResult !== null ? `${prevResult} ${operation}` : ""}
        </div>
        <div>{result}</div>
      </div>

      {/* Calculator Buttons */}
      <div className="w-[400px] h-[600px] bg-slate-500 flex">
        {/* Numbers */}
        <div className="w-[300px] grid grid-cols-3 gap-2 p-2">
          {numberButtons.map((num) => (
            <button
              className="w-full h-[100px] text-white border-[1px] border-black bg-pink-500 text-2xl font-bold hover:border-yellow-200"
              key={num}
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Operators */}
        <div className="w-[100px] flex flex-col gap-2 p-2">
          {operationButtons.map((op) => (
            <button
              className="w-full h-[100px] text-white border-[1px] border-black bg-green-600 text-2xl font-bold hover:border-yellow-200"
              key={op}
              onClick={() => handleOperation(op)}
            >
              {op}
            </button>
          ))}
          <button
            className="w-full h-[100px] text-white border-[1px] border-black bg-blue-500 text-2xl font-bold hover:border-yellow-200"
            onClick={handleEqual}
          >
            =
          </button>
          <button
            className="w-full h-[100px] text-white border-[1px] border-black bg-red-500 text-2xl font-bold hover:border-yellow-200"
            onClick={handleClear}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

function List() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div>
      <ul>
        {list.map((element, index) => (
          <li key={index}>
            {element} {index}
          </li>
        ))}
      </ul>
    </div>
  );
}
function SnakeGamePage() {
  return (
    <div className="flex flex-col items-center  bg-white h-[1000px]">
      <Calculator />
    </div>
  );
}

export default SnakeGamePage;
