import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonCard from "../components/card/PokemonCard";
import Navegador from "../components/nav/Navegador";
import Detalle from "../pages/Detalle";
import Home from "../pages/Home";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Navegador />}>
        {/* los hijos son Outlets */}
        <Route path="detalle/:pokemonId" element={<Detalle />} />
        <Route path="home" element={<Home />} />
        <Route
          path="about"
          element={
            <div>
              <h1>este es el about</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
