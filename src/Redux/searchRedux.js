import axios from "axios";

import { URLbase } from "../Constants/constants";

export const SEARCH = "SEARCH";

const initialState = [];

export default function searchRedux(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        characters: action.payload,
      };
    default:
      return state;
  }
}
//action
export const fetchSearch = (name) => async (dispatch) => {
  const { data } = await axios.get(`${URLbase}search/${name}`);
  dispatch({ type: SEARCH, payload: data.results });
};
