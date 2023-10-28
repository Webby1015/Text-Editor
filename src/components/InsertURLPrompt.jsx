// InsertURLPrompt.js
import React from "react";

class InsertURLPrompt extends React.Component {
  state = {
    url: "",
  };

  handleInputChange = (e) => {
    this.setState({ url: e.target.value });
  };

  handleInsertURL = () => {
    const { url } = this.state;
    this.props.onURLInsert(url);
    this.setState({ url: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a URL"
          value={this.state.url}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleInsertURL}>Insert URL</button>
      </div>
    );
  }
}

export default InsertURLPrompt;
