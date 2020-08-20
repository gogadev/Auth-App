import React from "react";

import Login from "../login/Login";
import UserProfile from "../user-profile/UserProfile";

import mainImg from "../../assets/pen.png";

import "./main.style.css";

const Main = () => {
  return (
    <React.Fragment>
      <Login />
      <div className="main-img">
        <img className="main-image" src={mainImg} alt="" />
      </div>
      <UserProfile />
    </React.Fragment>
  );
};

export default Main;
