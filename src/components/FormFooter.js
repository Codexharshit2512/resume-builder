import React from "react";
import { useHistory } from "react-router-dom";
import { updateContactSection } from "../redux/reducers/name";
import { updateSkillSection } from "../redux/reducers/skill";
import { updateEducationSection } from "../redux/reducers/education";
import { updateExperianceSection } from "../redux/reducers/experiance";
import { useDispatch } from "react-redux";
const FormFooter = ({ route, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleNext = () => {
    switch (route) {
      case "contact":
        dispatch(updateContactSection(data));
        history.push("/create/skills");
        break;
      case "skills":
        dispatch(updateSkillSection(data));
        history.push("/create/experiance");
        break;
      case "education":
        dispatch(updateEducationSection(data));
        history.push("/create/finalize");
        break;
      case "experiance":
        dispatch(updateExperianceSection(data));
        history.push("/create/education");
        break;
      default:
        break;
    }
  };

  const handlePrev = () => {
    history.goBack();
  };

  return (
    <div class="form_footer_container">
      <div className="action_btn" onClick={handleNext} style={{ width: "80%" }}>
        Next
      </div>
      <p className="back_btn" onClick={handlePrev}>
        Back
      </p>
    </div>
  );
};

export default FormFooter;
