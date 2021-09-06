import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state?.user?.isAuth);
  return (
    <Route
      {...rest}
      component={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/getting-started" />
      }
    />
  );
};

export default PublicRoute;
