import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from './selection';
import map from '.././assets/map-image.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <BottomNavigation/>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
              <img src={map} alt="image" width="100%" height="100%"/>
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
