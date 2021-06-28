import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextField,Button } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Picker from './DateandTimePicker';

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
      backgroundColor:"white"
  },
  srch:{
    backgroundColor:"green",
    color:"white",
    padding:'10px',
    paddingLeft:"35px",
    paddingRight:"35px"
  },
  mRight:{
      marginRight:"30px"
  },
  mlefts:{
      marginRight:"50px"
  }

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow} style={{marginTop:"20px"}}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
        <TextField
          id="outlined-basic"
          label="Parking at"
          style={{ width: "800px" }}
          value="WHERE DO YOU WANT TO PARK?"
          rowsMax={9}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
          <div className={classes.grow} />
          <div>
          <form>
          {/* <TextField
          className={classes.mRight}
            id="date"
            label="Arriving On"
            type="time"
            defaultValue="Today at 00:00"
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          <Picker/>
           <TextField
           className={classes.mlefts}
            id="time"
            label="Leaving On"
            type="date"
            defaultValue="Today at 02:00"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        </div>
        <div>
        <Button variant="contained" className={classes.srch} style={{marginRight:"100px"}}>Search</Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}