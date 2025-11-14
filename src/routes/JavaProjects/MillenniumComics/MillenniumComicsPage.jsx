import React, { useEffect, useState } from "react";
import HeadingBar from "../../../components/HeadingBar";
import comicGif from "../../assets/comic.gif"
import MillenniumComicsTools from "./MillenniumComicsTools.jsx";
import MillenniumComicsTools2 from "./MillenniumComicsTools2.jsx";
import JavaCode from "../../../components/CodeBlock/JavaCode.jsx";
import MillenniumComicsCode from "./MillenniumComicsCode.js";
function MillenniumComicsPage() {
    return (
        <div className="flex flex-col items-center h-full">
            <HeadingBar />

            <div className="flex text-center text-xl font-bold  text-white bg-clip-text w-[400px]">

                Millennium Comics Springboot and Supabase(Postgres/Docker)
            </div>
            <a
                href="https://xmiguelcastillo.github.io/millenniumcomics-frontend/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full flex justify-center"
            >
                <div
                    className=" w-[91%] h-[300px] lg:w-[600px] lg:h-[500px] sm:w-[400px] sm:h-[300px] mt-3 rounded-lg shadow shadow-black border-[1px] border-[#222224]"
                    style={{
                        backgroundImage: `url(${comicGif})`,
                        backgroundSize: "100%",
                        backgroundPosition: "center -3px",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </a>

            <MillenniumComicsTools/>
            <MillenniumComicsTools2/>
            <JavaCode codeBlock={MillenniumComicsCode} filename="Comic.java" link="https://github.com/xmiguelcastillo/millenniumcomics-backend"/>

        </div>
    );
}

export default MillenniumComicsPage;
