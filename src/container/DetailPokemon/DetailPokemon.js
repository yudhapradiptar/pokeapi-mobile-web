import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";
import { useQuery } from "@apollo/client";
import { GET_DETAIL_POKEMON } from "../../graphql/Queries";
import Notifications from "../../components/Notifications";
import { CircularProgress } from "@material-ui/core";

const DetailPokemon = () => {
  const { name } = useParams();

  const [showForm, setShowForm] = useState(false);

  const { error, loading, data } = useQuery(GET_DETAIL_POKEMON, {
    variables: { name: name },
  });

  const { dispatch, myPokemons } = useContext(MyPokemonsContext);

  const [pokemon, setPokemon] = useState({
    name: "",
    moves: [],
    types: [],
    image: "",
    nickname: "",
  });

  const getPokemon = async () => {
    setPokemon({
      ...pokemon,
      name: data.pokemon.name,
      moves: data.pokemon.moves,
      types: data.pokemon.types,
      image: data.pokemon.sprites.front_default,
    });
  };

  let movesLen = pokemon.moves.length;
  let typesLen = pokemon.types.length;

  useEffect(() => {
    document.title = name;
    if (data) {
      getPokemon();
    }
  }, [data]);

  const checkDuplicate = (nick) => {
    for (var i = 0; i < myPokemons.length; i++) {
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
        Notifications("catch-submit", pokemon.nickname);
      } else {
        Notifications("nickname-exist", pokemon.nickname);
      }
    } catch (e) {
      Notifications("catch-failed", pokemon.name);
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
      Notifications("catch-success", pokemon.name);
      setShowForm(true);
    } else {
      Notifications("catch-failed", pokemon.name);
      setShowForm(false);
    }
  };

  return (
    <>
      <div className="detail">
        {error && (
          <div className="empty-pokeball">
            <h2>Something's wrong in the server, sorry :(</h2>
          </div>
        )}
        {loading && !error && (
          <CircularProgress color="secondary" size={120} className="loading" />
        )}
        {!loading && !error && (
          <div className="pokemon-card">
            <div className="pokemon-item">
              <img
                src={pokemon.image}
                alt="pokemon"
                className="pokemon-image"
              />
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
        )}
      </div>
    </>
  );
};

export default DetailPokemon;
