import React, { useEffect } from "react";

const DeveloperPortal = (props) => {
  useEffect(() => {
    props.onPathChange("developer-portal");
  }, [props]);

  return (
    <div className="Component">
      <h1>DeveloperPortal</h1>
    </div>
  );
};

export default DeveloperPortal;
