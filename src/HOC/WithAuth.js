import React, { useContext } from "react";
import { AuthModalContext } from "../context/authModalContext";

const WithAuth = (Component) => {
  return function Wrapper(props) {
    const { isOpen, open, close } = useContext(AuthModalContext);
    return (
      <>
        <Component {...props} open={open} />
      </>
    );
  };
};

export default WithAuth;
