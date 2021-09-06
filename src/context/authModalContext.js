import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import AuthModal from "../components/AuthModal";
export const AuthModalContext = createContext(null);

const AuthModalWrapper = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AuthModalContext.Provider
      value={{ isOpen: open, open: handleOpen, close: handleClose }}
    >
      <AuthModal open={open} handleClose={handleClose} />
      {props.children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalWrapper;
