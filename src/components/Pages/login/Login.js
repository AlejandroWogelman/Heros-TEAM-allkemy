import React, { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthContext";
import { types } from "../../../Types/types";
import "./login.css";

export const Login = ({ history }) => {
  const lastItem = localStorage.getItem("lastPath") || "/";

  const { dispatch } = useContext(AuthContext);

  const toggle = () => {
    dispatch({ type: types.login });
    history.replace(lastItem);
  };
  return (
    <div className="login-container">
      <h3>Ingresa para formar tu SÚPER equipo!</h3>
      <button onClick={toggle} className="btn btn-primary">
        ingresar
      </button>
    </div>
  );
};
