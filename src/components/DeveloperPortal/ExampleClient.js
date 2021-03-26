import React from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const ExampleClient = () => {
  return (
    <div className="ExampleClient__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="ExampleClient__content">
        <h1>Example Client</h1>
        <h2>Body</h2>
      </div>
    </div>
  );
};

export default ExampleClient;