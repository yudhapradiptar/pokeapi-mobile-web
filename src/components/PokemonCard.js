import React, { useState, useEffect } from "react";
import "./PokemonCard.scss";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/images/logo192.png";
import PokeButton from "./PokeButton";

const PokemonCard = (props) => {
  //   let path = window.location.pathname;
  const owned = 0;
  const nickname = "Test Nick";
  const location = useLocation().pathname;

  //   useEffect(() => {
  //     getData(1);
  //   }, []);

  return (
    <>
      <Link
        to={`/detail/${props.num}`}
        className="pokemon-card"
        onClick={() => console.log(window.location.pathname)}
        style={location === "/my-pokemon" ? { height: "50vh" } : {}}
      >
        <div className="pokemon-item">
          <div className="pokemon-image">
            <img src={image} alt="pokemon" className="pokemon-image" />
          </div>
          <div className="pokemon-info">
            <p>Owned: {owned}</p>
            {location === "/my-pokemon" && (
              <p className="nickname">Nickname: {nickname}</p>
            )}
            {location === "/my-pokemon" && (
              <PokeButton
                className="poke-button"
                text="Release!"
                onclick={()=>console.log("Released")}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;