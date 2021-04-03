import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import image from "../../assets/images/logo192.png";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";
import instance from "../../axios";

const DetailPokemon = () => {
  const moves = "Moonwalk";
  const types = "Electric";
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    moves: [],
    types: [],
    image: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [nickForm, setNickForm] = useState("");

  const getPokemon = async () => {
    const response = await instance.get(`/pokemon/${name}`);
    console.log(response.data);
    setPokemon({
      ...pokemon,
      name: response.data.name,
      moves: response.data.moves,
      types: response.data.types,
      image: response.data.sprites.front_default,
    })
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSubmitCatch = async (event) => {
    if (nickForm !== "") {
      try {
        console.log(nickForm);
        setShowForm(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleHideForm = () => {
    setShowForm(false);
    setNickForm("");
  };

  return (
    <>
      <div className="detail">
        <div
          className="pokemon-card"
        >
          <div className="pokemon-item">
            <img src={pokemon.image} alt="pokemon" className="pokemon-image" />
            <p>Name: {name}</p>
            <p>Moves: {moves}</p>
            <p>Types: {types}</p>
            {!showForm && (
              <PokeButton
                className="poke-button"
                text="Catch!"
                onclick={() => setShowForm(true)}
              />
            )}
            {showForm && (
              <div className="form">
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  placeholder="Enter Nickname"
                  onChange={(e) => setNickForm(e.target.value)}
                />
                <div className="form-buttons">
                  <PokeButton
                    text="submit"
                    color="white"
                    backgroundColor="#00C851"
                    onclick={() => handleSubmitCatch()}
                    disabled={nickForm === ""}
                  />
                  <PokeButton
                    text="cancel"
                    color="white"
                    backgroundColor="#ff4444"
                    onclick={() => handleHideForm()}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
