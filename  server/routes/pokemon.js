const { default: axios } = require("axios");
const { Router } = require("express");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  try {
    const { data } = await axios.get(`${POKEAPI_BASE_URL}/${req.params.name}`);
    const { height, weight, name, id, sprites, types } = data;

    res.json({
      height: height,
      weight: weight,
      name: name,
      id: id,
      sprites: {
        front: sprites["front_default"],
        back: sprites["back_default"],
      },
      types: types.map((type) => type.type),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error ocurred", error: error.message });
  }
});

module.exports = pokemon;
