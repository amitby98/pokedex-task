import React, { Component } from "react";
import TypeList from "./TypeList";
import axios from "axios";
export default class PokemonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pic: this.props.data.sprites?.front,
    };
  }

  async fetchList(type) {
    if (type === "") return;
    try {
      const { data } = await axios.get(`/api/type/${type}`);
      console.log(data);
      this.setState({ list: data });
    } catch (error) {
      console.log(error);
      alert("Error in fetching pokemon list");
    }
  }

  render() {
    const isCaught = this.props.data.isCaught ? (
      <button> Relese </button>
    ) : (
      <button> Catch </button>
    );

    const newTypes = this.props.data.types?.map((type) => {
      return (
        <span
          onClick={() => {
            this.fetchList(type.name);
          }}
        >
          {type.name + ` `}{" "}
        </span>
      );
    });

    const data = this.props.data;
    return (
      <div className="pokemon-view">
        <div className="details">
          <ul className="details-list">
            <li>{`id: ${data.id ? data.id : ""}`}</li>
            <li>{`Height: ${data.height ? data.height : ""}`}</li>
            <li>{`Weight: ${data.weight ? data.weight : ""}`}</li>
            <li>{`name: ${data.name ? data.name : ""}`}</li>
            <li>
              <span>{`types: `}</span>
              {newTypes}
            </li>
          </ul>
          {pic}

          <p>{this.props.data.id ? isCaught : ""}</p>
        </div>
        <TypeList type={this.state.list} />
      </div>
    );
  }
}
