import React from "react";
import classes from "./Salary.module.css";

import Transfer from "./Transfer";
import SalaryDetail from "./SalaryDetail";
import PersonalIncomeTax from "./PersonalIncomeTax";
import EmployerPay from "./EmployerPay";

const Salary = (props) => {
  const salaryInfo = props.salaryInfo;
  return (
    <section className={classes.salary}>
      <Transfer salaryInfo={salaryInfo} />
      <SalaryDetail explainInDetail={salaryInfo.explainInDetail} />
      <PersonalIncomeTax explainInDetail={salaryInfo.explainInDetail} />
      <EmployerPay employerPay={salaryInfo.employerPay} />
    </section>
  );
};

export default Salary;
