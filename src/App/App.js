import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Box, ThemeProvider } from "@material-ui/core";

import SideBar from "../components/SideBar";

import { ROUTES, routes } from "../routes";

import { useStyles } from "./App.style";
import PageWrapper from "../components/PageWrapper";
import React from "react";
import { lightTheme } from "../theme";

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
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
  );
}

export default App;
