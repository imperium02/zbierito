import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./auth/LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));
export default function App() {
  const classes = useStyles();
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {authenticated && <Route exact path="/" component={Home} />}
          <Route
            exact
            path="/"
            render={() => (
              <LoginForm setAuth={(isCorrect) => setAuthenticated(isCorrect)} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
