import React from "react";
import HeadingBar from "./components/HeadingBar";

import Tools from "./components/Tools";
function Miguel() {
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />
      <Tools />
    </div>
  );
}

export default Miguel;
