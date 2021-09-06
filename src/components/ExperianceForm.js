import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";
import Button from "@material-ui/core/Button";
import Editor from "./Editor";
import Checkbox from "@material-ui/core/Checkbox";

const ExperianceForm = ({ exp: state, index, save }) => {
  const dispatch = useDispatch();
  const [exp, setExpState] = useState({ ...state });
  const [checked, setChecked] = useState(
    state?.end === "Present" ? true : false
  );
  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    setExpState({ ...exp, [target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    save(exp, index);
  };

  const onEditorChange = (editorState) => {
    const contentState = convertToRaw(editorState.getCurrentContent());
    let s = "",
      arr = [];
    contentState?.blocks.forEach((block) => {
      if (block.type === "unstyled") {
        s += block?.text;
      } else {
        s = block.text;
        if (s.length > 0) arr.push(s);
        s = "";
      }
    });
    if (s.length > 0) arr.push(s);
    setExpState({ ...exp, responsibilities: arr });
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setExpState({ ...exp, end: "Present" });
    } else setExpState({ ...exp, end: "" });
  };
  return (
    <div className="education_form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <label className="sm_label">Company</label>
            <span>
              <input
                className="sm_input"
                name="company"
                onChange={onChange}
                value={exp?.company}
                type="text"
                required
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="sm_label">Role</label>
            <span>
              <input
                className="sm_input"
                name="role"
                type="text"
                value={exp?.role}
                onChange={onChange}
                required
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="sm_label">Start</label>
            <span>
              <input
                className="sm_input"
                name="start"
                onChange={onChange}
                value={exp?.start}
                type="text"
                required
              />
            </span>
          </div>
          <div className="input-group">
            <label className="sm_label">End</label>
            <span>
              <input
                className={`sm_input ${checked ? "disabled_inp" : ""}`}
                name="end"
                onChange={onChange}
                value={exp?.end}
                type="number"
                required
                disabled={checked}
              />
            </span>
            <div className="check">
              <Checkbox
                checked={checked}
                onChange={handleCheck}
                inputProps={{ "aria-label": "primary checkbox" }}
              />{" "}
              <label className="sm_label"> Do you work here currently?</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="sm_label">Description</label>
            <div className="editor_wrapper_custom">
              <Editor onEditorChange={onEditorChange} />
            </div>
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

export default ExperianceForm;
