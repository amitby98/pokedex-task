/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import PokemonView from "./components/PokemonView";
import SearchInput from "./components/SearchInput";
import CollectionList from "./components/CollectionList";
import "./styles/CollectionList.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: "",
      pokemonData: {},
      isExist: false,
      collectionList: [],
      isShown: false,
    };
    this.updatePokemon = this.updatePokemon.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  updatePokemon(newPokemonName) {
    this.setState({ currentPokemon: newPokemonName });
    this.isInCollection(newPokemonName);
    this.fetchPokemon(newPokemonName);
  }

  async isInCollection(name) {
    const { data } = await axios.get("/api/collection");
    this.setState({ collectionList: data });
    for (let pokemon of data) {
      if (name === pokemon.data.name || +name === pokemon.data.id) {
        this.setState({ isExist: true });
        return;
      }
    }
    console.log("not found");
    this.setState({ isExist: false });
  }

  async fetchPokemon(pokemonName) {
    if (!pokemonName) return;

    try {
      const { data } = await axios.get(`/api/pokemon/${pokemonName}`);
      this.setState({ pokemonData: data });
    } catch (error) {
      console.log(error);
      alert("Error in fetchPokemon");
    }
  }

  clickme() {
    let a = parseFloat(
      document.getElementsByClassName("back_pokedex")[0].style.height
    );
    if (a === 280) {
      document.getElementsByClassName("back_pokedex")[0].style.height = "0px";
    } else {
      document.getElementsByClassName("back_pokedex")[0].style.height = "280px";
    }
    this.setState({ isShown: !this.state.isShown });
  }

  render() {
    return (
      <div className="app-pokemon">
        <div className="header" />
        <SearchInput
          search={this.updatePokemon}
          isInCollection={this.isInCollection}
        />
        <PokemonView
          data={this.state.pokemonData}
          updatePokemon={this.updatePokemon}
          isExist={this.state.isExist}
          collectionList={this.state.collectionList}
        />
        <div className="center">
          <div className="pokedex_top">
            <div
              className="pokedex_button"
              onClick={() => {
                this.clickme();
              }}
            >
              <div className="pokedex_button_button" />
            </div>
          </div>
          <div className="back_pokedex">
            {this.state.isShown ? (
              <CollectionList list={this.state.collectionList} />
            ) : null}
          </div>
          <div className="pokedex_bottom" />
        </div>
      </div>
    );
  }
}
