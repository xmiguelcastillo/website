import HeadingBar from "../components/HeadingBar";
import { Link } from "react-router-dom";
import PokedexBox from "./JavascriptProjects/Pokedex/PokedexBox";
import MillenniumComicsBox from "./JavaProjects/MillenniumComics/MillenniumComicsBox.jsx";
function JavaProjects() {
    return (
        <div className="flex flex-col items-center  h-full">
            <HeadingBar />
            <div className="text-xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-800 text-transparent bg-clip-text">
                JAVA PROJECTS
            </div>
            <Link
                className="block w-full flex justify-center"
                to="/java/millenniumcomics"
            >
                <MillenniumComicsBox/>
            </Link>
        </div>
    );
}

export default JavaProjects;
