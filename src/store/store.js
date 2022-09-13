import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../redux/reducers/pokemon";

export const store = configureStore({
  reducer: {
    pokemonStore: pokemonReducer,
  },
});
