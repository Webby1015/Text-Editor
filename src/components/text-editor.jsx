import React, { Component } from "react";
import "./text-editor.css";
import Options from "./options";
import Header from "./Header";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: localStorage.getItem("savedContent") || "",
      selectedFontSize: "medium", // Initially set to a default size
    };
  }

  handleChange = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const content = this.editor.innerHTML;
    this.setState({ content }, () => {
      selection.removeAllRanges();
      selection.addRange(range);
  
      // Set the cursor to the end of the content
      const textNode = this.editor.lastChild;
      if (textNode) {
        const range = document.createRange();
        range.selectNodeContents(textNode);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };
  
  

  handleFormat = (command) => {
    document.execCommand(command);
  };

  handleFontChange = (event) => {
    const selectedFont = event.target.value;
    this.setState({ selectedFont }, () => {
      document.execCommand("fontName", false, selectedFont);
    });
  };

  handleInsertLink = () => {
    const url = prompt("Enter a URL:");
    if (url) {
      document.execCommand("createLink", false, url);
    }
  };

  handleSaveContent = () => {
    localStorage.setItem("savedContent", this.state.content);
    alert("Content saved!");
  };

    handleTextSizeChange = (size) => {
    document.execCommand("fontSize", false, size);
    this.setState({ selectedFontSize: size });
  };

  render() {
    return (
      <>
        <div className="mx-2 mt-2">
          <Header handleSaveContent={this.handleSaveContent} />
          <Options
            handleFormat={this.handleFormat}
            handleInsertLink={this.handleInsertLink}
            handleFontChange={this.handleFontChange}
          />
          <div>
            <button
              onClick={() => this.handleTextSizeChange("1")}
              className={this.state.selectedFontSize === "1" ? "active" : ""}
            >
              Small 
            </button>
            <button
              onClick={() => this.handleTextSizeChange("3")}
              className={this.state.selectedFontSize === "3" ? "active" : ""}
            >
              Medium
            </button>
            <button
              onClick={() => this.handleTextSizeChange("5")}
              className={this.state.selectedFontSize === "5" ? "active" : ""}
            >
              Large
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto p-4">
          <div
            className="border shadow-md bg-white h-screen p-20"
            contentEditable={true}
            onInput={this.handleChange}
            ref={(editor) => (this.editor = editor)}         
            dangerouslySetInnerHTML={{ __html: this.state.content }}
            style={{ outline: "none" }}
          />
        </div>
      </>
    );
  }
}

export default TextEditor;
