import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const NewProjects = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("projects", JSON.stringify(updated));
    navigate("/projects");
  };

  const handleCancel = () => navigate("/");

  return (
    <div className="p-4 sm:p-6 w-full max-w-lg mx-auto bg-white rounded-xl shadow-md mt-6">
      {/* Header Buttons */}
      <menu className="flex gap-3 justify-end mb-5">
        <li>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm sm:text-base bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium transition"
          >
            Save
          </button>
        </li>
      </menu>

      {/* Form */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <Input
          type="text"
          title="Project Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <Input
          textarea
          title="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <div>
          <label className="block font-medium text-sm sm:text-base mb-1 sm:mb-2">
            Due Date
          </label>
          <Input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
