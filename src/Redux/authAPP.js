import axios from "axios";

import { types } from "../Types/types";

export default function authRedux(state = "", action) {
  switch (action.type) {
    case types.login:
      localStorage.setItem("token", action.payload);
      return {
        log: true,
      };
    case types.logout:
      localStorage.removeItem("token");
      return {
        log: false,
      };

    default:
      return state;
  }
}

export const loginREDUX = (password, email) => async (dispatch) => {
  /* const TOKEN = await axios
    .post("http://challenge-react.alkemy.org", {
      password: password,
      email: email,
    })
    .then(({ data }) => {
      return { payload: data.token };
    })
    .catch((error) => console.log(error)); */

  dispatch({ type: types.login, payload: "token de ejemplo" });
};

export const logoutREDUX = () => (dispatch) => {
  dispatch({ type: types.logout });
};
