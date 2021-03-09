import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Link to="/">
      <img src={logo} alt="brand-logo" width={200} />
    </Link>
  );
};

export default Header;
