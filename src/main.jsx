import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import University from "./University";
import Contact from "./Contact";
import Miguel from "./Miguel";

import PythonProjects from "./routes/PythonProjects";
import CppProjects from "./routes/CppProjects";
import CsharpProjects from "./routes/CsharpProjects";

import MundoWorldPage from "./routes/PythonProjects/MundoWorld/MundoWorldPage";
import FaceDetectionPage from "./routes/PythonProjects/FaceDetection/FaceDetectionPage";
import AstarPage from "./routes/PythonProjects/Astar/AstarPage";
import SnakePage from "./routes/PythonProjects/Snake/SnakePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/university",
    element: <University />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/miguel",
    element: <Miguel />,
  },
  {
    path: "/python",
    element: <PythonProjects />,
  },
  {
    path: "/cpp",
    element: <CppProjects />,
  },
  {
    path: "/csharp",
    element: <CsharpProjects />,
  },
  {
    path: "/python/mundoworld",
    element: <MundoWorldPage />,
  },
  {
    path: "/python/perceptron",
    element: <FaceDetectionPage />,
  },
  {
    path: "/python/astar",
    element: <AstarPage />,
  },
  {
    path: "/python/snakegame",
    element: <SnakePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
