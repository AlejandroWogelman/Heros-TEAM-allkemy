import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const log = localStorage.getItem("log") || { log: false };

  const [auth, dispatch] = useReducer(authReducer, log);
  const value = {
    auth,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
