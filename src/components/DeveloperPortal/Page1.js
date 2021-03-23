import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Page1 = (props) => {
  useEffect(() => {
    props.onPathChange("page-1");
  }, [props]);

  return (
    <div className="Page1__block Component">
      <h1>DeveloperPortal</h1>
      <div className="Page1__layout">
        <DeveloperPortalNav />
        <div className="Page1__body">
          <h2>Body</h2>
        </div>
      </div>
    </div>
  );
};

export default Page1;
