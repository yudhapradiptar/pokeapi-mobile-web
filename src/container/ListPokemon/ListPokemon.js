import React, { useState, useEffect, useContext } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import instance from "../../axios";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";

const ListPokemon = () => {
  useEffect(() => {
    getData();
  }, []);

  const { myPokemons } = useContext(MyPokemonsContext);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getListPokemon();

      setData(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getListPokemon = () => {
    return instance.get("/pokemon");
  };

  const getOwned = (name) => {
    let count = 0;
    for (let i = 0; i < myPokemons.length; i++) {
      if (myPokemons[i].name === name) count++;
    }
    return count;
  };

  return (
    <>
      <div className="list-pokemon">
        {data.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            owned={getOwned(pokemon.name)}
            from={"list"}
          />
        ))}
      </div>
    </>
  );
};

export default ListPokemon;
