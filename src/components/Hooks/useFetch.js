import axios from "axios";
import { useEffect, useState } from "react";
import { pet1, pet2 } from "../../Constants/constants";

export const useFetch = (id) => {
  const [state, setState] = useState([]);

  const setLocal = JSON.parse(localStorage.getItem("heros")) || [];

  const firstSix = () => {
    axios
      .all([axios.get(pet1), axios.get(pet2)])
      .then(
        axios.spread((firstResp, twoResp) => {
          setState([firstResp.data, twoResp.data]);
        })
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (setLocal.length >= 1) {
      setState(setLocal);
    } else {
      firstSix();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("heros", JSON.stringify(state));
  }, [state]);

  return { state, setState };
};
