import React from "react";

import Income from "./Income";
import Insurance from "./Insurance/Insurance";
import Reduction from "./Reduction";
import TransferSalary from "./TransferSalary";

const SalaryForm = (props) => {
  const { salaryInfo, updateSalaryInfo } = props;

  const incomeChangeHandler = (newValues) => {
    updateSalaryInfo({ income: newValues });
  };

  const insunranceChangeHandler = (newValues) => {
    updateSalaryInfo({ insurance: newValues });
  };

  const reductionsChangeHandler = (newValues) => {
    updateSalaryInfo({ dependantReduction: newValues });
  };

  const calculateResultHandler = (newValues) => {
    updateSalaryInfo({
      ...newValues,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Income
        incomeChangeHandler={incomeChangeHandler}
        income={salaryInfo.income}
      />
      <Insurance
        insunranceChangeHandler={insunranceChangeHandler}
        insuranceDaTa={salaryInfo.insurance}
      />
      <Reduction
        reductionsChangeHandler={reductionsChangeHandler}
        reductionsData={salaryInfo.dependantReduction}
      />
      <TransferSalary
        calculateResultHandler={calculateResultHandler}
        salaryInfo={salaryInfo}
      />
    </form>
  );
};

export default SalaryForm;
