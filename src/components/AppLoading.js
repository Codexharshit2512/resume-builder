import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/user";
import { setDisplayName } from "../redux/reducers/name";
import { reset } from "../redux/actions/actions";
import SplashScreen from "./SplashScreen";

const AppLoading = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName, uid } = user;
        const firstName = displayName.split(" ")[0];
        const lastName = displayName.split(" ")[1];
        dispatch(
          setUser({
            isAuth: true,
            user: { email, firstName, lastName, uid },
          })
        );
        dispatch(
          setDisplayName({
            firstName,
            lastName,
          })
        );
      } else {
        dispatch(setUser({ isAuth: false, user: null }));
        dispatch(reset("", ""));
      }
      setLoading(false);
    });
  }, []);
  return <>{loading ? <SplashScreen /> : props.children}</>;
};

export default AppLoading;
