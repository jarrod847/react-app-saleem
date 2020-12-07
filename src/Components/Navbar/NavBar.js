import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <h1>Saleem's Place</h1>
      <div className="Links">
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default NavBar;
