import React, { useState } from "react";

export default function Calculator() {
  const [total, setTotal] = useState(9);
  const [curNum, setCurNum] = useState(null);
  function clickNum() {
    return setTotal(num);
  }
  function addtion() {
    setTotal(curNum);
    curNum;
  }
  function clear() {
    setTotal(0);
  }
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="w-10 h-10 bg-white text-black flex justify-center items-center">
        {total}
      </div>
      <div className="w-10 h-10 bg-blue-300 text-black flex justify-center items-center">
        +
      </div>
      <button onClick={clickNum} className="w-10 h-10 bg-red-500">
        1
      </button>
      <button className="w-10 h-10 bg-green-500">2</button>
      <div className="w-10 h-10 bg-blue-300 text-black flex justify-center items-center">
        =
      </div>
      <button onClick={clear} className="w-10 h-10 bg-orange-600">
        c
      </button>
      hey guys
    </div>
  );
}
