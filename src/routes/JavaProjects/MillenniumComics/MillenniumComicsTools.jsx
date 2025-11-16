import JavascriptIcon from "../../../assets/javascriptsvg";
import ReactIcon from "../../../assets/reactsvg";
import ApiIcon from "../../../assets/apisvg";
import NextIcon from "../../../assets/nextsvg";
import JavaIcon from "../../../assets/javaIcon.jsx";
import SpringBootIcon from "../../../assets/springbootIcon.jsx";
import PostgresIcon from "../../../assets/postgresIcon.jsx";
import SupabaseIcon from "../../../assets/supabaseIcon.jsx";

function MillenniumComicsTools() {
  return (
    <div className="flex justify-center items-center flex-row  lg:w-[600px] sm:w-[400px] w-[91%]">
      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <JavaIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center sm:text-[14px] md:text-[15px] lg:text-[14px] items-center h-full">
          Java
        </div>
      </div>

      <div className="border-[.99px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <SpringBootIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[12px] items-center h-full text-center">
          Spring Boot
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <PostgresIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center text-[12px] mr-2 items-center h-full">
          Postgres
        </div>
      </div>

      <div className="border-[.05px] rounded-md border-[#3d3d42] mt-5 flex text-white bg-[#111111] w-28 h-9 text-xs mx-2">
        <div className="w-1/3 flex justify-center text-black items-center h-full bg-[#111111] rounded-l-md">
          <SupabaseIcon />
        </div>
        <div className="w-2/3 flex font-normal justify-center sm:text-[11px] md:text-[14px] lg:text-[11px] mr-2 items-center h-full">
          Supabase
        </div>
      </div>
    </div>
  );
}
export default MillenniumComicsTools;
