import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { login, googleLogin } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";
import { useHistory } from "react-router-dom";
const Login = ({ change, close }) => {
  const [state, setState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    // console.log("history", hist);
    dispatch(login(state)).then(() => {
      setLoading(false);
      history.push("/getting-started");

      close();
    });
  };
  const login2 = () => {
    dispatch(googleLogin(close, history));
  };
  return (
    <div className="login_container">
      <p className="small_text float_txt">
        Don't have an account?{" "}
        <span onClick={() => change("signup")} className="sp_color">
          Sign Up
        </span>
      </p>
      <div className="wrapper">
        <div className="google_login">
          <GoogleButton onClick={login2} />
        </div>
        <div className="or">
          <p>Or</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-group">
              <label>Email</label>
              <span style={{ width: "100%" }}>
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  type="email"
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
            <CustomButton loading={loading}>Login</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
