import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const Loader = ({ loading, ...rest }) => {
  const classes = useStylesFacebook();
  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.root}>
            <CircularProgress
              variant="determinate"
              className={classes.bottom}
              size={40}
              thickness={4}
              {...rest}
              value={100}
            />
            <CircularProgress
              variant="indeterminate"
              disableShrink
              className={classes.top}
              classes={{
                circle: classes.circle,
              }}
              size={40}
              thickness={4}
              {...rest}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
