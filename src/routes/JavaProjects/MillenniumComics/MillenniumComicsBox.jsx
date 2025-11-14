import React, { useState } from "react";
import ReactIcon from "../../../assets/reactsvg";
import {Spiderman} from "../../../components/Spiderman.jsx";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    PerspectiveCamera,
} from "@react-three/drei";
import JavaIcon from "../../../assets/javaIcon.jsx";
import SpringbootIcon from "../../../assets/springbootIcon.jsx";
import PostgresIcon from "../../../assets/postgresIcon.jsx";

function MillenniumComicsBox() {
    const [loading] = useState(false);

    const typeColors = {
        default: "#1b3e66",
        Fire: "#FF5733",
        Grass: "#0aff00",
        Electric: "#f5ff00",
    };
    const background = loading ? "rgba(0, 0, 0, 0.8)" : typeColors.Fire;

    return (
        <div className="flex flex-col justify-center items-center min-w-full mb-3">
            <div className="text-white flex justify-center mt-3">
                Millennium Comics Springboot and Supabase(Postgres/Docker)
            </div>

            <div
                className="
          w-[91%] sm:w-[400px] lg:w-[500px] mt-3
          font-light rounded-lg shadow shadow-black bg-[#111111]
          border-[1px] border-[#222224] text-md
          lg:h-[350px] h-[300px] overflow-hidden
        "
            >
                <div className="relative w-full h-3/5 flex justify-center items-center">
                    <div
                        className="absolute mt-[90px] flex items-center justify-center w-[200px] h-[100px] pointer-events-none"
                        style={{
                            width: "260px",
                            height: "160px",
                            background: "rgba(255, 0, 0, 0.7)",
                            borderRadius: "40% 60% 55% 45%",
                            filter: "blur(70px)",
                        }}
                    ></div>

                    <Canvas camera={{ position: [40, 5.5, 1], fov:9 }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[0, 1, 9]} intensity={1} />
                        <Spiderman position={[0, -3.0, 0]} rotation={[0, Math.PI / 2, 0]} />
                        <Environment preset="city" />
                        <OrbitControls enableZoom={true}
                        />
                    </Canvas>
                </div>

                <div className="flex-col w-full h-1/5">
                    <a
                        href="https://xmiguelcastillo.github.io/pokedex/bulbasaur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-normal flex justify-center items-center text-sm hover:underline"
                    >
                        Millennium Comics Springboot and Supabase(Postgres/Docker)
                    </a>

                    <div className="flex w-full px-2 h-full  justify-center font-normal items-center">
                        {[
                            { Icon: JavaIcon, label: "Java" },
                            { Icon: SpringbootIcon, label: "SpringBoot " },
                            { Icon: PostgresIcon, label: "Postgres" },
                            { Icon: ReactIcon, label: "React" },
                        ].map(({ Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center text-white bg-[#111111] border-[0.5px] border-[#8f909c] rounded-sm h-5 text-xs mx-1 w-24"
                            >
                                <div className="flex justify-center items-center h-full w-1/3">
                                    <Icon />
                                </div>
                                <div className="flex justify-center items-center h-full w-2/3 sm:text-[12px] text-[11px]">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-[#757a83] font-normal flex justify-center items-center text-xs">
                        REST API Spring Boot with Supabase

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MillenniumComicsBox;