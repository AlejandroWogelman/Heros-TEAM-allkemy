import React, { useEffect } from "react";
import Swal from "sweetalert2";

import { InputLogin } from "../../input/InputLogin";

import "./login.css";

export const Login = () => {
  useEffect(() => {
    Swal.fire("Completa con los mismos datos de cada input para ingresar");
  }, []);

  return (
    <div className="login-container">
      <h3>Ingresa para formar tu SÚPER equipo!</h3>

      <InputLogin />
    </div>
  );
};
