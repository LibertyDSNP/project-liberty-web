import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/brand-icon.png";
import GetCurrentPage from "./getCurrentPage";

const DeveloperPortalNav = (blockClassName) => {
  const currentPageTitle = GetCurrentPage();

  const getClassName = (name) => {
    return currentPageTitle === name
      ? "DeveloperPortalNav__dropdownLink DeveloperPortalNav__dropdownLink--active"
      : "DeveloperPortalNav__dropdownLink";
  };

  return (
    <div className={blockClassName.blockClassName}>
      {blockClassName.blockClassName === "DeveloperPortalNav__sideNav" && (
        <div className="DeveloperPortalNav__sideNavHeaderBlock">
          <div className="DeveloperPortalNav__sideNavHeader">
            <img
              src={Logo}
              className="DeveloperPortalNav__sideNavLogo"
              alt="brand icon"
            />
            <h3 className="DeveloperPortalNav__sideNavHeaderTitle">
              Liberty
              <br /> Developer
              <br /> Resources
            </h3>
          </div>
        </div>
      )}
      <div className="DeveloperPortalNav__dropdownLinkBlock">
        <Link
          to="/developer-portal"
          className="DeveloperPortalNav__dropdownLink"
        >
          Introduction
        </Link>
        <a
          href="http://spec.projectliberty.io/"
          className="DeveloperPortalNav__dropdownLink"
          target="_blank"
          rel="noreferrer"
        >
          Distributed Social Networking Protocol (DSNP)
        </a>
        <Link to="/testnet" className={getClassName("Testnet")}>
          Testnet
        </Link>
        <Link to="/sdk" className={getClassName("SDK")}>
          SDK
        </Link>
        <Link to="/example-client" className={getClassName("Example Client")}>
          Example Client
        </Link>
        <a
          href="https://forums.projectliberty.io/"
          className="DeveloperPortalNav__dropdownLink"
          target="_blank"
          rel="noreferrer"
        >
          Forums
        </a>
      </div>
    </div>
  );
};

export default DeveloperPortalNav;
