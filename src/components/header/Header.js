import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { types } from "../../Types/types";
import "./header.css";

export const Header = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = () => {
    dispatch({ type: types.logout });
  };

  return (
    <>
      <header>
        <h1>SUPER TEAM</h1>
      </header>
      <span className="span-btn">
        <button className="btn btn-danger w-1" onClick={handleLogOut}>
          cerrar sesion
        </button>
      </span>
      <div className="information-app">
        <ul>
          <li>
            <p>Arma tu SÚPER equipo usando HEROES y VILLANOS!</p>
          </li>
          <li>
            <p>Elige hasta 3 de cada bando!</p>
          </li>
        </ul>
        <div className="contact">
          <a
            href="https://github.com/AlejandroWogelman"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-x3 fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/alejandrowogel/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
};
