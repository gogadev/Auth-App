import React, { useContext } from "react";
import LoadingContext from "../../context/loading.context";

import spinner from "../../assets/spinner.gif";

import "./spinner.style.css";

const Spinner = () => {
  const { loadingCount } = useContext(LoadingContext);

  return (
    <div className="spinner">
      {loadingCount > 0 && <img className="spinner-img" src={spinner} alt="" />}
    </div>
  );
};

export default Spinner;
