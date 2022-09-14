import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../card/PokemonCard";
import { getAll } from "../../redux/actions/pokemon";
import styled from "styled-components";

export default function Pokemons() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((store) => store.pokemonStore); //[datos]

  const [buscar, setBuscar] = useState(""); // filtro ""
  const [filtrar, setFiltrar] = useState([]); // []

  const handleInput = (e) => {
    setBuscar(e.target.value);
  };

  // useEffect se ejecuta despues del renderizado del componente
  // ciclo de vida
  useEffect(() => {
    dispatch(getAll()); //
  }, [pokemons.length]);

  useEffect(() => {
    if (pokemons.length > 0) {
      setFiltrar(pokemons.filter((pokemon) => pokemon?.name?.includes(buscar)));
    }
  }, [buscar]);

  return (
    <>
      <h1>Encuentra todos los Pokemons</h1>
      <LabelStyled htmlFor="buscar">Buscar: </LabelStyled>
      <InputStyled
        id="buscar"
        name="buscar"
        type="search"
        placeholder="Busca tu pokemon..."
        onChange={handleInput}
      />

      <ContenedorStyled>
        {filtrar.length > 0
          ? filtrar.map((pokemon) => (
              <PokemonCard key={crypto.randomUUID()} {...pokemon} />
            ))
          : pokemons.length > 0 &&
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

const LabelStyled = styled.label`
  margin-right: 1rem;
  color: #dfd0d0;
`;

const InputStyled = styled.input`
  width: 400px;
`;
