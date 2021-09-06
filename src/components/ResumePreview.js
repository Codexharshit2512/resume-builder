import React from "react";
import Skin1 from "./Skin1";
import Skin2 from "./Skin2";
import Skin3 from "./Skin3";
import { useSelector } from "react-redux";
const ResumePreview = ({ active, route }) => {
  const { skin } = useSelector((state) => state?.resume);
  return (
    <div className="preview_container form_block">
      <div className="skin_wrapper" style={{ width: "70%" }}>
        {skin === "skin1" && <Skin1 active={active} route={route} />}
        {skin === "skin2" && <Skin2 active={active} route={route} />}
        {skin === "skin3" && <Skin3 active={active} route={route} />}
      </div>
    </div>
  );
};

export default ResumePreview;
