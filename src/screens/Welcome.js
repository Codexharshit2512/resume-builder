import React from "react";
import WithAuth from "../HOC/WithAuth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const Welcome = (props) => {
  const history = useHistory();
  const auth = useSelector((state) => state?.user?.isAuth);
  const handleClick = () => {
    if (!auth) props.open();
    else history.push("/getting-started");
  };
  return (
    <div className="welcome-container">
      <h1>Create a resume that stands out</h1>
      <p>
        Create a resume that perfectly describes your skills and match your job
        profile
      </p>

      <div className="action_btn" onClick={handleClick}>
        Get Started for Free
      </div>
      <div className="resume_img">
        <img
          src="https://raw.githubusercontent.com/Harvey38/MMUB/master/React/ui/src/static/images/resume.png"
          alt="resume_image"
        />
      </div>
    </div>
  );
};

export default WithAuth(Welcome);
