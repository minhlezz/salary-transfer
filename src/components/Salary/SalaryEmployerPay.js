import { Table } from "antd";
import React from "react";
import { formatVND } from "../../helpers/convertCurrency";

const SalaryEmployerPay = (props) => {
  const { grossSalary, socialInsurance, healthInsurance, unemployedInsurance } =
    props.employerPay;

  let total =
    grossSalary +
    socialInsurance.payment +
    healthInsurance.payment +
    unemployedInsurance.payment;

  const columns = [
    {
      title: "label",
      dataIndex: "label",
    },
    {
      title: "value",
      dataIndex: "value",
    },
  ];

  const dataSource = [
    {
      key: "1",
      label: "GROSS salary",
      value: formatVND(grossSalary),
    },
    {
      key: "2",
      label: `Social insurance (${10}%`,
      value: formatVND(socialInsurance.payment),
    },
    {
      key: "3",
      label: `Health insurance (${10}%)`,
      value: formatVND(healthInsurance.payment),
    },
    {
      key: "4",
      label: `Unemployment insurance (${10}% - lương tối
          thiểu vùng)`,
      value: formatVND(unemployedInsurance.payment),
    },
    {
      key: "5",
      label: "Total",
      value: formatVND(total),
    },
  ];

  return (
    <React.Fragment>
      <h3>Employer pay (USD)</h3>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        showHeader={false}
        rowClassName={(record) =>
          record.label === "Total" ? "table-row-dark" : "table-row-light"
        }
      />
    </React.Fragment>
  );
};

export default SalaryEmployerPay;
