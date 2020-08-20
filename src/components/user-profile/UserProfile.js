import React, { useContext } from "react";

import UserDetailsContext from "../../context/userDetails.context";

import "./user-profile.style.css";

const UserProfile = () => {
  const {
    name,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails,
  } = useContext(UserDetailsContext);

  return (
    <div className="user-profile container">
      <h2 className="subtitle">My Details</h2>
      <input
        type="name"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setUserDetails({ name: e.target.value });
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setUserDetails({ email: e.target.value });
        }}
      />
      <input
        type="text"
        name="secretQuestion"
        value={secretQuestion}
        placeholder="Secret Question"
        onChange={(e) => {
          setUserDetails({ secretQuestion: e.target.value });
        }}
      />
      <input
        type="text"
        name="secretAnswer"
        value={secretAnswer}
        placeholder="Secret Answer"
        onChange={(e) => {
          setUserDetails({ secretAnswer: e.target.value });
        }}
      />
    </div>
  );
};

export default UserProfile;
