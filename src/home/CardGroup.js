import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../components/Context/GlobalState";

export const CardGroup = ({
  name,
  image,
  powerstats,
  id,
  index,
  state,
  setToggleModal,
  biography,
}) => {
  const { combat, durability, intelligence, power, speed, strength } =
    powerstats;

  const { handleDelete } = useContext(GlobalState);

  const handleToggle = () => {
    setToggleModal((x) => !x);
  };

  return (
    <>
      <div className="col-md-3 col-sm-6 card-group">
        <div style={{ position: "relative" }}>
          <img src={image.url} alt={name} className="col-12" />
          <p className="alignment">{biography.alignment}</p>
        </div>
        <div className="hero-info col-12 pb-4">
          <h5 className="pt-3"> {name}</h5>
          <hr />
          <p>Combat: {combat}</p>
          <p>Durability: {durability}</p>
          <p>Intelligence: {intelligence}</p>
          <p>Power: {power}</p>
          <p>Speed: {speed}</p>
          <p>Strength: {strength}</p>
          <Link to={`./hero/${name}/${id}`}>More</Link>
        </div>
        <div className="row box-actions">
          <button className="btn btn-light" onClick={() => handleDelete(id)}>
            eliminar
          </button>
        </div>
      </div>
      {state?.length < 6
        ? index === state.length - 1 && (
            <div className="col-md-3 col-sm-6">
              <button className="btn-add" onClick={handleToggle}>
                <i className="fas fa-2x fa-plus"></i>
              </button>
            </div>
          )
        : null}
    </>
  );
};
