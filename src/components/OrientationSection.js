import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <Box px={30} py={20}>
            <div className="orienLeft">
                <HomeWorkIcon style={{fontSize:"100px",color:"#035efc"}}/>
                <h3>Large Beautiful Office</h3>
                <p>Enjoy a comfortable office envoirnment with<br></br> the most modern and stylish furnishing</p>
            </div>
          </Box>
          <Grid container>
              <Grid item xs={3}>
          <Box px={30} py={20}>
            <div className="orienLeft">
                <HomeWorkIcon style={{fontSize:"100px",color:"#035efc"}}/>
                <h3>Large Beautiful Office</h3>
                <p>Enjoy a comfortable office envoirnment with<br></br> the most modern and stylish furnishing</p>
            </div>
          </Box>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={5}>
        <Box px={8} py={20}>
          <Paper className={classes.paper}>xs=6</Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
