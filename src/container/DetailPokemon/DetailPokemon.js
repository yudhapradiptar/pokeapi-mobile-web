import React, { useState, useEffect } from "react";
import image from "../../assets/images/logo192.png";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";

const DetailPokemon = () => {
  const moves = "Moonwalk";
  const types = "Electric";
  const [showForm, setShowForm] = useState(false);
  const [nickForm, setNickForm] = useState("");

  const handleSubmitCatch = async (event) => {
    // event.preventDefault();
    if(nickForm !== ""){
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
          style={showForm ? { height: "60vh" } : {}}
        >
          <div className="pokemon-item">
            <img src={image} alt="pokemon" className="pokemon-image" />
            <p>Moves: {moves}</p>
            <p>Types: {types}</p>
            {/* {!showForm && <div className="poke-button" onClick={() => setShowForm(true)}>
              Catch!
            </div>} */}
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
