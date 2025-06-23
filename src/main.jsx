import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import App from "./App";
import Resume from "./Resume";
import University from "./University";
import Contact from "./Contact";
import Miguel from "./Miguel";

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
import SnakeGamePage from "./routes/JavascriptProjects/SnakeGame/SnakeGamePage";
import Calculator from "./routes/JavascriptProjects/Calculator/Calculator.jsx";
import ImageEditorPage from "./routes/PythonProjects/ImageEditor/ImageEditorPage.jsx";
import SpaceInvadersPage from "./routes/PythonProjects/SpaceInvaders/SpaceInvadersPage.jsx";

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
      { path: "/python", element: <PythonProjects /> },
      { path: "/javascript", element: <JavascriptProjects /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/javascript/pokedex", element: <PokedexPage /> },
      { path: "/javascript/snake", element: <SnakeGamePage /> },
      { path: "/javascript/next", element: <NextPage /> },
      { path: "/cpp", element: <CppProjects /> },
      { path: "/csharp", element: <CsharpProjects /> },
      { path: "/python/mundoworld", element: <MundoWorldPage /> },
      { path: "/python/perceptron", element: <FaceDetectionPage /> },
      { path: "/python/astar", element: <AstarPage /> },
      { path: "/python/image_editor", element: <ImageEditorPage /> },
      { path: "/python/space_invaders", element: <SpaceInvadersPage /> },
      { path: "/python/snakegame", element: <SnakePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} basename="/" />
  </StrictMode>,
);
