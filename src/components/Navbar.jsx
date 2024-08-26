import React from "react";

export default function Navbar({ onMenuClick }){
  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="block md:hidden text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="text-lg font-bold">Dashboard</div>
      </div>
      <div className="flex items-center space-x-4"></div>
    </nav>
  );
};
