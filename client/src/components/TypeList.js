import React, { Component } from "react";

class TypeList extends Component {
  dismiss() {
    this.props.unmountMe();
  }
  render() {
    return (
      <div>
        <h1>{`Pokemon list of the type ${this.props.currentType}`}</h1>
        <button
          onClick={() => {
            this.dismiss();
          }}
        >
          delete list
        </button>
        <ul>
          {this.props.type.map((name) => {
            return (
              <li
                onClick={() => {
                  this.props.updatePokemon(name);
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TypeList;
