import React from "react";
import { useSelector } from "react-redux";

const Authenticate = (Component) => {
  return function Wrapper({ pri, ...rest }) {
    const auth = useSelector((state) => state?.user?.isAuth);
    // console.log(state);
    // if ((auth && pri) || (!auth && !pri)) {
    //   console.log(Component + " " + auth + pri);
    // }
    return <>{((auth && pri) || (!auth && !pri)) && <Component {...rest} />}</>;
  };
};

export default Authenticate;
