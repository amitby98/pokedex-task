import React, { Component } from "react";
import "../styles/CollectionList.css";

class CollectionList extends Component {
  clickme() {
    let a = parseFloat(
      document.getElementsByClassName("back_pokedex")[0].style.height
    );
    if (a === 280) {
      document.getElementsByClassName("back_pokedex")[0].style.height = "0px";
    } else {
      document.getElementsByClassName("back_pokedex")[0].style.height = "280px";
    }
  }
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
              <div className="center">
                <div className="pokedex_top">
                  <div
                    className="pokedex_button"
                    onClick={() => {
                      this.clickme();
                    }}
                  >
                    <div className="pokedex_button_button">
                      <li>
                        <div>{pokemon.data.name}</div>
                        <div>
                          <img src={pokemon.data.sprites.front}></img>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="back_pokedex" />
                <div className="pokedex_bottom" />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CollectionList;
