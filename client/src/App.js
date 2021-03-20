/** @format */

import React from "react";
import axios from "axios";
import "./App.css";
import PokemonView from "./components/PokemonView";
import SearchInput from "./components/SearchInput";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPokemon: "", pokemonData: {} };
    this.updatePokemon = this.updatePokemon.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  updatePokemon(newPokemonName) {
    this.setState({ currentPokemon: newPokemonName });
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

  render() {
    console.log(this.state.pokemonData);
    return (
      <>
        <h1>Pokedex!</h1>
        <SearchInput search={this.updatePokemon} />
        <PokemonView
          data={this.state.pokemonData}
          updatePokemon={this.updatePokemon}
        />
      </>
    );
  }
}
