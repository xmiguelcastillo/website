import React from "react";
import HeadingBar from "./components/HeadingBar";
import MiguelBox from "./components/MiguelBox";

import Tools from "./components/Tools";
function Miguel() {
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />
      <div className="text-white">Languages</div>
      <Tools />
    </div>
  );
}

export default Miguel;
