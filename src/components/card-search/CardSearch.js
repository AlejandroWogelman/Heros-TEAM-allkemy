import React, { useContext } from "react";
import { GlobalState } from "../Context/GlobalState";

import { InputsSearch } from "../input/InputSearch";
import "./cardSearch.css";
import { IndividualCard } from "./IndividualCard";

export const CardSearch = ({ setToggleModal }) => {
  const { resultSearch, handleAdd, state } = useContext(GlobalState);

  //Counter del MODAL. Valoracion positiva y negativa
  const counter = state.reduce(
    (acc, el) =>
      el.biography.alignment === "good"
        ? { ...acc, good: acc.good + 1 || 1 }
        : { ...acc, bad: acc.bad + 1 || 1 },
    {}
  );

  const handleToggle = () => {
    setToggleModal((x) => !x);
  };

  return (
    <div className="Card-search row">
      <div className="max">
        <div className="text-end p-2 btn-modal">
          <button className="btn btn-danger" onClick={handleToggle}>
            X
          </button>
        </div>
        <div className="contain-search row">
          <div className="col-md-4 col-sm-12 container-input-search">
            <div className="row">
              <div className="col-12">
                <InputsSearch />
              </div>
              <div className="col-12">
                <div className="alert content-alert">
                  <p>
                    Goods: {counter.good || 0} - Bads: {counter.bad || 0}
                  </p>

                  <h6>Atención</h6>
                  <p>
                    Los personajes valorados como "<span>good</span>" o "
                    <span>bad</span>", no podran podran ser más de 3
                    respectivamente.
                  </p>
                  <p>No se agregará 2 veces la misma versión del personaje</p>

                  {counter.goods ? <span>{counter.goods}</span> : null}
                  {counter.bads ? <span>{counter.bads}</span> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 container-card-search">
            <div className="row justify-content-center">
              {resultSearch !== undefined ? (
                resultSearch.map((hero) => {
                  let repeat = false;
                  state.find((h) =>
                    hero.id === h.id ? (repeat = true) : null
                  );

                  return (
                    <IndividualCard
                      {...hero}
                      key={hero.id}
                      handleAdd={handleAdd}
                      hero={hero}
                      resultSearch={resultSearch}
                      state={state}
                      repeat={repeat}
                    />
                  );
                })
              ) : (
                <p className="text-center mt-2 no-result">Sin resultados</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
