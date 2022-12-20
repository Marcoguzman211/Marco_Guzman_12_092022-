import React from "react";
import logo from "../assets/logo.png";

/**
 *
 * @returns {JSX.Element} of the navbar containing the logo and the links.
 */
const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo de SportSee" />
      <p>Accueil</p>
      <p>Profil</p>
      <p>Réglages</p>
      <p>Commaunaté</p>
    </div>
  );
};

export default Navbar;
