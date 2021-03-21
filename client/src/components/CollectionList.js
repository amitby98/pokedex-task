import React, { Component } from "react";

function clickme() {
  let a = parseFloat(
    document.getElementsByClassName("back_pokedex")[0].style.height
  );
  if (a === 280) {
    document.getElementsByClassName("back_pokedex")[0].style.height = "0px";
  } else {
    document.getElementsByClassName("back_pokedex")[0].style.height = "280px";
  }
}

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
              <div class="center">
                <div class="pokedex_top">
                  <div class="pokedex_button" onClick={clickme()}>
                    <div class="pokedex_button_button">
                      {/* <div>{pokemon.data.name}</div> */}
                      <img src={pokemon.data.sprites.front} />
                    </div>
                  </div>
                </div>
                <div class="back_pokedex"></div>
                <div class="pokedex_bottom"></div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CollectionList;
