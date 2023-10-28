import React from "react";

const Options = ({ handleFormat, handleInsertLink }) => {
  return (
    <div className="space-x-2 mb-4">
      <button className="btn" onClick={() => handleFormat("bold")}>
        Bold
      </button>
      <button className="btn" onClick={() => handleFormat("italic")}>
        Italic
      </button>
      <button className="btn" onClick={() => handleFormat("underline")}>
        Underline
      </button>
      <button className="btn" onClick={() => handleFormat("justifyLeft")}>
        Align Left
      </button>
      <button className="btn" onClick={() => handleFormat("justifyCenter")}>
        Align Center
      </button>
      <button className="btn" onClick={() => handleFormat("justifyRight")}>
        Align Right
      </button>
      <button className="btn" onClick={() => handleFormat("insertUnorderedList")}>
        Unordered List
      </button>
      <button className="btn" onClick={() => handleFormat("insertOrderedList")}>
        Ordered List
      </button>
      <button className="btn" onClick={() => handleFormat("undo")}>
        Undo
      </button>
      <button className="btn" onClick={() => handleFormat("redo")}>
        Redo
      </button>
      <button className="btn" onClick={handleInsertLink}>
        Insert Link
      </button>
    </div>
  );
};

export default Options;
