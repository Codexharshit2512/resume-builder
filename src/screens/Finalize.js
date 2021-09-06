import React, { useState, useEffect } from "react";
import ResumePreview from "../components/ResumePreview";
import FinalizeActions from "../components/FinalizeActions";
import Toast from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { saveResumeToDB, updateResume } from "../redux/actions/actions";
const Finalize = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const dispatch = useDispatch();
  const { resumeId } = useSelector((state) => state?.resume);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };
  useEffect(() => {
    if (resumeId) {
      dispatch(updateResume()).then(() => {
        setState({ ...state, open: true });
      });
    } else {
      dispatch(saveResumeToDB()).then(() => {
        setState({ ...state, open: true });
      });
    }
  }, []);
  return (
    <div className="finalize_container">
      <ResumePreview />
      <FinalizeActions />
      <Toast
        key={state.bottom + state.right}
        type="success"
        message="Saved Successfully"
        open={state.open}
        close={handleClose}
        anchorOrigin={{
          vertical: state.vertical,
          horizontal: state.horizontal,
        }}
      />
    </div>
  );
};

export default Finalize;
