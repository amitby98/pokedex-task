import React, { Component } from "react";

class TypeList extends Component {
  render() {
    return (
      <div>
        <h1>title</h1>
        <ul>
          {this.props.type.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TypeList;
