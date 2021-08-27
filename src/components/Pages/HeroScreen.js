import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { optimiceData } from "../../helpers/optimiceData";

import { GlobalState } from "../Context/GlobalState";
import { SingleHeroCard } from "./SingleHeroCard";

export const HeroScreen = ({ history }) => {
  const { id } = useParams();

  const { state } = useContext(GlobalState);

  const hero = state?.find((x) => x.id === id);
  const data = optimiceData(hero);

  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="container-single-card ">
      <button className="btn btn-info  btn-back" onClick={handleClick}>
        back
      </button>
      {data && <SingleHeroCard {...data} key={id} />}
    </div>
  );
};
