import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DeveloperPortalNav from "./DeveloperPortal/DeveloperPortalNav";

const Navigation = () => {
  const initiallyShowMenu = window.innerWidth > 970 ? true : false;
  const [showNav, setShowNav] = React.useState(initiallyShowMenu);
  const [navIconClassName, setNavIconClassName] = React.useState(
    "Navigation__burger"
  );

  useEffect(() => {
    if (showNav) {
      setNavIconClassName("Navigation__burger Navigation__exitIcon");
    } else {
      setNavIconClassName("Navigation__burger");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 970) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [showNav]);

  const hideDropdownNav = () => {
    if (window.innerWidth < 971) {
      setShowNav(false);
    }
  };

  return (
    <>
      <div
        className={navIconClassName}
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <div className="Navigation__burger--bar1"></div>
        <div className="Navigation__burger--bar2"></div>
        <div className="Navigation__burger--bar3"></div>
      </div>
      {showNav && (
        <div className="Navigation__block">
          <Link
            to="/about"
            className="Navigation__link"
            onClick={() => hideDropdownNav()}
          >
            About
          </Link>
          <span className="Navigation__divider"> / </span>
          <div className="Navigation__dropdownBlock">
            <Link
              to="/developer-portal"
              className="Navigation__link Navigation__dropdownBtn"
              onClick={() => hideDropdownNav()}
            >
              Developer Portal
            </Link>
            <DeveloperPortalNav blockClassName="DeveloperPortalNav__topNav" />
          </div>
          <span className="Navigation__divider"> / </span>
          <Link
            to="/lets-connect"
            className="Navigation__link"
            onClick={() => hideDropdownNav()}
          >
            Let's Connect
          </Link>
          <span className="Navigation__divider"> / </span>
          <a
            className="Navigation__link showMenu"
            href="https://github.com/LibertyDSNP/papers"
            target="_blank"
            rel="noreferrer"
            onClick={() => hideDropdownNav()}
          >
            Whitepaper
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
