import "./App.css";
import HeadingBar from "./components/HeadingBar";
import TopBar from "./components/TopBar";
import { Link } from "react-router-dom";
import PythonDisplay from "./components/Languages/PythonDisplay";
import CppDisplay from "./components/Languages/CppDisplay";
import CsharpDisplay from "./components/Languages/CsharpDisplay";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#101010] min-h-screen px-4">
      {/* Header Section */}

      <header className="w-full flex flex-col items-center justify-center">
        <HeadingBar />
        <TopBar />
      </header>

      <main className="flex flex-col items-center w-full ">
        <Link to="/python" aria-label="Go to Python page">
          <PythonDisplay />
        </Link>

        <Link to="/cpp" aria-label="Go to C++ page">
          <CppDisplay />
        </Link>

        <Link to="/csharp" aria-label="Go to C# page">
          <CsharpDisplay />
        </Link>
      </main>
    </div>
  );
}

export default App;
