import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newTodo, setNewTodo] = useState({});

  // ✅ load projects safely on mount
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("projects");
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      }
    } catch (err) {
      console.error("Invalid JSON in localStorage, clearing...", err);
      localStorage.removeItem("projects"); // clear broken data
      setProjects([]);
    }
  }, []);

  // ✅ save projects
  const saveProjects = (updated) => {
    setProjects(updated);
    try {
      localStorage.setItem("projects", JSON.stringify(updated));
    } catch (err) {
      console.error("Error saving projects:", err);
    }
  };

  // 🗑️ delete project
  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    saveProjects(updatedProjects);
  };

  // ➕ add todo to a project
  const handleAddTodo = (index) => {
    const todoText = newTodo[index]?.trim();
    if (!todoText) return;

    const updatedProjects = [...projects];
    if (!Array.isArray(updatedProjects[index].todos)) {
      updatedProjects[index].todos = [];
    }

    updatedProjects[index].todos.push({
      text: todoText,
      done: false,
    });

    saveProjects(updatedProjects);
    setNewTodo({ ...newTodo, [index]: "" });
  };

  // ✅ toggle todo
  const toggleTodo = (pIndex, tIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[pIndex].todos[tIndex].done =
      !updatedProjects[pIndex].todos[tIndex].done;

    saveProjects(updatedProjects);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
       {/* nav links */}
       <div className="flex gap-4 justify-center mb-4">
        <Link to="/" className="cursor-pointer p-2 bg-gray-200 rounded-md hover:underline">
          Home
        </Link>
        <Link
          to="/project"
          className="cursor-pointer p-2 bg-gray-200 rounded-md hover:underline"
        >
          Add Project
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">My Projects</h1>

     

      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, pIndex) => (
            <div
              key={pIndex}
              className="p-5 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition"
            >
              {/* Project Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {project.title || "Untitled Project"}
                  </h2>
                  <p className="text-gray-600">{project.description}</p>
                  {project.date && (
                    <p className="text-sm text-gray-500 mt-1">
                      Due: <span className="font-medium">{project.date}</span>
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(pIndex)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>

              {/* Todo Input */}
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Add a todo..."
                  value={newTodo[pIndex] || ""}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, [pIndex]: e.target.value })
                  }
                  className="flex-1 px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button
                  onClick={() => handleAddTodo(pIndex)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Add
                </button>
              </div>

              {/* Todo List */}
              {Array.isArray(project.todos) && project.todos.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.todos.map((todo, tIndex) => (
                    <li
                      key={tIndex}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={() => toggleTodo(pIndex, tIndex)}
                    >
                      <input
                        type="checkbox"
                        checked={todo.done}
                        readOnly
                        className="h-4 w-4 accent-blue-500"
                      />
                      <span
                        className={`${
                          todo.done ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No projects found. Add one!</p>
      )}
    </div>
  );
};

export default Projects;
