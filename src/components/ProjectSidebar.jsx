import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons

const ProjectSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-1 left-4 z-50 p-1 bg-gray-500 text-white rounded-sm shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 p-6 shadow-lg flex flex-col z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Heading */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-3">
          <h2 className="font-bold text-2xl text-gray-700">Your Projects</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-center transition-all duration-200 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:font-medium"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            + Add Project
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-center transition-all duration-200 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:font-medium"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            View Projects
          </NavLink>
        </nav>

        {/* Optional Footer */}
        <div className="mt-auto pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-500 text-center">
            Project Management v1.0
          </p>
        </div>
      </aside>
    </>
  );
};

export default ProjectSidebar;
