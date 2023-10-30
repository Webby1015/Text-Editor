import React, { Component } from "react";
import "./text-editor.css";
import Options from "./options"; // Import the Options component
import Header from "./Header";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    handleChange = () => {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const content = this.editor.innerHTML;
      this.setState({ content }, () => {
        selection.removeAllRanges();
        selection.addRange(range);
      });
    };
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

  render() 
  {
    return (
      <>
      <div className=" mx-2 mt-2">
        <Header />
        <Options // Use the Options component
          handleFormat={this.handleFormat}
          handleInsertLink={this.handleInsertLink}
          handleFontChange={this.handleFontChange}
        />


        </div>
        <div className="max-w-screen-lg mx-auto p-4">
          <div
            className="border shadow-md bg-white   h-screen p-20"
            contentEditable={true}
            onInput={this.handleChange}
            dangerouslySetInnerHTML={{ __html: this.state.content }}
            style={{ outline: "none" }}
          />
        </div>
      </>
    );
  }
}

export default TextEditor;
