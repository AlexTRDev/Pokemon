import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
const API_URL2 = "https://pokeapi.co/api/v2/pokemon";

const getAll = createAsyncThunk("pokemon/@GetAll", async () => {
  try {
    const { data } = await axios.get(API_URL);

    const pokemons = [];
    for (const pokemon of data?.results) {
      const { data } = await axios.get(pokemon?.url);
      const p = {
        id: data?.id,
        name: data?.name,
        image: data?.sprites?.other?.dream_world?.front_default, //?. optional chainnig
      };
      pokemons.push(p);
    }
    return pokemons;
  } catch (error) {
    console.log(error);
  }
});

const getPokemonById = createAsyncThunk(
  "pokemon/@GetPokemonById",
  async (pokemonId) => {
    try {
      const { data } = await axios.get(`${API_URL2}/${pokemonId}`);
      console.log("data", data);
      const pokemon = {
        id: data?.id,
        name: data?.name,
        image3D: data?.sprites?.other?.home?.front_default,
      };

      return pokemon;
    } catch (error) {
      console.log(error);
    }
  }
);

export { getAll, getPokemonById };
