import React from "react";
import "./Navbar.scss";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <>
      <div className="navbar">
        <div className="navDivider">
          <Link
            to={"/"}
            className="navitem"
            style={{ color: location === "/" ? "#9238c9" : "" }}
          >
            <AiOutlineHome />
          </Link>
        </div>
        <div className="navDivider">
          <Link
            to={"/my-pokemon"}
            className="navitem"
            style={{ color: location === "/my-pokemon" ? "#9238c9" : "" }}
          >
            <CgPokemon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
