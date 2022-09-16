import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../redux/actions/pokemon";

export default function Detalle() {
  const { pokemonId } = useParams(); // Hook para recuperar parametros de la url
  const dispatch = useDispatch();
  const { pokemon } = useSelector((store) => store.pokemonStore);

  useEffect(() => {
    dispatch(getPokemonById(Number(pokemonId)));
  }, [pokemonId]);

  return (
    <div>
      <h1>Detalle del Pokemon</h1>
      {pokemon ? (
        <div>
          <h2>{pokemon?.id}</h2>
          <h2>{pokemon?.name}</h2>
          <img src={pokemon?.image3D} alt={pokemon?.name} />
        </div>
      ) : (
        <h1>Cargando...!!</h1>
      )}
    </div>
  );
}
