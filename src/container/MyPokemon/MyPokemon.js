import React, { useContext, useEffect } from "react";
import "../ListPokemon/ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";
import emptyPokemon from "../../assets/images/empty.png";

const MyPokemon = () => {
  const { myPokemons } = useContext(MyPokemonsContext);

  useEffect(() => {
    document.title = "My Pokemon";
  }, []);

  return (
    <body>
      <div className="list-pokemon">
        {myPokemons.length === 0 && (
          <div className="empty-pokeball">
            <img src={emptyPokemon} alt="empty-pokeball" />
            <h2>There's no pokemon here, catch some!</h2>
          </div>
        )}
        {myPokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} from="myPokemon" />
        ))}
      </div>
    </body>
  );
};

export default MyPokemon;
