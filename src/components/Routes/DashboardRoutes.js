import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ScreenGroups } from "../../home/ScreenGroups";
import { HeroScreen } from "../Pages/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path="/inicio" component={ScreenGroups} />

      <Route exact path="/hero/:heroName/:id" component={HeroScreen} />
      <Redirect to="/inicio" />
    </Switch>
  );
};
