import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation__block">
      <Link to="/about" className="Navigation__link">
        About
      </Link>
      <span className="Navigation__divider"> / </span>
      <Link to="/developer-portal" className="Navigation__link">
        Developer Portal
      </Link>
      <span className="Navigation__divider"> / </span>
      <Link to="/lets-connect" className="Navigation__link">
        Let's Connect
      </Link>
      <span className="Navigation__divider"> / </span>
      <a
        className="Navigation__link"
        href="https://github.com/LibertyDSNP/papers"
        target="_blank"
        rel="noreferrer"
      >
        Whitepaper
      </a>
    </div>
  );
};

export default Navigation;
