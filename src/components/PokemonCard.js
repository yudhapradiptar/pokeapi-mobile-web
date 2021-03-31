import React, { useState, useEffect } from "react";
import "./PokemonCard.scss";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/images/logo192.png";

const PokemonCard = () => {
//   let path = window.location.pathname;
  const owned = 0;
  const nickname = "Test Nick"
  const location = useLocation();

//   useEffect(() => {
//     getData(1);
//   }, []);

  return (
    <Link
    to={"/detail/12"}
      className="pokemon-card"
      onClick={() => console.log(window.location.pathname)}
    >
      <div className="pokemon-item">
        <div className="pokemon-image"></div>
        <div className="pokemon-info">
        <img src={image} alt="pokemon" className="pokemon-image"/>
          <p>Owned: {owned}</p>
          {location.pathname === "/my-pokemon" && <p>Nickname: {nickname}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
