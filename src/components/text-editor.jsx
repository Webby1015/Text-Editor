import React, { Component } from "react";
import "./text-editor.css";
import Options from "./options";
import Header from "./Header";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: localStorage.getItem("savedContent") || "", // Load saved content from local storage
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
        range.setStart(textNode, textNode.length);
        range.setEnd(textNode, textNode.length);
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
