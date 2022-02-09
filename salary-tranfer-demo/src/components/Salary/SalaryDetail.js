import React from "react";
import "./SalaryDetail.module.css";
import Table from "../UI/Table/Table";
import { formatVND } from "../Helpers/currency-convert";
import classes from "./SalaryDetail.module.css";

const SalaryDetail = (props) => {
  const {
    grossSalary,
    socialInsurance,
    healthInsurance,
    unemployedInsurance,
    incomeBeforeTax,
    personalReduction,
    dependantReduction,
    taxableIncome,
    personalIncomeTax,
    netSalary,
  } = props.explainInDetail;

  const datasource = [
    {
      key: "1",
      title: "Gross salary",
      value: formatVND(grossSalary),
    },
    {
      key: "2",
      title: `Social insurance (${socialInsurance.percentage}%)`,
      value: formatVND(socialInsurance.payment),
    },
    {
      key: "3",
      title: `Health insurance (${healthInsurance.percentage}%)`,
      value: formatVND(healthInsurance.payment),
    },
    {
      key: "4",
      title: ` Unemployment insurance (${unemployedInsurance.percentage}% - lương
        tối thiểu vùng)`,
      value: formatVND(unemployedInsurance.payment),
    },
    {
      key: "5",
      title: "Income before tax",
      value: formatVND(incomeBeforeTax),
    },
    {
      key: "6",
      title: "Reduction for personal",
      value: formatVND(personalReduction),
    },
    {
      key: "7",
      title: "Reduction for dependant",
      value: formatVND(dependantReduction),
    },
    {
      key: "8",
      title: "Taxable income",
      value: formatVND(taxableIncome),
    },
    {
      key: "9",
      title: "Personal income tax (*)",
      value: formatVND(personalIncomeTax),
    },
    {
      key: "10",
      title: "NET salary",
      value: formatVND(netSalary),
    },
  ];

  return (
    <React.Fragment>
      <h3>Explain in detail (USD)</h3>
      <Table datasource={datasource} className={classes.explainInDetail} />
    </React.Fragment>
  );
};

export default SalaryDetail;
