import React, { useState, useEffect } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import { useLocation } from "react-router-dom";

const ListPokemon = () => {
  const location = useLocation();

  const arr = [2, 3, 5, 6, 12];

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <div className="list-pokemon">
        {arr.map((num) => (
          <PokemonCard num />
        ))}
      </div>
    </>
  );
};

export default ListPokemon;
