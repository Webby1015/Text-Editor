import React from "react";
import './options.css'

const Options = ({ handleFormat, handleInsertLink, handleFontChange, selectedFont }) => {
  const fontOptions = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Tahoma",
    "Helvetica",
    "Comic Sans MS",
    "Palatino",
    "Garamond",
    "Book Antiqua",
    "Trebuchet MS",
    "Lucida Sans Unicode",
    "Impact",
    "Arial Black",
    "Courier",
    "Lucida Console",
    "Cursive",
    "Fantasy",
    "Monospace",
  ];



  return (
    <div className=" space-x-2 flex rounded-sm mx-4 mb-4 bg-slate-200 py-1 px-2">
<div className="font-change-select">
  <select
    className="focus:outline-none px-2 border rounded-md transition duration-300 ease-in-out"
    value={selectedFont}
    onChange={handleFontChange}
  >
    {fontOptions.map((font, index) => (
      <option key={index} value={font}>
        {font}
      </option>
    ))}
  </select>
</div>

<div className="font-change-select">
  <select
    className="focus:outline-none px-2 border rounded-md transition duration-300 ease-in-out"
    value={selectedFont}
    onChange={handleFontChange}

           
  >
    {fontOptions.map((font, index) => (
      <option key={index} value={font}>
        {font}
      </option>
    ))}
  </select>
</div>
    

     
      

      <button  className="hover:bg-slate-300 px-2 py-1 rounded-sm" onClick={() => handleFormat("bold")} title="Bold (Ctrl+B)">
        <img className="h-4" src="src\assets\bold.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("italic")} title="Italic (Ctrl+I)">
        <img className="h-4" src="src\assets\italics.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("underline")} title="Underline (Ctrl+U)">
        <img className="h-4" src="src\assets\underline.png" alt="" srcSet="" />
      </button>
      <div className="verticalLine"></div>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("justifyLeft")} title="Align Left">
        <img className="h-4" src="src\assets\align-left.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover-bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("justifyCenter")} title="Align Center">
        <img className="h-4" src="src\assets\center-align.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("justifyRight")} title="Align Right">
        <img className="h-4" src="src\assets\right-align.png" alt="" srcSet="" />
      </button>
      <div className="verticalLine"></div>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("insertUnorderedList")} title="Unordered List (Ctrl+Shift+8)">
        <img className="h-4" src="src\assets\unorderd_list.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("insertOrderedList")} title="Ordered List (Ctrl+Shift+7)">
        <img className="h-4" src="src\assets\ordered_list.png" alt="" srcSet="" />
      </button>
      <div className="verticalLine"></div>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("undo")} title="Undo (Ctrl+Z)">
        <img className="h-4" src="src\assets\undo.png" alt="" srcSet="" />
      </button>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={() => handleFormat("redo")} title="Redo (Ctrl+Y)">
        <img className="h-4" src="src\assets\redo.png" alt="" srcSet="" />
      </button>
      <div className="verticalLine"></div>
      <button  className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1" onClick={handleInsertLink} title="Insert Link">
        <img className="h-4" src="src\assets\link.png" alt="" srcSet="" />
      </button>
    </div>
  );
};

export default Options;
