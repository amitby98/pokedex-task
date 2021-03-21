const { Router } = require("express");

const collection = Router();

let pokemonCollection = [];

collection.get("/", (req, res) => {
  res.send(pokemonCollection);
});

collection.post("/catch", (req, res) => {
  const { body } = req;
  body.data.isCaught = true;
  pokemonCollection.push(body);
  res.send("added successfully");
});

collection.delete("/release/:name", (req, res) => {
  const { name } = req.params;
  pokemonCollection = pokemonCollection.filter((pokemon) => {
    return pokemon.data.name !== name;
  });
  res.send("deleted");
});

module.exports = collection;
