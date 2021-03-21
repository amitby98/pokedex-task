# pokedex-task

### By Amit, Samuel, and Niv

This is a pokemon API project made by Amit, Samuel, and Niv. \
Usage:

- Insert the pokemon ID or name (example: Pikachu - 25)
- Press the Go button
- The pokemon information will be shown on screen.
- Another pokemon can be looked up and the app will switch to it.
- You can press the pokemon type to see a list of pokemons with the same type. \
  Clicking one of them will move you to the pokemon page.

# Catching and releasing

- If a pokemon is looked up often, it may be better to catch it via the "Catch" button.
- This will allow the server to save the pokemons data (in a non persistent way) so it can be accessed easily.
- Clicking release will simply remove the pokemon from the server's memory.

## Client & server

General information:

- The client uses React, its our first project with it! :)
- The clients access the server which then sends the HTTP request to the pokeAPI.
- The server then retrieves the data and sends it back to the client.
- Catched pokemons are saved in the server not the client.
- To view catched pokemons, you can visit /api/collection.

## Heroku

This project is deployed in heroku!
click [Here](https://ancient-castle-75398.herokuapp.com/) to view it!
