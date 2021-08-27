import React, { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthContext";
import { types } from "../../../Types/types";

export const Login = ({ history }) => {
  const lastItem = localStorage.getItem("lastPath") || "/";

  const { dispatch } = useContext(AuthContext);

  const toggle = () => {
    dispatch({ type: types.login });
    history.replace(lastItem);
  };
  return (
    <div>
      Welcome to the Aplication
      <button onClick={toggle}>ingresar</button>
    </div>
  );
};
