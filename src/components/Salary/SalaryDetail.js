import React from "react";
import { Table } from "antd";
import { formatVND } from "../../helpers/convertCurrency";

const SalaryDetail = (props) => {
  console.log(props.explainInDetail);
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

  const columns = [
    {
      title: "label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
    },
  ];

  const dataSource = [
    {
      key: "1",
      label: "Gross salary",
      value: formatVND(grossSalary),
    },
    {
      key: "2",
      label: `Social insurance (${socialInsurance.percentage}%)`,
      value: formatVND(socialInsurance.payment),
    },
    {
      key: "3",
      label: `Health insurance (${healthInsurance.percentage}%)`,
      value: formatVND(healthInsurance.payment),
    },
    {
      key: "4",
      label: ` Unemployment insurance (${unemployedInsurance.percentage}% - lương tối thiểu vùng)`,
      value: formatVND(unemployedInsurance.payment),
    },
    {
      key: "5",
      label: "Income before tax",
      value: formatVND(incomeBeforeTax),
    },
    {
      key: "6",
      label: "Reduction for personal",
      value: formatVND(personalReduction),
    },
    {
      key: "7",
      label: "Reduction for dependant",
      value: formatVND(dependantReduction),
    },
    {
      key: "8",
      label: "Taxable income",
      value: formatVND(taxableIncome),
    },
    {
      key: "9",
      label: "Personal income tax (*)",
      value: formatVND(personalIncomeTax),
    },
    {
      key: "10",
      label: "NET salary",
      value: formatVND(netSalary),
    },
  ];

  const isColorRecord = (record) => {
    if (
      record.key === "1" ||
      record.key === "5" ||
      record.key === "8" ||
      record.key === "10"
    ) {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      <h3>Explain in detail (USD)</h3>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        showHeader={false}
        rowClassName={(record) =>
          isColorRecord(record) ? "table-row-dark" : "table-row-light"
        }
      />
    </React.Fragment>
  );
};

export default SalaryDetail;
