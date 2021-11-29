import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

import SideBar from "../components/SideBar";

import { ROUTES, routes } from "../routes";

import { useStyles } from "./App.style";
import PageWrapper from "../components/PageWrapper";
import React from "react";

function App() {
  const classes = useStyles();

  const RenderedRoute = (props) => {
    const { path, component, isPublic } = props;
    const Component = component;

    return (
      <Route
        path={path}
        exact
        render={(props) => {
          if (!isPublic) {
            return (
              <>
                {!isPublic && <SideBar />}
                <PageWrapper>
                  <Component {...props} />
                </PageWrapper>
              </>
            );
          } else {
            return <Redirect to={ROUTES.DASHBOARD} />;
          }
        }}
      />
    );
  };

  return (
    <Box className={classes.appWrapper}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <RenderedRoute
                key={route.path}
                exact
                path={route.path}
                component={route.component}
                isPublic={route.isPublic}
              />
            );
          })}
          <Redirect to={ROUTES.DASHBOARD} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
