import React from "react";
import "./HomePageBanner.css";

const HomePageBanner = (props) => {
  return (
    <div className="banner">
      <h2 className="banner__title">Welcome</h2>
      <p className="banner__description">
        All your movies and tv shows in one place.
      </p>
    </div>
  );
};

export default HomePageBanner;
