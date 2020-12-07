import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <h1>Saleem's Place</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default NavBar;
