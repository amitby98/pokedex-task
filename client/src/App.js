/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import PokemonView from "./components/PokemonView";
import SearchInput from "./components/SearchInput";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPokemon: "", pokemonData: {}, isExist: false };
    this.updatePokemon = this.updatePokemon.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  updatePokemon(newPokemonName) {
    this.setState({ currentPokemon: newPokemonName });
    this.isInCollection(newPokemonName);
    this.fetchPokemon(newPokemonName);
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

  async isInCollection(name) {
    console.log(name);
    const { data } = await axios.get("/api/collection");
    // console.log(data[0].data);
    for (let pokemon of data) {
      console.log(pokemon.data.id);
      if (name === pokemon.data.name || +name === pokemon.data.id) {
        console.log("found");
        this.setState({ isExist: true });
        return;
      }
    }
    console.log("not found");
    this.setState({ isExist: false });
  }

  render() {
    console.log(this.state.pokemonData);
    console.log(this.state.pokemonData.sprites?.front);
    return (
      <>
        <h1>Pokedex!</h1>
        <SearchInput
          search={this.updatePokemon}
          isInCollection={this.isInCollection}
        />
        <PokemonView
          data={this.state.pokemonData}
          updatePokemon={this.updatePokemon}
          isExist={this.state.isExist}
        />
      </>
    );
  }
}
