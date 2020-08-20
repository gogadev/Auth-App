import React from "react";

import Title from "./components/title/Title";

import LoadingProvider from "./components/loadingProvider/LoadingProvider";
import Spinner from "./components/spinner/Spinner";

import UserDetailsProvider from "./components/user-details/UserDetailsProvider";
import Main from "./components/main/Main";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <LoadingProvider>
        <Spinner />
        <UserDetailsProvider>
          <Title />
          <Main />
        </UserDetailsProvider>
      </LoadingProvider>
    </React.Fragment>
  );
};

export default App;
