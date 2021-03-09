import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <p className="footer__p">
        ©2020 Liberty 3.0 LLC \
        <a href="mailto:hello@projectliberty.io">Contact</a> \
        <Link to="/privacy-policy">Privacy Policy</Link> \
        <a
          href="https://www.unfinishedlabs.io"
          target="_blank"
          rel="noreferrer"
        >
          Unfinished Labs
        </a>
      </p>
    </>
  );
};

export default Footer;
