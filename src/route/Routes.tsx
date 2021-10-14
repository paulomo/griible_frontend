import React from "react";
import { Router, Switch, Redirect, Route } from 'react-router';
import { createBrowserHistory, History } from 'history';
import {
  AccountRoutes,
  AuthRoutes,
  WelcomeRoutes,
} from './RouteEnum';
import { RouteWithLayout } from './RouteWithLayout';
import { PlainLayout } from '../layout';
import { ConnectAccount, Email, Login, SignUp, WelcomePage } from "../pages";


export const Routes = () => {

  const history: History = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        {/* <Redirect exact from={NonAuthRoutes.base} to={NonAuthRoutes.welcome} /> */}
        <Route
          exact
          path={WelcomeRoutes.base}
          render={() => <Redirect to={WelcomeRoutes.home} />}
        />

        {/* WELCOME */}
        <RouteWithLayout
          Layout={PlainLayout}
          Component={WelcomePage}
          path={WelcomeRoutes.home}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />

        {/* AUTH */}
        <RouteWithLayout
          Layout={PlainLayout}
          Component={SignUp as unknown as React.FC}
          path={AuthRoutes.signup}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Login}
          path={AuthRoutes.login}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />

        {/* ACCOUNT */}
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Email}
          path={AccountRoutes.email}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={ConnectAccount}
          path={AccountRoutes.connectAccount}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
      </Switch>
    </Router>
  );
};
