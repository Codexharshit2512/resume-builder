import React, { useState } from "react";
import GoogleButton from "react-google-button";
import Button from "@material-ui/core/Button";
import { signUp } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomButton from "./CustomButton";
const SignUp = ({ change, close }) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    dispatch(signUp(state)).then(() => {
      setLoading(false);
      close();
      history.push("/getting-started");
    });
  };
  return (
    <div className="login_container">
      <p className="small_text float_txt">
        Already Have an account?{" "}
        <span onClick={() => change("login")} className="sp_color">
          Sign In
        </span>
      </p>
      <div className="wrapper">
        <form onSubmit={handleSignUp} style={{ width: "80%" }}>
          <div className="form-group">
            <div className="input-group">
              <label>FirstName</label>
              <span>
                <input
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  required
                />
              </span>
            </div>
            <div className="input-group">
              <label>LastName</label>
              <span>
                <input
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  required
                />
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label>Email</label>
              <span style={{ width: "100%" }}>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                />
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label>Password</label>
              <span style={{ width: "100%" }}>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                />
              </span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton loading={loading}>Create Account</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
