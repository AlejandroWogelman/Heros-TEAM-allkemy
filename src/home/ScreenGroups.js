import React, { useContext, useState } from "react";

import { CardGroup } from "./CardGroup";
import { StatsGroup } from "./StatsGroup";
import { GlobalState } from "../components/Context/GlobalState";

import "./screenGroups.css";
import { CardSearch } from "../components/card-search/CardSearch";
import { Header } from "../components/header/Header";

export const ScreenGroups = () => {
  const { state } = useContext(GlobalState);

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <div className="row justify-content-center container-general ">
        <Header />
        {toggleModal && <CardSearch setToggleModal={setToggleModal} />}
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
                    setToggleModal={setToggleModal}
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
