import { types } from "../Types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      localStorage.setItem("log", true);
      return {
        ...action.payload,
        logg: true,
      };
    case types.logout:
      localStorage.setItem("log", false);
      return {
        logg: false,
      };

    default:
      return state;
  }
};
