import React from "react";
import classes from "./Button.module.css";
import { FaCalendarPlus } from "react-icons/fa";

export default function Button(props) {
  return (
    <button
      className={classes.btn}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {" "}
      <FaCalendarPlus />
      {props.children}
    </button>
  );
}
