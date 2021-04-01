import React, { useState, useEffect } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import { useLocation } from "react-router-dom";
import instance from "../../axios";

const ListPokemon = () => {
  const location = useLocation();

  const arr = [2, 3, 5, 6, 12];

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getListPokemon();
      console.log(response.data.results);

      setData(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getListPokemon = () => {
    return instance.get("/pokemon");
  };

  return (
    <>
      <div className="list-pokemon">
        {data.map((pokemon) => (
          <PokemonCard name={pokemon.name} />
        ))}
      </div>
    </>
  );
};

export default ListPokemon;
