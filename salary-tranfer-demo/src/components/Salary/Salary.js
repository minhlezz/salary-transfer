import React from "react";
import classes from "./Salary.module.css";

import Transfer from "./Transfer";
import SalaryDetail from "./SalaryDetail";
import PersonalIncomeTax from "./PersonalIncomeTax";
import EmployerPay from "./EmployerPay";

const Salary = ({ rate }) => {
  return (
    <section className={classes.salary}>
      <Transfer rate={rate} />
      <SalaryDetail />
      <PersonalIncomeTax />
      <EmployerPay />
    </section>
  );
};

export default Salary;
