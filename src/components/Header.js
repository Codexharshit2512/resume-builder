import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import WithAuth from "../HOC/WithAuth";
import { logout } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
const Header = (props) => {
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(logout());
  };
  return (
    <div className="header_container">
      <div className="logo">
        <img
          src="https://github.com/Harvey38/MMUB/blob/master/React/ui/src/static/images/logo.png?raw=true"
          alt="logo"
        />
      </div>
      <div className="links" style={{ marginLeft: "auto" }}>
        <NavbarLink to="/getting-started" pri>
          Resume Templates
        </NavbarLink>
        <NavbarLink to="/resumes/me" pri>
          My Resumes
        </NavbarLink>
        <NavbarBtn onClick={signout} pri>
          Logout
        </NavbarBtn>
        <NavbarBtn onClick={props.open}>Login</NavbarBtn>
      </div>
    </div>
  );
};

export default WithAuth(Header);
