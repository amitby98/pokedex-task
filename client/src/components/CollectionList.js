import React, { Component } from "react";
import "../styles/CollectionList.css";

class CollectionList extends Component {
  render() {
    return (
      <div>
        <h1>collection</h1>
        <ul>
          {this.props.list.map((pokemon) => {
            return (
              // <li>
              //   <div>{pokemon.data.name}</div>
              //   <div>
              //     <img src={pokemon.data.sprites.front}></img>
              //   </div>
              // </li>
              // <div className="center">
              //   <div className="pokedex_top">
              //     <div
              //       className="pokedex_button"
              //       onClick={() => {
              //         this.clickme();
              //       }}
              //     >
              //       <div className="pokedex_button_button" />
              //     </div>
              //   </div>
              //   <div className="back_pokedex">
              <li>
                <div>{pokemon.data.name}</div>
                <div>
                  <img src={pokemon.data.sprites.front} />
                </div>
              </li>
              //   </div>
              //   <div className="pokedex_bottom" />
              // </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CollectionList;
