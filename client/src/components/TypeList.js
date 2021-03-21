import React, { Component } from "react";
import "../styles/TypeList.css";

class TypeList extends Component {
  dismiss() {
    this.props.unmountMe();
  }
  render() {
    return (
      <div className="typeLists">
        <div className="list-header">
          <h1>{`Pokemon type: ${this.props.currentType}`}</h1>
          <button
            className="buttons"
            onClick={() => {
              this.dismiss();
            }}
          >
            Close
          </button>
        </div>
        <ul className="orderList">
          {this.props.type.map((name) => {
            return (
              <li
                className="pokemon-list-item"
                onClick={() => {
                  this.props.updatePokemon(name);
                }}
              >
                {name + " "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TypeList;
