import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;