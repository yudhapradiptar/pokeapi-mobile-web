import React, { useState, useEffect, useContext } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";
import { gql, useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/Queries";

const ListPokemon = () => {
  const { error, loading, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 2, offset: 0 },
  });

  const { myPokemons } = useContext(MyPokemonsContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    console.log(data);
    if (data) {
      setPokemons(data.pokemons.results);
    }
  }, [data]);

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
        {pokemons.map((pokemon) => (
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
