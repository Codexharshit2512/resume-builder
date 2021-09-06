import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormFooter from "./FormFooter";
import CustomCard from "./CustomCard";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { expInit } from "../redux/states/initStates";
import Modal from "./Modal";
import ExperianceForm from "./ExperianceForm";
import ResumePreview from "./ResumePreview";

const ExperianceBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.experiance);
  // console.log(state);
  const [exp, setExpState] = useState(state);
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
    setCurrent({ index: exp.length, edu: { ...expInit } });
  };
  const deleteExperiance = (idx) => {
    setExpState((exp) => exp.filter((val, index) => idx != index));
  };
  const saveExperiance = (edu, index) => {
    let arr = [];
    if (index < exp.length)
      arr = exp.map((ed, idx) => (idx == index ? edu : ed));
    else arr = [...exp, edu];
    setExpState(arr);
    setCurrent(null);
    handleClose();
  };

  const updateExperiance = (idx) => {
    setCurrent({ index: idx, edu: exp[idx] });
  };
  return (
    <div className="form_flex">
      <div className="form_block">
        <h2 className="heading center">Experiance</h2>
        <div className="add_education_btn flex">
          <Button
            variant="contained"
            color="primary"
            onClick={add}
            endIcon={<AddIcon />}
            style={{ marginTop: "1rem" }}
          >
            Add Experiance
          </Button>
        </div>
        <div className="educations_list">
          {exp.map((exper, index) => (
            <CustomCard
              key={index}
              delete={deleteExperiance}
              institute={exper?.company}
              dates={{ start: exper?.start, end: exper?.end }}
              index={index}
              update={updateExperiance}
            />
          ))}
        </div>
        <FormFooter route="experiance" data={exp} />
        <Modal
          component={
            <ExperianceForm
              exp={current?.edu}
              index={current?.index}
              save={saveExperiance}
            />
          }
          open={open}
          handleClose={handleClose}
        />
      </div>
      <ResumePreview active={exp} route="experiance" />
    </div>
  );
};

export default ExperianceBlock;
