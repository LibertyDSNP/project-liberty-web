import React from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Blog = () => {
  return (
    <div className="Page1__block Component">
      <h1>Blog</h1>
      <div className="Page1__layout">
        <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
        <div className="Page1__body">
          <h2>Body</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
