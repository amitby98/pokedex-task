/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import PokemonView from "./components/PokemonView";
import SearchInput from "./components/SearchInput";
import ColletionList from "./components/ColletionList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: "",
      pokemonData: {},
      isExist: false,
      collectionList: [],
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
        <ColletionList list={this.state.collectionList} />
        <div class="center-on-page">
          <div class="pokeball">
            <div class="pokeball__button"></div>
          </div>
        </div>
      </div>
    );
  }
}
