import React from "react";
import classes from "./Salary.module.css";

import SalaryDetail from "./SalaryDetail";
import Transfer from "./Transfer";
import PersonalIncomeTax from "./PersonalIncomeTax";

const Salary = ({ net, gross, rate }) => {
  return (
    <section className={classes.salary}>
      <Transfer net={net} gross={gross} rate={rate} />
      <SalaryDetail />
      <PersonalIncomeTax />
    </section>
  );
};

export default Salary;
