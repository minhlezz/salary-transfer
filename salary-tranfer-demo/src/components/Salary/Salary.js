import React from "react";
import classes from "./Salary.module.css";

import Transfer from "./Transfer";

const Salary = ({ net, gross, rate }) => {
  return (
    <section className={classes.salary}>
      <Transfer net={net} gross={gross} rate={rate} />
      {/* <SalaryDetail />
      <PersonalIncomeTax />
      <EmployerPay /> */}
    </section>
  );
};

export default Salary;
