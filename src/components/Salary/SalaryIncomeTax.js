import { Table } from "antd";
import React from "react";

const SalaryIncomeTax = () => {
  const columns = [
    {
      title: "The taxable",
      dataIndex: "taxable",
    },
    {
      title: "The tax rate",
      dataIndex: "taxrate",
    },
    {
      title: "The payment",
      dataIndex: "payment",
    },
  ];
  const dataSource = [
    {
      key: "1",
      taxable: "To 5 million VND",
      taxRate: "5%",
      payment: 10000000,
    },
    {
      key: "2",
      taxable: "Upper 5 million VND to 10 million VND",
      taxRate: "10%",
      payment: 10000000,
    },
    {
      key: "3",
      taxable: "Upper 10 million VND to 18 million VND",
      taxRate: "15%",
      payment: 10000000,
    },
    {
      key: "4",
      taxable: "Upper 18 million VND to 32 million VND",
      taxRate: "20%",
      payment: 10000000,
    },
    {
      key: "5",
      taxable: "Upper 32 million VND to 52 million VND",
      taxRate: "25%",
      payment: 10000000,
    },
    {
      key: "6",
      taxable: "Upper 52 million VND to 80 million VND",
      taxRate: "30%",
      payment: 10000000,
    },
    {
      key: "7",
      taxable: "Upper 80 million VND",
      taxRate: "35%",
      payment: 10000000,
    },
  ];
  return (
    <React.Fragment>
      <h3>(*) Detail of personal income tax (USD)</h3>
      <Table bordered dataSource={dataSource} columns={columns} />
    </React.Fragment>
  );
};

export default SalaryIncomeTax;
