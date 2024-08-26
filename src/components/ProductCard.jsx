//Product Card.js
import React from "react";

export default function Card ({ title, content,icon}){
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="bg-blue-900 rounded-lg h-12 w-10 flex justify-center items-center">{icon}</div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

