import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ userInput: event.target.value });
  }
  render() {
    return (
      <div>
        <input name="search-input" onChange={this.updateInput} />
        <button
          name="search-button"
          onClick={() => this.props.search(this.state.userInput)}
        >
          GO!
        </button>
      </div>
    );
  }
}
