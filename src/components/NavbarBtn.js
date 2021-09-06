import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import Authenticate from "../HOC/Authenticate";
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}));
const NavbarBtn = (props) => {
  const classes = useStyles();
  return (
    <div className="nav_link">
      <Button
        onClick={props.onClick}
        variant="contained"
        color="primary"
        className={classes.root}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Authenticate(NavbarBtn);
