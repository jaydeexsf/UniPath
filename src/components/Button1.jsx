import React from "react";

const Button1 = ({ text, xmlns}) => {
  return (
    <button className="flex items-center px-6 py-3 font-semibold text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black">
      <div>{xmlns}</div>
      {text}
    </button>
  );
};

export default Button1;
