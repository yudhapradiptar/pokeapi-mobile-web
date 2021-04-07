import React from "react";
import "./Navbar.scss";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="navitem">
          <AiOutlineHome />
        </Link>
        <Link to={"/my-pokemon"} className="navitem">
          <CgPokemon />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
