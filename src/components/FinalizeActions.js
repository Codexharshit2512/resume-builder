import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { useDispatch } from "react-redux";
import jsPDF from "jspdf";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(33, 150, 243)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(39, 170, 289)",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
}));

const FinalizeActions = () => {
  const classes = useStyles();
  const history = useHistory();
  const { firstName, lastName } = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const download = () => {
    const input = document.querySelector(".skin_wrapper");
    html2canvas(input)
      .then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        try {
          await pdf.save(`${firstName}_${lastName}_resume.pdf`, {
            returnPromise: true,
          });
        } catch (err) {
          console.log(err);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="actions_container">
      <Button
        variant="contained"
        // endIcon={<GetAppIcon />}
        className={classes.root}
        onClick={download}
      >
        Download PDF
      </Button>
      <Button
        variant="contained"
        // endIcon={<GetAppIcon />}
        className={classes.root}
        style={{ marginTop: "1rem" }}
        onClick={() => history.push("/create/contact")}
      >
        Edit
      </Button>
    </div>
  );
};

export default FinalizeActions;
