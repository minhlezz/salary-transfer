import React from "react";
import SalaryDetail from "./SalaryDetail";
import SalaryEmployerPay from "./SalaryEmployerPay";
import SalaryIncomeTax from "./SalaryIncomeTax";
import SalaryResult from "./SalaryResult";

const Salary = () => {
  return (
    <React.Fragment>
      <SalaryResult />
      <SalaryDetail />
      <SalaryIncomeTax />
      <SalaryEmployerPay />
    </React.Fragment>
  );
};

export default Salary;
