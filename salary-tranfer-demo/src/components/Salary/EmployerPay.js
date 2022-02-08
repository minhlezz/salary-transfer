import React, { useContext } from "react";
import FormContext from "../../store/form-context";
import { formatVND } from "../Helpers/currency-convert";
import Table from "../UI/Table/Table";
import classes from "./EmployerPay.module.css";

const EmployerPay = () => {
  const formCtx = useContext(FormContext);

  const { grossSalary, socialInsurance, healthInsurance, unemployedInsurance } =
    formCtx.employerPay;
  let total =
    grossSalary +
    socialInsurance.payment +
    healthInsurance.payment +
    unemployedInsurance.payment;

  const datasource = [
    {
      key: "1",
      title: "GROSS salary",
      value: formatVND(grossSalary),
    },
    {
      key: "2",
      title: `Social insurance (${socialInsurance.percent}%`,
      value: formatVND(socialInsurance.payment),
    },
    {
      key: "3",
      title: `Health insurance (${healthInsurance.percent}%)`,
      value: formatVND(healthInsurance.payment),
    },
    {
      key: "4",
      title: `Unemployment insurance (${unemployedInsurance.percent}% - lương tối
        thiểu vùng)`,
      value: formatVND(unemployedInsurance.payment),
    },
    {
      key: "5",
      title: "Total",
      value: formatVND(total),
    },
  ];

  return (
    <React.Fragment>
      <h3>Employer pay (USD)</h3>
      <Table datasource={datasource} className={classes.employerPay} />
    </React.Fragment>
  );
};

export default EmployerPay;
