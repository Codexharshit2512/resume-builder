import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = ({ open, close, type, message, duration, ...rest }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration ? duration : 6000}
      onClose={close}
      {...rest}
    >
      <Alert onClose={close} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
