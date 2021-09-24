import { memo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Login } from "../Pages/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouts } from "./PrivateRouts";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = memo(() => {
  const validateStore = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
  };
  const auth = useSelector((store) => store.Logged.log) || validateStore();

  return (
    <Router>
      <Switch>
        <PublicRoutes path="/login" exact auth={auth} component={Login} />
        <PrivateRouts path="/" auth={auth} component={DashboardRoutes} />
      </Switch>
    </Router>
  );
});
