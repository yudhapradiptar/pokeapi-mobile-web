import React, { useState, useEffect } from "react";
import image from "../../assets/images/logo192.png";
import "./DetailPokemon.scss";
import PokeButton from "../../components/PokeButton";

const DetailPokemon = () => {
  const [showForm, setShowForm] = useState(false);
  const [nickForm, setNickForm] = useState("");

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
            <img src={image} alt="pokemon" className="pokemon-image" />
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
                <p>Actual name</p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "1rem" }}>Moves:</p>
                <p>
                  In nisi adipisicing labore nostru lorem ipsum badjsadisahdsai
                </p>
              </div>
              <div className="detail-item">
                <p style={{ paddingRight: "20px" }}>Types:</p>
                <p>In nisi adipisicing labore nostrud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
