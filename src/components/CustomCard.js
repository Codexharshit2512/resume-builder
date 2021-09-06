import React, { useState } from "react";
import { useSelector, useDispatch, useEffect } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";

const CustomCard = (props) => {
  return (
    <div className="display_item" style={{ position: "relative" }}>
      <h4 className="display_title">{props.institute}</h4>
      <p className="display_dates">
        {props.dates.start} - {props.dates.end}
      </p>
      <span
        className="delete_icon"
        style={{
          position: "absolute",
          top: "6px",
          right: "1rem",
          cursor: "pointer",
        }}
        onClick={() => props.delete(props.index)}
      >
        <DeleteForeverIcon style={{ color: "red", fontSize: "1rem" }} />
      </span>
      <span
        className="update_icon"
        style={{
          position: "absolute",
          top: "6px",
          right: "3rem",
          cursor: "pointer",
        }}
        onClick={() => props.update(props.index)}
      >
        <CreateIcon
          style={{
            color: "#1eaedb",
            fontSize: "1rem",
          }}
        />
      </span>
    </div>
  );
};

export default CustomCard;
