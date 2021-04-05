import React from "react";
import "./Navbar.scss";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="navitem">
          <AiOutlineHome />
          <div className="navitem-title" style={{ marginLeft: "1rem" }}>
            Home
          </div>
        </Link>
        <Link to={"/my-pokemon"} className="navitem">
          <CgPokemon />
          <div className="navitem-title">My Pokemon</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
