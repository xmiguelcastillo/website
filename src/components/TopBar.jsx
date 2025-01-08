import React from "react";

function TopBar() {
  return (
    <div className="lg:w-[500px] sm:w-[440px] font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224]">
      <div className="flex justify-center pt-2 text-xl text-white items-center  w-full h-2/5">
        <div>Miguel Castillo</div>
      </div>
      <div className="flex text-xs justify-center  items-center text-[#757a83]  w-full h-1/5">
        Newark, New Jersey
      </div>

      <div className="flex justify-center  items-center text-xs text-[#757a83]  w-full h-1/5">
        xmiguelcastillo@gmail.com
      </div>
      <div className="flex justify-center  mb-2 items-center text-xs text-[#757a83]  w-full h-1/5">
        Bachelor of Computer Science from Rutgers University, New Brunswick
      </div>
    </div>
  );
}

export default TopBar;
