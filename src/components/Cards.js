import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{padding:"20px",borderRadius:"10px"}}>
      <CardContent>
        <Typography className={classes.title} gutterBottom style={{fontWeight:"bold",fontSize:"25px",color:"#022969"}}>
          {props.name} <span style={{color:"#babbbf"}}>{props.title?(props.title):null}</span>
        </Typography>
        <Typography color="textSecondary" component="h2">
          <span style={{color:"#035efc"}}>TechloSet </span>| Full-time, Tempotary or Contract
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </CardActions>
    </Card>
  );
}
