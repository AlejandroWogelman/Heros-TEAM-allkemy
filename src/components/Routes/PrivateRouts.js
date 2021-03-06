import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouts = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return auth ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
