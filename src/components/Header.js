import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="Header__block">
      <Link to="/" className="Header__logoLink">
        <img className="Header__logo" src={logo} alt="header-logo" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
