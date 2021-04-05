import React, { useContext } from "react";
import "./PokemonCard.scss";
import { Link } from "react-router-dom";
import PokeButton from "./PokeButton";
import { MyPokemonsContext } from "../context/MyPokemonsContext";

const PokemonCard = (props) => {
  const { removeMyPokemon } = useContext(MyPokemonsContext);
  const owned = 0;

  const releasePokemon = (e) => {
    e.stopPropagation();
    e.preventDefault();
    removeMyPokemon(props.nickname)
  };

  return (
    <>
      <Link
        to={`/detail/${props.name}`}
        className="pokemon-card"
        onClick={() => console.log(window.location.pathname)}
      >
        <div className="pokemon-item">
          <div className="pokemon-info">
            <p>Name: {props.name}</p>
            {props.from === "list" && <p>Owned: {owned}</p>}
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
