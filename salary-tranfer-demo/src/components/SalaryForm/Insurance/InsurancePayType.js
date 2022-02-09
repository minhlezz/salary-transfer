import React from "react";
import Input from "../../UI/Input/Input";
import RadioInput from "../../UI/RadioInput/RadioInput";

const InsurancePayType = (props) => {
  const { fieldsChangeHandler, payTypeData } = props;
  const { type, otherInput } = payTypeData;

  const payTypeInputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    fieldsChangeHandler({
      payType: {
        ...payTypeData,
        [id]: value,
      },
    });
  };

  const payTypeRadioInputHandler = (e) => {
    fieldsChangeHandler({
      payType: {
        ...payTypeData,
        type: e.target.value,
      },
    });
  };

  return (
    <div className={props.classes.option}>
      <span>Pay for</span>
      <RadioInput
        name="type"
        label="full wage"
        value="fullwage"
        checked={type === "fullwage"}
        onChange={payTypeRadioInputHandler}
      />
      <RadioInput
        name="type"
        label="other"
        value="other"
        checked={type === "other"}
        onChange={payTypeRadioInputHandler}
      />
      <Input
        type="number"
        id="otherInput"
        size="large"
        label="VND"
        value={otherInput}
        onChange={payTypeInputHandler}
        disabled={type === "fullwage"}
      />
    </div>
  );
};

export default InsurancePayType;
