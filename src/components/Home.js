import React from "react";
import Header from "./Header";
import Elo1 from "./Elo1";
import PlaceToVisit from "./PlaceToVisit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Elo1 />
      <PlaceToVisit />
    </div>
  );
}
