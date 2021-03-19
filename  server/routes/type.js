const { Router } = require("express");
const axios = require("axios");
const pokemon = require("./pokemon");

const type = Router();

type.get("/:name", (req, res) => {
  const { name } = req.params;
  axios
    .get(`https://pokeapi.co/api/v2/type/${name}`)
    .then((response) => {
      const pokemonNames = response.data.pokemon.map((list) => {
        return list.pokemon.name;
      });
      res.send(pokemonNames);
    })
    .catch((e) => {
      res.send("couldn't find the type you are looking for");
    });
});

module.exports = type;
