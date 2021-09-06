import { Switch, Route } from "react-router-dom";
import React from "react";
import Welcome from "../screens/Welcome";
import GettingStarted from "../screens/GettingStarted";
import Header from "../components/Header";
import Contact from "../screens/Contact";
import Skill from "../screens/Skill";
import Education from "../screens/Education";
import Experiance from "../screens/Experiance";
import Finalize from "../screens/Finalize";
import MyResumes from "../screens/MyResumes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const AppRouter = () => {
  console.log("router loaded");
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <PrivateRoute
          exact
          path="/getting-started"
          component={GettingStarted}
        />
        <PrivateRoute exact path="/create/contact" component={Contact} />
        <PrivateRoute exact path="/create/skills" component={Skill} />
        <PrivateRoute exact path="/create/education" component={Education} />
        <PrivateRoute exact path="/create/experiance" component={Experiance} />
        <PrivateRoute exact path="/create/finalize" component={Finalize} />
        <PrivateRoute exact path="/resumes/me" component={MyResumes} />
      </Switch>
    </>
  );
};

export default AppRouter;
