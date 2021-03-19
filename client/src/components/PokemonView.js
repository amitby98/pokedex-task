import React, { Component } from "react";
import TypeList from "./TypeList";
export default class PokemonView extends Component {
  getAllTypes(type) {
    return <TypeList type={type} />;
  }
  render() {
    const newTypes = this.props.data.types?.map((type) => {
      return (
        <span
          onClick={() => {
            console.log(type.name);
            this.getAllTypes(type.name);
          }}
        >
          {type.name + ` `}{" "}
        </span>
      );
    });

    return (
      <div className="pokemon-view">
        <div className="details">
          <TypeList type={"fire"} />
          <ul className="details-list">
            <li>{`id: ${this.props.data.id}`}</li>
            <li>{`Height: ${this.props.data.height}`}</li>
            <li>{`Weight: ${this.props.data.weight}`}</li>
            <li>{`name: ${this.props.data.name}`}</li>
            <li>{/* <span>{`types: `}</span>
              {newTypes} */}</li>
          </ul>
          <img src={this.props.data.sprites?.front} />
        </div>
      </div>
    );
  }
}
