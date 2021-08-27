import { types } from "../Types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      localStorage.setItem("log", true);
      return {
        ...action.payload,
        log: true,
      };
    case types.logout:
      localStorage.setItem("log", false);
      return {
        log: false,
      };

    default:
      return state;
  }
};
