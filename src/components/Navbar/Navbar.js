import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="navitem">
          {location.pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
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
