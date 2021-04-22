import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logoDark.png";

const Footer = () => {
  const [showOutsideLink, setShowOutsideLink] = useState(false);
  return (
    <div className="Footer__block" data-aos-offset="0" data-aos="fade">
      <div className="Footer__width" data-aos-offset="0" data-aos="fade">
        <img src={Logo} alt="footer logo" />
        <div className="Footer__columnBlock">
          <div className="Footer__row">
            <div className="Footer__column--first">
              <div className="Footer__column">
                <a
                  className="Footer__textLink"
                  href="mailto:hello@projectliberty.io"
                >
                  Contact
                </a>
                <div
                  onMouseEnter={() => setShowOutsideLink(true)}
                  onMouseLeave={() => setShowOutsideLink(false)}
                >
                  <a
                    className="Footer__textLink Footer__outsideLink"
                    href="https://www.unfinishedlabs.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unfinished Labs
                    <div className="Footer__linkArrow">&#x2192;</div>
                  </a>
                  {showOutsideLink && (
                    <div className="Footer__outsideLinkCopy">
                      You are now leaving the Project Liberty website.
                    </div>
                  )}
                </div>
                <Link className="Footer__textLink" to="/about">
                  About Project Liberty and its Partners
                </Link>
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
          <div className="Footer__lastUpdated">
            Website last updated: 4/14/2021 ©2021 Unfinished Labs LLC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
