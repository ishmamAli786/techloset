import React from "react";
import { TextField,Button } from "@material-ui/core";
import Grid from ".././components/grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from '../components/Navbar';
import {makeStyles } from '@material-ui/core/styles';
import Testing from '../components/sub-header';


const useStyles = makeStyles((theme) => ({
    disp:{
        display:"inline-block",
        flexDirection:"row"
    },
    top:{
        marginTop:"50px"
    }
  }));







export default function Search() {
    const classes = useStyles();
  return (
    <>
    <Navbar/>
    <Testing/>
      <div>
        <Grid />
      </div>
    </>
  );
}
