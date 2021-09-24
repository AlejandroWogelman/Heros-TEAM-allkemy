import React, { useCallback, useRef } from "react";

import { CardGroup } from "./CardGroup";
import { StatsGroup } from "./StatsGroup";

import "./screenGroups.css";
import { CardSearch } from "../components/card-search/CardSearch";
import { Header } from "../components/header/Header";
import { useSelector } from "react-redux";

export const ScreenGroups = () => {
  const state = useSelector((store) => store.stateGlobal.characters);

  const modal = useRef();

  const changeModal = useCallback(() => {
    modal.current?.classList.toggle("MODAL-OPEN");
  }, []);

  return (
    <>
      <div className="row justify-content-center container-general ">
        <div ref={modal} className="MODAL">
          {<CardSearch changeModal={changeModal} />}
        </div>
        <Header />
        <div className="team-container row">
          <div
            className="col-md-10 
        "
          >
            <div className="row justify-content-around">
              {state?.length > 0 &&
                state.map((hero, index, state) => (
                  <CardGroup
                    {...hero}
                    index={index}
                    state={state}
                    key={hero.id}
                    changeModal={changeModal}
                  />
                ))}
            </div>
          </div>
          <div className="col-md-8 col-sm-12 mt-3">{<StatsGroup />}</div>
        </div>
      </div>
    </>
  );
};
