import React from "react";
import "./Main-Banner.css";
const MainBanner = ({ title, course, mainImage }) => {
  return (
    <div style={{ positon: "relative" }}>
      <div className="banner-text-container banner-text-left">
        <h3 className="banner-course">{course}</h3>
        <h3 className="banner-title">{title}</h3>
      </div>
      <img src={mainImage} alt="banner" className="banner-img " />
    </div>
  );
};

export default MainBanner;
