import React from "react";
import { NavLink } from "react-router-dom";
import Authenticate from "../HOC/Authenticate";
const NavbarLink = (props) => {
  return (
    <div className="nav_link">
      <NavLink to={props.to}>
        <span>{props.children}</span>
      </NavLink>
    </div>
  );
};

export default Authenticate(NavbarLink);
