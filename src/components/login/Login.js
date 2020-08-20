import React, { useState, useContext } from "react";

import { authenticate } from "../../auth/auth";

import LoadingContext from "../../context/loading.context";
import UserDetailsContext from "../../context/userDetails.context";

import "./login.style.css";

const Login = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const { setUserDetails } = useContext(UserDetailsContext);

  const [email] = useState("lia.thompson@gmail.com");
  const [password] = useState("liax630");

  const authenticateUser = () => {
    showLoading();
    authenticate(email, password).then((userDetails) => {
      const { name, email, secretQuestion, secretAnswer } = userDetails;

      setUserDetails({
        name,
        email,
        secretQuestion,
        secretAnswer,
      });
      hideLoading();
    });
  };

  return (
    <div className="user-details container">
      <label>Email</label>
      <input type="email" value={email} readOnly />
      <label>Password</label>
      <input type="password" value={password} readOnly />
      <button className="btn" type="submit" onClick={authenticateUser}>
        {" "}
        Log In
      </button>
    </div>
  );
};

export default Login;
