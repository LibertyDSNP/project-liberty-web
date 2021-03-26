import React from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Testnet = () => {
  return (
    <div className="Testnet__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="Testnet__content">
        <h1>Testnet</h1>
        <h2>Body</h2>
      </div>
    </div>
  );
};

export default Testnet;