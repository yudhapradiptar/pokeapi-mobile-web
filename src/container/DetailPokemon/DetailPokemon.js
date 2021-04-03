import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import image from "../../assets/images/logo192.png";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";
import instance from "../../axios";

const DetailPokemon = () => {
  const [showForm, setShowForm] = useState(false);
  const [nickForm, setNickForm] = useState("");

  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    moves: [],
    types: [],
    image: "",
  });

  const getPokemon = async () => {
    const response = await instance.get(`/pokemon/${name}`);
    setPokemon({
      ...pokemon,
      name: response.data.name,
      moves: response.data.moves,
      types: response.data.types,
      image: response.data.sprites.front_default,
    });
  };

  let movesLen = pokemon.moves.length;
  let typesLen = pokemon.types.length;

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

  const catchingChance = () => {
    const bool = Math.random() < 0.5;
    if (bool) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <>
      <div className="detail">
        <div className="pokemon-card">
          <div className="pokemon-item">
            <img src={pokemon.image} alt="pokemon" className="pokemon-image" />
            {!showForm && (
              <PokeButton
                className="poke-button"
                text="Catch!"
                onclick={() => catchingChance()}
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
            <div className="info-detail">
              <div className="detail-item">
                <p style={{ paddingRight: "20px" }}>Name:</p>
                <p>{pokemon.name}</p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "1rem" }}>Moves:</p>
                <p>
                  {pokemon.moves.map((move, i) => (
                    movesLen === i+1 ? `${move.move.name}`: `${move.move.name}, `
                  ))}
                </p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "20px" }}>Types:</p>
                <p>{pokemon.types.map((type, i) => (
                  typesLen === i+1 ? `${type.type.name}`: `${type.type.name}, `))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
