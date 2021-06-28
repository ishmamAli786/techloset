import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddIcon from "@material-ui/icons/Add";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import DropDown from './dropdown';
import TextField from '@material-ui/core/TextField';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const [maxWidth,setWidth]=useState('sm');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <div style={{ display: "flex" }}>
        <ErrorOutlineIcon />
        <span>Step 1: Basic Information</span>
        <AddIcon onClick={handleClickOpen} style={{ cursor: "pointer" }} />
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogTitle id="customized-dialog-title">
        <div>
        <ErrorOutlineIcon style={{marginBottom:"-5px",color:"blue"}}/>
        <span>Step 1: Basic Information</span>
        <RemoveIcon style={{float:"right",cursor:"pointer"}} onClick={handleClose}/>
      </div>
        </DialogTitle>
        <DialogContent dividers>
          <form>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <label>Prefix</label>
              <select style={{width:"85%",padding:"5px"}}>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
              </select>
              </div><br></br>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                  <label>First Name</label>
                  <input type="text" style={{width:"82%",padding:"5px"}}></input>
              </div><br></br>

              <div style={{display:"flex",justifyContent:"space-between"}}>
                  <label>Last Name</label>
                  <input type="text" style={{width:"82%",padding:"5px"}}></input>
              </div>
           </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}