import React from "react";
import { skins } from "../skins/skins";
import Skin from "../components/Skin";

const GettingStarted = () => {
  return (
    <div className="getting_started_container">
      <h1 className="center">Create a resume that stands out</h1>
      <p className="center">
        Create a resume that perfectly describes your skills and match your job
        profile
      </p>
      <div className="skins_list flex">
        {skins.map((skin) => (
          <Skin key={skin.code} logo={skin.logo} code={skin.code} />
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
