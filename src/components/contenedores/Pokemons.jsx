import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../card/PokemonCard";
import { getAll } from "../../redux/actions/pokemon";
import styled from "styled-components";

export default function Pokemons() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((store) => store.pokemonStore);
  // ciclo de vida
  useEffect(() => {
    dispatch(getAll());
  }, [pokemons.length]);

  return (
    <>
      <h1>Encuentra todos los Pokemons</h1>
      <ContenedorStyled>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <PokemonCard key={crypto.randomUUID()} {...pokemon} />
          ))}
      </ContenedorStyled>
    </>
  );
}

const ContenedorStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
