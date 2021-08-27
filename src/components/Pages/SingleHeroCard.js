import React from "react";
import "./singleCard.css";

export const SingleHeroCard = ({
  id,
  image,
  nombre,
  work,
  ojos,
  pelo,
  weight,
  height,
  aliases,
}) => {
  return (
    <div className="row justify-content-center m-0" key={id}>
      <div className="col-md-5  d-flex justify-content-center">
        <img src={image} alt={nombre} />
      </div>
      <div className="col-md-5 info-single-card">
        <h5>
          Nombre: <span>{nombre}</span>
        </h5>
        <p>
          Trabajo: <span>{work}</span>
        </p>
        <p>
          Alias:
          {aliases.map((x) => (
            <span> {x} </span>
          ))}
        </p>
        <p>
          Color de ojos: <span>{ojos}</span>
        </p>
        <p>
          Color de pelo: <span>{pelo}</span>
        </p>
        <p>
          Peso: <span>{weight?.map((p) => p + " ")}</span>
        </p>
        <p>
          Altura: <span>{height?.map((h) => h + " ")}</span>
        </p>
      </div>
    </div>
  );
};
