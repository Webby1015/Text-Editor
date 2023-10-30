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
      <div className="space-x-1 mr-4">
        <button className=" px-3 py-2 hover:bg-slate-300 rounded-md"><img className=" h-8" src="src\assets\diskette.png" alt="" srcset="" /></button>
        <button className=" px-3 py-2 hover:bg-slate-300 rounded-md"><img className=" h-8" src="src\assets\pdf.png" alt="" srcset="" /></button>
        <button className=" px-3 py-2 hover:bg-slate-300 rounded-md"><img className=" h-8" src="src\assets\docx.png" alt="" srcset="" /></button>

      </div>
    </div>
  );
}

export default Header;