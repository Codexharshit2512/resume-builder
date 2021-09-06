import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
const AuthBlock = ({ close }) => {
  const [state, setState] = useState("login");
  const changeState = (state) => {
    setState(state);
  };
  return (
    <div className="auth_container">
      <div className="side_image">
        <img
          src="https://cdn.dribbble.com/users/548267/screenshots/14627670/media/b73bc57a292d4d62e9c0b0fa9afe7bf3.jpg"
          alt="side_img"
        />
      </div>
      <div className="auth_box">
        {state === "login" ? (
          <Login close={close} change={changeState} />
        ) : (
          <SignUp close={close} change={changeState} />
        )}
      </div>
    </div>
  );
};

export default AuthBlock;
