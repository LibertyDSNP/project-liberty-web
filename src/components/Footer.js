import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer__block" data-aos-offset="0" data-aos="fade">
      <span>©2020 Liberty 3.0 LLC</span>
      <span className="Footer__textSeparator">/</span>
      <a className="Footer__textLink" href="mailto:hello@projectliberty.io">
        Contact
      </a>
      <span className="Footer__textSeparator">/</span>
      <Link className="Footer__textLink" to="/privacy-policy">
        Privacy Policy
      </Link>
      <span className="Footer__textSeparator">/</span>
      <Link className="Footer__textLink" to="/code-of-conduct">
        Code of Conduct
      </Link>
      <span className="Footer__textSeparator">/</span>
      <a
        className="Footer__textLink"
        href="https://www.unfinishedlabs.io"
        target="_blank"
        rel="noreferrer"
      >
        Unfinished Labs
      </a>
    </div>
  );
};

export default Footer;
