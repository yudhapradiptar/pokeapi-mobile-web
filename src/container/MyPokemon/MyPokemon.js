import React, { useContext, useEffect } from "react";
import "../ListPokemon/ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";

const MyPokemon = () => {
  const { myPokemons } = useContext(MyPokemonsContext);

  useEffect(() => {
    document.title = "My Pokemon";
  }, []);

  return (
    <div className="list-body">
      <div className="list-pokemon">
        {myPokemons.length === 0 && (
          <div className="empty-pokeball">
            <img src={"/pokeball.png"} alt="empty-pokeball" />
            <h2>There's no pokemon here, catch some!</h2>
          </div>
        )}
        {myPokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} from="myPokemon" />
        ))}
      </div>
    </div>
  );
};

export default MyPokemon;
