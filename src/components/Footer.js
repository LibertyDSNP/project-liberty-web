import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logoDark.png";

const Footer = () => {
  return (
    <div className="Footer__block" data-aos-offset="0" data-aos="fade">
      <div className="Footer__width" data-aos-offset="0" data-aos="fade">
        <img src={Logo} />
        <div className="Footer__column">
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
            <a className="Footer__textLink">
              About Project Liberty and its Partners
            </a>
          </div>
          <br />
          <div>Website last updated: 12/34/56 ©2020 Liberty 3.0 LLC</div>
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
