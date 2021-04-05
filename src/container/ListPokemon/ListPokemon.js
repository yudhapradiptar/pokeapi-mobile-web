import React, { useState, useEffect } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import instance from "../../axios";

const ListPokemon = () => {
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
          <PokemonCard name={pokemon.name} from={"list"}/>
        ))}
      </div>
    </>
  );
};

export default ListPokemon;
