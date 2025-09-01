import { createContext, useState } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};
