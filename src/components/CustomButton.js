import React from "react";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
const CustomButton = ({ loading, onClick, ...rest }) => {
  return (
    <div>
      <Button
        style={{ marginTop: "1rem" }}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        onClick={() => (onClick ? onClick() : null)}
      >
        {loading ? <CircularProgress size={20} color="#fff" /> : rest.children}
      </Button>
    </div>
  );
};

export default CustomButton;
