import React, { createContext, useState } from "react";

export const MyPokemonsContext = createContext();

const MyPokemonsContextProvider = (props) => {
  const [myPokemons, setMyPokemons] = useState([]);

  const addMyPokemons = (pokemon) => {
    console.log("addMyPokemonsContext");
    setMyPokemons([...myPokemons, pokemon]);
  };
  const removeMyPokemon = (nickname) => {
    setMyPokemons(
      myPokemons.filter((pokemon) => pokemon.nickname !== nickname)
    );
  };
  return (
    <MyPokemonsContext.Provider
      value={{ myPokemons, addMyPokemons, removeMyPokemon }}
    >
      {props.children}
    </MyPokemonsContext.Provider>
  );
};

export default MyPokemonsContextProvider;
