import React, { useState } from "react";
import { useSelector, useDispatch, useEffect } from "react-redux";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";

const EducationForm = ({ education: state, index, save }) => {
  const dispatch = useDispatch();
  const [education, setEducationState] = useState({ ...state });
  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    // console.log(target + " " + value);
    setEducationState({ ...education, [target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    save(education, index);
  };
  return (
    <div className="education_form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <label>Institute</label>
            <span>
              <input
                name="institute"
                onChange={onChange}
                value={education?.institute}
                type="text"
                required
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="md_label">Degree</label>
            <span>
              <input
                className="md_input"
                name="degree"
                type="text"
                value={education?.degree}
                onChange={onChange}
                required
              />
            </span>
          </div>
          <div className="input-group">
            <label className="md_label">CGPA</label>
            <span>
              <input
                className="md_input"
                name="cgpa"
                onChange={onChange}
                value={education?.cgpa}
                type="number"
                step="0.001"
                required
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="md_label">Specialisation</label>
            <span>
              <input
                className="md_input"
                name="specialisation"
                onChange={onChange}
                value={education?.specialisation}
                type="text"
                required
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="md_label">Start</label>
            <span>
              <input
                className="md_input"
                name="start"
                onChange={onChange}
                value={education?.start}
                type="number"
                required
              />
            </span>
          </div>
          <div className="input-group">
            <label className="md_label">End</label>
            <span>
              <input
                className="md_input"
                name="end"
                onChange={onChange}
                value={education?.end}
                type="text"
                required
              />
            </span>
          </div>
        </div>
        <div className="flex">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "1rem" }}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
