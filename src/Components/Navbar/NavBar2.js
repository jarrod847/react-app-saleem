import React from "react";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div className="Navbar">
      <h1>Jarrod's Place</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default NavBar2;
