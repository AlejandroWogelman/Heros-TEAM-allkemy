import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("log")) || { log: false };
  };

  const [auth, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(auth));
  }, [auth]);

  const value = {
    auth,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
