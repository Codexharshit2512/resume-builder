import React from "react";
import { useSelector } from "react-redux";

const GetData = (Component) => {
  return function Wrapper({ active, route }) {
    const state = { ...useSelector((state) => state) };
    if (route == "contact") state.personal = active;
    if (route == "education") state.education = active;
    if (route == "skills") state.skills = active;
    if (route == "experiance") state.experiance = active;
    // console.log(state);
    return <Component data={state} />;
  };
};

export default GetData;
