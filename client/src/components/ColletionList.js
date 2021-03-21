import React, { Component } from "react";

class ColletionList extends Component {
  render() {
    return (
      <div>
        <h1>collection</h1>
        <ul>
          {this.props.list.map((pokemon) => {
            return (
              <li>
                <div>{pokemon.data.name}</div>
                <div>
                  <img src={pokemon.data.sprites.front}></img>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColletionList;
