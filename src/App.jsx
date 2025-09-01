import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut";
import Home from "./components/Home";
import NewProjects from "./components/NewProjects";
import { ProjectsProvider } from "./components/ProjectContext";
import Projects from "./components/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "project", element: <NewProjects /> },
      { path: "projects", element: <Projects /> }, // 👈 moved inside LayOut
    ],
  },
]);

const App = () => {
  return (
    <ProjectsProvider>
      <main>
        <RouterProvider router={router} />
      </main>
    </ProjectsProvider>
  );
};

export default App;
