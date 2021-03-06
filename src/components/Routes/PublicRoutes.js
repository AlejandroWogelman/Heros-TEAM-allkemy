import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
