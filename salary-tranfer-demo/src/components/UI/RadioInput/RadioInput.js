import React from "react";
import classes from "./RadioInput.module.css";

const RadioInput = (props) => {
  return (
    <label htmlFor={props.value} className={classes.radio}>
      <input
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span>{props.label}</span>
    </label>
  );
};

export default RadioInput;
