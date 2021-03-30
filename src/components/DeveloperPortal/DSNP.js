import React from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const DSNP = () => {
  return (
    <div className="DSNP__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="DSNP__content">
        <h1>DSNP</h1>
        <h2>Body</h2>
      </div>
    </div>
  );
};

export default DSNP;
