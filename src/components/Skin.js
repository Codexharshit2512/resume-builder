import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setResumeSkin, setResumeId } from "../redux/reducers/resume";
import { reset } from "../redux/actions/actions";

const Skin = ({ code, logo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state?.user?.user);
  const handleClick = () => {
    dispatch(setResumeSkin({ code, logo }));
    dispatch(reset(firstName, lastName));
    history.push("/create/contact");
  };
  return (
    <div className="skin_box">
      <img src={logo} alt={code} />
      <div className="btn_container">
        <div onClick={handleClick} className="action_btn">
          Use Template
        </div>
      </div>
    </div>
  );
};

export default Skin;
