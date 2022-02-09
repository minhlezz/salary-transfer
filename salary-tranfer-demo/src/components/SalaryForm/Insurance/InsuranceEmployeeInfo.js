import React from "react";
import Input from "../../UI/Input/Input";

const InsuranceEmployeeInfo = (props) => {
  const { employeeData, fieldsChangeHandler } = props;
  const { minWage, social, health, unemployed } = employeeData;

  const employeeInsuranceHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    fieldsChangeHandler({
      employee: {
        ...employeeData,
        [id]: value,
      },
    });
  };

  return (
    <div className={props.classes.option}>
      <Input
        type="text"
        id="minWage"
        size="large"
        preLabel="Minimum wage"
        label="VND"
        value={minWage}
        onChange={employeeInsuranceHandler}
      />
      <Input
        type="text"
        id="social"
        size="small"
        preLabel="Social"
        label="%"
        value={social}
        onChange={employeeInsuranceHandler}
      />
      <Input
        type="text"
        id="health"
        size="small"
        preLabel="Health"
        label="%"
        value={health}
        onChange={employeeInsuranceHandler}
      />
      <Input
        type="text"
        id="unemployed"
        size="small"
        preLabel="Unemployed"
        label="%"
        value={unemployed}
        onChange={employeeInsuranceHandler}
      />
    </div>
  );
};

export default InsuranceEmployeeInfo;
