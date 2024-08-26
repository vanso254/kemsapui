import React from "react";

export default function Sidebar({ isMobile, onClose }) {
  return (
    <div
      className={`${
        isMobile ? "md:hidden fixed inset-0 z-50" : "hidden md:block"
      } bg-blue-900 text-white h-screen p-4 ${isMobile ? "w-64" : "w-80"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Dashboard</div>
        {isMobile && (
          <button onClick={onClose} className="text-white focus:outline-none">
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <nav>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800"
        >
          Analytics
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800"
        >
          Sales
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800"
        >
          Reports
        </a>
      </nav>
    </div>
  );
}
