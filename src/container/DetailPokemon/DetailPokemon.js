import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";
import instance from "../../axios";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";

const DetailPokemon = () => {
  const [showForm, setShowForm] = useState(false);

  const { dispatch, myPokemons } = useContext(MyPokemonsContext);

  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    moves: [],
    types: [],
    image: "",
    nickname: "",
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

  const checkDuplicate = (nick) => {
    for (var i = 0; i<myPokemons.length;i++) {
      if (myPokemons[i].nickname === nick) return false;
    }
    return true;
  };

  const handleSubmitCatch = (e) => {
    e.preventDefault();
    try {
      if (checkDuplicate(pokemon.nickname)) {
        dispatch({ type: "CATCH", pokemon: pokemon });
        handleHideForm();
        window.alert(`${pokemon.nickname} has been caught`);
      } else {
        window.alert(`${pokemon.nickname} already used`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleHideForm = () => {
    setShowForm(false);
    setPokemon({
      ...pokemon,
      nickname: "",
    });
  };

  const catchingChance = () => {
    if (Math.random() < 0.5) {
      setShowForm(true);
    } else {
      window.alert("You missed, try again!");
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
              <form onSubmit={handleSubmitCatch}>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  placeholder="Enter Nickname"
                  onChange={(e) =>
                    setPokemon({
                      ...pokemon,
                      nickname: e.target.value,
                    })
                  }
                  required
                />
                <div className="form-buttons">
                  <input type="submit" value="Catch" />
                  <PokeButton
                    text="cancel"
                    color="white"
                    backgroundColor="#ff4444"
                    onclick={() => handleHideForm()}
                  />
                </div>
              </form>
            )}
            <div className="info-detail">
              <div className="detail-item">
                <p style={{ paddingRight: "20px" }}>Name:</p>
                <p>{pokemon.name}</p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "1rem" }}>Moves:</p>
                <p>
                  {pokemon.moves.map((move, i) =>
                    movesLen === i + 1
                      ? `${move.move.name}`
                      : `${move.move.name}, `
                  )}
                </p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "20px" }}>Types:</p>
                <p>
                  {pokemon.types.map((type, i) =>
                    typesLen === i + 1
                      ? `${type.type.name}`
                      : `${type.type.name}, `
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
