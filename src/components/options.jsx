import React from "react";

const Options = ({ handleFormat, handleInsertLink }) => {
  return (
    <div className="space-x-4 rounded-lg mx-4 mb-4 bg-slate-200 p-3">
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("bold")}>
        Bold
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("italic")}>
        Italic
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("underline")}>
        Underline
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("justifyLeft")}>
        Align Left
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("justifyCenter")}>
        Align Center
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("justifyRight")}>
        Align Right
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("insertUnorderedList")}>
        Unordered List
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("insertOrderedList")}>
        Ordered List
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("undo")}>
        Undo
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={() => handleFormat("redo")}>
        Redo
      </button>
      <button className="btn hover:bg-slate-300 hover:rounded-lg p-1 " onClick={handleInsertLink}>
        Insert Link
      </button>
    </div>
  );
};

export default Options;
