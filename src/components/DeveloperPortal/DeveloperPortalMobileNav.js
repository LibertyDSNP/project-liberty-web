import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/brand-icon.png";

const DeveloperPortalMobileNav = () => {
  const pathname = window.location.pathname;

  const getPageTitle = {
    "/testnet": "Testnet",
    "/sdk": "SDK",
    "/example-client": "Example Client",
  };

  const [currentPageTitle, setCurrentPageTitle] = useState(
    getPageTitle[pathname]
  );
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    setCurrentPageTitle(getPageTitle[window.location.pathname]);
  }, [window.location.pathname]);

  return (
    <div className="DeveloperPortalMobileNav__block">
      <div className="DeveloperPortalMobileNav__headerBlock">
        <div className="DeveloperPortalMobileNav__header">
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
      <div className="DeveloperPortalMobileNav__dropdownLinkBlock">
        <div
          className="DeveloperPortalMobileNav__dropdownTitle"
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          {currentPageTitle}
          <div
            className={
              isOpenDropdown
                ? "DeveloperPortalMobileNav__dropdownIcon"
                : "DeveloperPortalMobileNav__dropdownIcon--closed"
            }
          >
            ❯
          </div>
        </div>
        {isOpenDropdown && (
          <>
            <Link
              to="/developer-portal"
              className="DeveloperPortalMobileNav__dropdownLink"
            >
              Introduction
            </Link>
            <a
              href="http://spec.projectliberty.io/"
              className="DeveloperPortalMobileNav__dropdownLink"
              target="_blank"
              rel="noreferrer"
            >
              Distributed Social Networking Protocol (DSNP)
            </a>
            {currentPageTitle !== "Testnet" && (
              <Link
                to="/testnet"
                className="DeveloperPortalMobileNav__dropdownLink"
              >
                Testnet
              </Link>
            )}
            {currentPageTitle !== "SDK" && (
              <Link
                to="/sdk"
                className="DeveloperPortalMobileNav__dropdownLink"
              >
                SDK
              </Link>
            )}
            {currentPageTitle !== "Example Client" && (
              <Link
                to="/example-client"
                className="DeveloperPortalMobileNav__dropdownLink"
              >
                Example Client
              </Link>
            )}
            <a
              href="https://forums.projectliberty.io/"
              className="DeveloperPortalMobileNav__dropdownLink"
              target="_blank"
              rel="noreferrer"
            >
              Forum
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default DeveloperPortalMobileNav;
