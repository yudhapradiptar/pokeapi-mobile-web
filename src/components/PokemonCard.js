import React, { useContext } from "react";
import "./PokemonCard.scss";
import { Link } from "react-router-dom";
import PokeButton from "./PokeButton";
import { MyPokemonsContext } from "../context/MyPokemonsContext";

const PokemonCard = (props) => {
  const { dispatch } = useContext(MyPokemonsContext);

  const releasePokemon = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({type: 'RELEASE', nickname: props.nickname})
  };

  return (
    <>
      <Link
        to={`/detail/${props.name}`}
        className="pokemon-card"
      >
        <div className="pokemon-item">
          <div className="pokemon-info">
            <p>Name: {props.name}</p>
            {props.from === "list" && <p>Owned: {props.owned}</p>}
            {props.from === "myPokemon" && (
              <p className="nickname">Nickname: {props.nickname}</p>
            )}
            {props.from === "myPokemon" && (
              <PokeButton
                className="poke-button"
                text="Release!"
                onclick={(e) => releasePokemon(e)}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
