import React, { Component } from "react";
import "../styles/CollectionList.css";

class CollectionList extends Component {
  render() {
    return (
      <div>
        {/* <h1>collection</h1> */}
        <ul>
          {this.props.list.map((pokemon) => {
            return (
              <li>
                <div>{pokemon.data.name}</div>
                <div>
                  <img src={pokemon.data.sprites.front} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CollectionList;
