import React from "react";
import { addCharacter } from "../../Redux/globalState";

import "./cardSearch.css";

export const IndividualCard = ({
  name,
  image,
  biography,
  hero,
  repeat,
  changeModal,
  dispatch,
}) => {
  return (
    <div
      className={`col-md-5 m-1 col-sm-10 card-search ${
        repeat
          ? "border border-success border-3"
          : "border border-danger border-3"
      } `}
    >
      <div className="justify-content-center d-flex position-relative">
        <img src={image?.url} alt={name} width="100%" />
        <p className="alignment ">{biography.alignment}</p>
      </div>
      <div style={{ height: "200px" }}>
        <p>{name}</p>
        <p>{biography["full-name"]}</p>
        <p>{biography["first-appearance"]}</p>
      </div>
      <button
        className="btn btn-success"
        onClick={() => dispatch(addCharacter(hero))}
      >
        {" "}
        add to team
      </button>
      <hr />
    </div>
  );
};
