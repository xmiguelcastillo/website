import "./App.css";
import HeadingBar from "./components/HeadingBar";
import TopBar from "./components/TopBar";
import { Link } from "react-router-dom";
import PythonDisplay from "./components/Languages/PythonDisplay";
import CppDisplay from "./components/Languages/CppDisplay";
import CsharpDisplay from "./components/Languages/CsharpDisplay";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#101010] h-full ">
      <HeadingBar />
      <TopBar />

      <Link className="" to="/python">
        <PythonDisplay />
      </Link>

      <Link className="" to="/cpp">
        <CppDisplay />
      </Link>

      <Link className="" to="/csharp">
        <CsharpDisplay />
      </Link>
    </div>
  );
}

export default App;
