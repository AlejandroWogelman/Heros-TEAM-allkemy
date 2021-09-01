import { types } from "../Types/types";

export const authReducer = (state = {}, action) => {
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
};
