import React from "react";

function Header() {
  return (
    <div className="flex items-center">
      <div className="text-2xl font-bold m-4 flex">
        <p className="bg-blue-400 text-white px-1 rounded-sm">Text</p> Editor
      </div>
      <input
        className="m-3 p-2 focus:outline-none placeholder:text-black bg-slate-100 flex-1"
        type="text"
        placeholder="Untitled document"
      />
      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Save</button>
        <button className="bg-green-500 text-white px-3 py-2 rounded-md">Save as PDF</button>
        <button className="bg-yellow-500 text-white px-3 py-2 rounded-md">Save as .docx</button>
      </div>
    </div>
  );
}

export default Header;