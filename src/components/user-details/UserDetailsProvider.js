import React, { useState } from "react";
import merge from "lodash.merge";

import UserDetailsContext from "../../context/userDetails.context";

const UserDetailsProvider = ({ children }) => {
  const setUserDetails = ({ name, email, secretQuestion, secretAnswer }) => {
    updateUserDetails((prevState) => {
      const newState = { ...prevState };
      return merge(newState, {
        name,
        email,
        secretQuestion,
        secretAnswer,
      });
    });
  };

  const userState = {
    name: "",
    email: "",
    secretQuestion: "",
    secretAnswer: "",
    setUserDetails,
  };

  const [userDetails, updateUserDetails] = useState(userState);
  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
