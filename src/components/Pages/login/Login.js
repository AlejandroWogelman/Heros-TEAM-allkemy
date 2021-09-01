import React from "react";

import { InputLogin } from "../../input/InputLogin";

import "./login.css";

export const Login = () => {
  return (
    <div className="login-container">
      <h3>Ingresa para formar tu SÚPER equipo!</h3>

      <InputLogin />
    </div>
  );
};
