import "./App.css";
import HeadingBar from "./components/HeadingBar";
import TopBar from "./components/TopBar";
import { Link } from "react-router-dom";
import PythonDisplay from "./components/Languages/PythonDisplay";
import JavascriptDisplay from "./components/Languages/JavascriptDisplay";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#111111]">
      <HeadingBar />
      <TopBar />

      <Link
        to="/python"
        aria-label="Go to Python page"
        className="block w-full flex justify-center"
      >
        <PythonDisplay />
      </Link>

      <Link
        to="/javascript"
        className="block w-full flex justify-center"
        aria-label="Go to Javascript Page"
      >
        <JavascriptDisplay />
      </Link>
      {/*
      <L>pink to="/cpp" aria-label="Go to C++ page">
          <CppDisplay />
        </Link>
        */}
      {/*
        <Link to="/csharp" aria-label="Go to C# page">
          <CsharpDisplay />
        </Link>
        */}
    </div>
  );
}

export default App;
