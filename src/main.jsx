import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import App from "./App";
import Miguel from "./pages/Miguel/Miguel.jsx";

import PythonProjects from "./routes/PythonProjects";
import JavascriptProjects from "./routes/JavascriptProjects";

import CppProjects from "./routes/CppProjects";
import CsharpProjects from "./routes/CsharpProjects";
import MundoWorldPage from "./routes/PythonProjects/MundoWorld/MundoWorldPage";
import FaceDetectionPage from "./routes/PythonProjects/FaceDetection/FaceDetectionPage";
import AstarPage from "./routes/PythonProjects/Astar/AstarPage";
import SnakePage from "./routes/PythonProjects/Snake/SnakePage";

import NextPage from "./routes/JavascriptProjects/Next/NextPage";
import PokedexPage from "./routes/JavascriptProjects/Pokedex/PokedexPage";
import MazePage from "./routes/JavascriptProjects/Maze/MazePage.jsx";
import SnakeGamePage from "./routes/JavascriptProjects/SnakeGame/SnakeGamePage";
import Calculator from "./routes/JavascriptProjects/Calculator/Calculator.jsx";
import ImageEditorPage from "./routes/PythonProjects/ImageEditor/ImageEditorPage.jsx";
import SpaceInvadersPage from "./routes/PythonProjects/SpaceInvaders/SpaceInvadersPage.jsx";
import BacktrackerPage from "./routes/PythonProjects/Backtracker/BacktrackerPage.jsx";
import JavaProjects from "./routes/JavaProjects.jsx";
import MillenniumComicsPage from "./routes/JavaProjects/MillenniumComics/MillenniumComicsPage.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import University from "./pages/University/University.jsx";
import Leetcode from "./pages/Miguel/Leetcode/Leetcode.jsx";
import ProblemPage from "./pages/Miguel/Leetcode/ProblemPage.jsx";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/resume", element: <Resume /> },
      { path: "/university", element: <University /> },
      { path: "/contact", element: <Contact /> },
      { path: "/miguel", element: <Miguel /> },
      { path: "/miguel/leetcode", element: <Leetcode /> },
      { path: "/miguel/leetcode/:problemId", element: <ProblemPage /> },

      { path: "/python", element: <PythonProjects /> },
      { path: "/javascript", element: <JavascriptProjects /> },
      { path: "/java", element: <JavaProjects /> },
      { path: "/java/millenniumcomics", element: <MillenniumComicsPage /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/javascript/pokedex", element: <PokedexPage /> },
      { path: "/javascript/maze", element: <MazePage /> },
      { path: "/javascript/snake", element: <SnakeGamePage /> },
      { path: "/javascript/next", element: <NextPage /> },
      { path: "/cpp", element: <CppProjects /> },
      { path: "/csharp", element: <CsharpProjects /> },
      { path: "/python/mundoworld", element: <MundoWorldPage /> },
      { path: "/python/perceptron", element: <FaceDetectionPage /> },
      { path: "/python/astar", element: <AstarPage /> },
      { path: "/python/image_editor", element: <ImageEditorPage /> },
      { path: "/python/space_invaders", element: <SpaceInvadersPage /> },
      { path: "/python/backtracker", element: <BacktrackerPage /> },
      { path: "/python/snakegame", element: <SnakePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} basename="/" />
  </StrictMode>,
);
