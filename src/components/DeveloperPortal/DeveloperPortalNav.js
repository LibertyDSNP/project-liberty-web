import React from "react";
import { Link } from "react-router-dom";

const DeveloperPortalNav = (blockClassName) => {
  const getClassName =
    blockClassName.blockClassName + " DeveloperPortalNav__list";
  return (
    <div className={getClassName}>
      <Link to="/introduction" className="DeveloperPortalNav__dropdownLink">
        Introduction
      </Link>
      <Link to="/dsnp" className="DeveloperPortalNav__dropdownLink">
        Distributed Social Networking Protocol (DSNP)
      </Link>
      <Link to="/testnet" className="DeveloperPortalNav__dropdownLink">
        Testnet
      </Link>
      <Link to="/skd" className="DeveloperPortalNav__dropdownLink">
        SDK
      </Link>
      <Link to="/example-client" className="DeveloperPortalNav__dropdownLink">
        Example Client
      </Link>
      <Link to="/blog" className="DeveloperPortalNav__dropdownLink">
        Blog
      </Link>
    </div>
  );
};

export default DeveloperPortalNav;
