import React, { Component } from "react";
import TypeList from "./TypeList";
import axios from "axios";
export default class PokemonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pic: this.props.data.sprites?.front,
      isCaught: this.props.data.isCaught,
      renderList: false,
      currentType: "",
    };
    this.handleListUnmount = this.handleListUnmount.bind(this);
  }

  handleListUnmount() {
    this.setState({ renderList: false });
  }

  static getDerivedStateFromProps(props, state) {
    if (state.pic) {
      return;
    }
    if (props.data.sprites?.front !== state.pic) {
      return { pic: props.data.sprites?.front };
    }
    // if(state.isCaught)
    return { isCaught: props.data.isCaught, pic: props.data.sprites?.front };
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

  async fetchList(type) {
    if (type === "") return;
    try {
      const { data } = await axios.get(`/api/type/${type}`);
      console.log(data);
      this.setState({ list: data, renderList: true, currentType: type });
    } catch (error) {
      console.log(error);
      alert("Error in fetching pokemon list");
    }
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
        src={this.state.pic}
        onMouseOver={() => {
          this.setState({ pic: this.props.data.sprites.back });
        }}
        onMouseOut={() => {
          this.setState({ pic: this.props.data.sprites.front });
        }}
      />
    ) : null;

    const isCaught = this.state.isCaught ? (
      <button
        onClick={() => {
          this.releasePokemon();
        }}
      >
        Relese
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
          <div>{pic}</div>
          <p>{this.props.data.id ? isCaught : ""}</p>
        </div>
        {this.state.renderList ? (
          <TypeList
            unmountMe={this.handleListUnmount}
            type={this.state.list}
            currentType={this.state.currentType}
            updatePokemon={this.props.updatePokemon}
          />
        ) : null}
      </div>
    );
  }
}
