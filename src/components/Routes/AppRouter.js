import { memo, useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";

import { Login } from "../Pages/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouts } from "./PrivateRouts";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = memo(() => {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoutes path="/login" exact auth={auth} component={Login} />
        <PrivateRouts path="/" auth={auth} component={DashboardRoutes} />
      </Switch>
    </Router>
  );
});
