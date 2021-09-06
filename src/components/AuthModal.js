import React, { useState } from "react";
import AuthBlock from "./AuthBlock";
import Modal from "./Modal";

const AuthModal = ({ open, handleClose }) => {
  return (
    <Modal
      component={<AuthBlock close={handleClose} />}
      open={open}
      handleClose={handleClose}
    />
  );
};

export default AuthModal;
