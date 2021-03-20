import React, { Component } from "react";
import TypeList from "./TypeList";
import axios from "axios";
export default class PokemonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isCaught: this.props.data.isCaught,
      renderList: false,
      currentType: "",
    };
  }

  handleListUnmount() {
    this.setState({ renderList: false });
  }

  async releasePokemon() {
    axios.delete(`/api/collection/release/${this.props.data.name}`).then(() => {
      this.setState({ isCaught: false });
    });
  }

  async catchPokemon() {
    try {
      axios.post(`/api/collection/catch`, this.props).then(() => {
        this.setState({ isCaught: true });
      });
    } catch (error) {
      console.log(error);
      alert("Error in catching pokemon");
    }
  }

  async releasePokemon() {
    axios.delete(`/api/collection/release/${this.props.data.name}`).then(() => {
      this.setState({ isCaught: false });
    });
  }

  render() {
    const pic = this.props.data.sprites?.front ? (
      <img
        alt="pokemonImage"
        src={this.props.data.sprites.front}
        onMouseEnter={(e) => {
          e.target.src = this.props.data.sprites.back;
        }}
        onMouseLeave={(e) => {
          e.target.src = this.props.data.sprites.front;
        }}
      />
    ) : null;

    const isCaught = this.state.isCaught ? (
      <button
        onClick={() => {
          this.releasePokemon();
        }}
      >
        {" "}
        Relese{" "}
      </button>
    ) : (
      <button
        onClick={() => {
          this.catchPokemon();
        }}
      >
        Catch
      </button>
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
        <img alt="pokemonImage" src={this.state.picture} />

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
          <img
            alt="pokemonImage"
            src={this.state.pic}
            onMouseOver={() => {
              this.setState({ pic: this.props.data.sprites?.back });
            }}
            onMouseOut={() => {
              this.setState({ pic: this.props.data.sprites?.front });
            }}
          />

          <p>{this.props.data.id ? isCaught : ""}</p>
        </div>
        <TypeList type={this.state.list} />
      </div>
    );
  }
}
