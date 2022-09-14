import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

const getAll = createAsyncThunk("pokemon/@GetAll", async () => {
  try {
    const { data } = await axios.get(API_URL);

    const pokemons = [];
    for (const pokemon of data?.results) {
      const { data } = await axios.get(pokemon?.url);
      const p = {
        id: data?.order,
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

const getOneId = createAsyncThunk("pokemon/@GetOneId", async () => {
  try {
    // const { data } = await axios.get(API_URL);
    // const pokemons = [];
    // for (const pokemon of data?.results) {
    //   const { data } = await axios.get(pokemon?.url);
    //   const p = {
    //     id: data?.order,
    //     name: data?.name,
    //     image: data?.sprites?.other?.dream_world?.front_default, //?. optional chainnig
    //   };
    //   pokemons.push(p);
    // }
    // return pokemons;
  } catch (error) {
    console.log(error);
  }
});

export { getAll };
