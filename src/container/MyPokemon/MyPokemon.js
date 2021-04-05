import React, { useContext } from "react";
import "../ListPokemon/ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";

const MyPokemon = () => {
  const { myPokemons } = useContext(MyPokemonsContext);

  return myPokemons.length !== 0 ? (
    <>
      <div className="list-pokemon">
        {myPokemons.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            nickname={pokemon.nickname}
            from="myPokemon"
          />
        ))}
      </div>
    </>
  ) : (
    <div className="empty-list">There is no Pokemon here, catch some!</div>
  );
};

export default MyPokemon;
