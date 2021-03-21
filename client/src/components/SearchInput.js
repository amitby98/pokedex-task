import React, { Component } from "react";
import "../styles/SearchInput.css";

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
      <div className="search">
        <input
          className="search-input"
          name="search-input"
          placeholder="Search a Pokemon"
          onChange={this.updateInput}
        />
        <button
          className="search-button"
          name="search-button"
          onClick={() => this.props.search(this.state.userInput)}
        >
          GO!
        </button>
      </div>
    );
  }
}
