import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  mLeft:{
      marginLeft:"20px",
      color:'green'
  },
  bgColor:{
      backgroundColor:"#1e211e"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            JUST PARK
          </Typography>
          <div className={classes.grow} />
              <Typography>
                  Help
              </Typography>
              <Typography className={classes.mLeft}>
                  login
              </Typography>
              <Typography className={classes.mLeft}>
                  signup
              </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}