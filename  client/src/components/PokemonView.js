import React, { Component } from "react";
export default class PokemonView extends Component {
  render() {
    return (
      <div className="pokemon-view">
        <div className="details">
          <ul className="details-list">
            <li>{`id: ${this.props.data.id}`}</li>
            <li>{`Height: ${this.props.data.height}`}</li>
            <li>{`Weight: ${this.props.data.weight}`}</li>
            <li>{`name: ${this.props.data.name}`}</li>
            <li>{`types: ${this.props.data.types
              ?.map((type) => type.name)
              .join()}`}</li>
          </ul>
          <img src={this.props.data.sprites?.front} />
        </div>
      </div>
    );
  }
}
