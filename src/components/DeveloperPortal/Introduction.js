import React from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Introduction = () => {
  return (
    <div className="Introduction__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="Introduction__content">
        <h1>Introduction</h1>
        <h2>Body</h2>
      </div>
    </div>
  );
};

export default Introduction;
