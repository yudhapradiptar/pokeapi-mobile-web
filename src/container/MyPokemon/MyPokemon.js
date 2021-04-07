import React, { useContext, useEffect } from "react";
import "../ListPokemon/ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";

const MyPokemon = () => {
  const { myPokemons } = useContext(MyPokemonsContext);

  useEffect(() => {
    document.title = "My Pokemon"
 }, []);

  return myPokemons.length !== 0 ? (
    <body>
      <div className="list-pokemon">
        {myPokemons.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            from="myPokemon"
          />
        ))}
      </div>
    </body>
  ) : (
    <div className="empty-list">There is no Pokemon here, catch some!</div>
  );
};

export default MyPokemon;
