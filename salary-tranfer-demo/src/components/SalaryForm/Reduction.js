import React from "react";
import Input from "../UI/Input/Input";
import classes from "./Reduction.module.css";

const Reduction = (props) => {
  const { reductionsData, reductionsChangeHandler } = props;
  const { personalReduction, dependant, numberDependant } = reductionsData;

  const fieldsChangeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    reductionsChangeHandler({
      ...reductionsData,
      [id]: value,
    });
  };

  return (
    <div className={classes.reduction}>
      <h3>Reduction based on family circumstances</h3>
      <Input
        type="text"
        id="personalReduction"
        size="large"
        preLabel="Personal:"
        label="VND"
        value={personalReduction}
        onChange={fieldsChangeHandler}
      />
      <Input
        type="text"
        id="dependant"
        size="large"
        preLabel="Dependant:"
        label="VND"
        value={dependant}
        onChange={fieldsChangeHandler}
      />
      <Input
        type="text"
        id="numberDependant"
        size="large"
        preLabel="Number of dependant:"
        value={numberDependant}
        onChange={fieldsChangeHandler}
      />
    </div>
  );
};

export default Reduction;
