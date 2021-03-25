import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logoDark.png";

const Footer = () => {
  return (
    <div className="Footer__block" data-aos-offset="0" data-aos="fade">
      <div className="Footer__width" data-aos-offset="0" data-aos="fade">
        <img src={Logo} alt="footer logo" />
        <div className="Footer__column--first">
          <div className="Footer__column">
            <a
              className="Footer__textLink"
              href="mailto:hello@projectliberty.io"
            >
              Contact
            </a>
            <a
              className="Footer__textLink"
              href="https://www.unfinishedlabs.io"
              target="_blank"
              rel="noreferrer"
            >
              Unfinished Labs
            </a>
            <Link className="Footer__textLink" to="/about">
              About Project Liberty and its Partners
            </Link>
          </div>
          <div className="Footer__lastUpdated">
            Website last updated: 12/34/56 ©2020 Liberty 3.0 LLC
          </div>
        </div>
        <div className="Footer__column">
          <Link className="Footer__textLink" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="Footer__textLink" to="/code-of-conduct">
            Code of Conduct
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
