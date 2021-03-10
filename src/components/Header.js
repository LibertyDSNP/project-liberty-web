import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Link to="/" className="Header__logoBlock">
      <img className="Header__logo" src={logo} alt="header-logo" />
    </Link>
  );
};

export default Header;
