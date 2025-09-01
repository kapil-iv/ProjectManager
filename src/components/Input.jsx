import React from "react";

const Input = ({ title, type, textarea, ...props }) => {
  return (
    <p className="flex flex-col py-2">
      <label htmlFor="">{title}</label>
      {textarea ? (
        <textarea className="bg-gray-300 rounded-sm" {...props} />
      ) : (
        <input className="bg-gray-300 rounded-sm" type={type} {...props} />
      )}
    </p>
  );
};

export default Input;
