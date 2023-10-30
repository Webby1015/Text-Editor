import React from "react";
import "./options.css";
const Options = ({ handleFormat, handleInsertLink }) => {
  return (
    <div className=" space-x-2 rounded-sm mx-4 mb-4 bg-slate-200 py-1 px-2">
      <button className=" hover:bg-slate-300 px-2 py-1 rounded-sm " onClick={() => handleFormat("bold")}>
        <img className="h-4" src="src\assets\bold.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("italic")}>
      <img className="h-4" src="src\assets\italics.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("underline")}>
      <img className="h-4" src="src\assets\underline.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("justifyLeft")}>
      <img className="h-4" src="src\assets\align-left.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("justifyCenter")}>
      <img className="h-4" src="src\assets\center-align.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("justifyRight")}>
      <img className="h-4" src="src\assets\right-align.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("insertUnorderedList")}>
      <img className="h-4" src="src\assets\unorderd_list.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("insertOrderedList")}>
      <img className="h-4" src="src\assets\ordered_list.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("undo")}>
      <img className="h-4" src="src\assets\undo.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={() => handleFormat("redo")}>
      <img className="h-4" src="src\assets\redo.png" alt="" srcset="" />
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-sm px-2 py-1   " onClick={handleInsertLink}>
      <img className="h-4" src="src\assets\link.png" alt="" srcset="" />
      </button>
    </div>
  );
};

export default Options;
