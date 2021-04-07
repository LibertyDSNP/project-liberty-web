import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Blog = (props) => {
  useEffect(() => {
    props.onPathChange("blog");
  }, [props]);

  return (
    <div className="Blog__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="Blog__contentBlock">
        <div className="Blog__content">
          <h1>Blog</h1>
          <h2>Body</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
