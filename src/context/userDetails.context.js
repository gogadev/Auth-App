import { createContext } from "react";

const userDetailsContext = createContext({
  name: "",
  email: "",
  secretQuestion: "",
  secretAnswer: "",

  setUserDetails: (userDetails) => {},
});

export default userDetailsContext;
