import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormFooter from "./FormFooter";
import CustomCard from "./CustomCard";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { eduInit } from "../redux/states/initStates";
import Modal from "./Modal";
import EducationForm from "./EducationForm";
import ResumePreview from "./ResumePreview";

const EducationBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.education);
  // console.log(state);
  const [education, setEducationState] = useState(state);
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(current);
    if (current) {
      handleOpen();
    }
  }, [current]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const add = () => {
    setCurrent({ index: education.length, edu: { ...eduInit } });
  };
  const deleteEducation = (idx) => {
    setEducationState((education) =>
      education.filter((val, index) => idx != index)
    );
  };
  const saveEducation = (edu, index) => {
    let arr = [];
    if (index < education.length)
      arr = education.map((ed, idx) => (idx == index ? edu : ed));
    else arr = [...education, edu];
    setEducationState(arr);
    setCurrent(null);
    handleClose();
  };

  const updateEducation = (idx) => {
    setCurrent({ index: idx, edu: education[idx] });
  };
  return (
    <div className="form_flex">
      <div className="form_block">
        <h2 className="heading center">Education</h2>
        <div className="add_education_btn flex">
          <Button
            variant="contained"
            color="primary"
            onClick={add}
            endIcon={<AddIcon />}
            style={{ marginTop: "1rem" }}
          >
            Add Education
          </Button>
        </div>
        <div className="educations_list">
          {education.map((education, index) => (
            <CustomCard
              key={index}
              delete={deleteEducation}
              institute={education?.institute}
              dates={{ start: education?.start, end: education?.end }}
              index={index}
              update={updateEducation}
            />
          ))}
        </div>
        <FormFooter route="education" data={education} />
        <Modal
          component={
            <EducationForm
              education={current?.edu}
              index={current?.index}
              save={saveEducation}
            />
          }
          open={open}
          handleClose={handleClose}
        />
      </div>
      <ResumePreview active={education} route="education" />
    </div>
  );
};

export default EducationBlock;
