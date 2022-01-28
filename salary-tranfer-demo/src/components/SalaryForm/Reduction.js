import React from "react";
import Input from "../UI/Input/Input";
import classes from "./Reduction.module.css";

const Reduction = (props) => {
  return (
    <div className={classes.reduction}>
      <h3>Reduction based on family circumstances</h3>
      <Input
        type="number"
        id="personal"
        size="large"
        preLabel="Personal:"
        label="VND"
        value={props.personalReduction}
        onChange={props.personalReductionHandler}
      />
      <Input
        type="number"
        id="dependant"
        size="large"
        preLabel="Dependant:"
        label="VND"
        value={props.dependant}
        onChange={props.dependantHandler}
      />
      <Input
        type="number"
        id="numberDependant"
        size="large"
        preLabel="Number of dependant:"
        value={props.numberDependant}
        onChange={props.numberDependantHandler}
      />
    </div>
  );
};

export default Reduction;
