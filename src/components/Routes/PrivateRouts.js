import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouts = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return true ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
