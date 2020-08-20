import React from "react";

import img from "../../assets/img.png";

import "./title.style.css";

const Title = () => {
  return (
    <div className="title">
      <h1 className="main-title">Welcome</h1>
      <div className="image">
        <img className="title-img" src={img} alt="" />
      </div>
    </div>
  );
};

export default Title;
