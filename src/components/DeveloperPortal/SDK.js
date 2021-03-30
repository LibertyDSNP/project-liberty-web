import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Sdk = (props) => {
  useEffect(() => {
    props.onPathChange("developer-portal");
  }, [props]);

  return (
    <div className="SDK__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="SDK__content">
        <h1>SDK</h1>
        <h2>Body</h2>
      </div>
    </div>
  );
};

export default Sdk;
