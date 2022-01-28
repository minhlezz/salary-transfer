import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { type, id, label, preLabel, size, min, max } = props;

  let sizeInput;
  if (size === "large") sizeInput = "w-70";
  if (size === "medium") sizeInput = "w-60";
  if (size === "small") sizeInput = "w-40";

  return (
    <label htmlFor={id} className={classes.label}>
      {preLabel ? <span>{preLabel}</span> : ""}

      <input
        className={sizeInput}
        type={type}
        id={id}
        value={props.value}
        onChange={props.onChange}
        min={min}
        max={max}
        disabled={props.disabled}
      />
      {label ? <span>{label}</span> : ""}
    </label>
  );
};

export default Input;
