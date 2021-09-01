import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const init = () => {
    const token = localStorage.getItem("token") || "";

    if (token.length > 1) {
      return { log: true };
    } else {
      return { log: false };
    }
  };

  const [auth, dispatch] = useReducer(authReducer, {}, init);

  const value = {
    auth,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
