import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header>
        <h1>SUPER TEAM</h1>
      </header>
      <div className="information-app">
        <ul>
          <li>
            <p>Arma tu SÚPER equipo usando HEROES y VILLANOS!</p>
          </li>
          <li>
            <p>Elige hasta 3 de cada bando!</p>
          </li>
        </ul>
      </div>
    </>
  );
};
