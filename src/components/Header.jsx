import React from "react";

function Header() {
  return (
    <div className="flex">
      <div className="text-2xl font-bold m-4 flex">
        <p className="bg-blue-400 text-white px-1 rounded-sm">Text</p> Editor
      </div>
      <input
        className="m-3 p-2 focus:outline-thin placeholder:text-black bg-slate-100"
        type="text"
        placeholder="Untitled document"
        
      />
    </div>
  );
}

export default Header;
