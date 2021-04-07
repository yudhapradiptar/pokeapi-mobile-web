import React, { createContext, useReducer, useEffect } from "react";
import { myPokemonReducer } from "../reducer/myPokemonReducer";

export const MyPokemonsContext = createContext();

const MyPokemonsContextProvider = (props) => {
  const [myPokemons, dispatch] = useReducer(myPokemonReducer, [], ()=> {
      const localData = localStorage.getItem('myPokemons');
      return localData ? JSON.parse(localData) : [] 
  });
    useEffect(()=> {
        localStorage.setItem('myPokemons', JSON.stringify(myPokemons))
    }, [myPokemons])

  return (
    <MyPokemonsContext.Provider value={{ myPokemons, dispatch }}>
      {props.children}
    </MyPokemonsContext.Provider>
  );
};

export default MyPokemonsContextProvider;
