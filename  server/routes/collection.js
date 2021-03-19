const { Router } = require("express");

const collection = Router();

let pokemonCollection = [];

collection.get("/", (req, res) => {
  res.send(pokemonCollection);
});

collection.post("/catch", (req, res) => {
  const { body } = req;
  body.isCaught = true;
  pokemonCollection.push(body);
  res.send("added successfully");
});

collection.delete("/release/:name", (req, res) => {
  const { name } = req.params;
  pokemonCollection = pokemonCollection.filter((pokemon) => {
    pokemon.name !== name;
  });
  res.send("deleted");
});

module.exports = collection;
