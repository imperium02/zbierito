import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import { authenticate } from "./auth";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  input: {
    margin: "2em",
  },
}));

export default function LoginForm({ setAuth }) {
  const classes = useStyles();
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    if (authenticate(pass)) {
      setAuth(true);
    }
  };

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="standard-password-input"
          type="password"
          label="Wpisz hasło"
          onChange={handleChange}
          className={classes.input}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
          className={classes.input}
        >
          Wejdź
        </Button>
      </Grid>
    </form>
  );
}
