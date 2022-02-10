import React from "react";
import { Table } from "antd";

const SalaryDetail = () => {
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
      value: 32,
    },
    {
      key: "2",
      label: `Social insurance (${8}%)`,
      value: 1000,
    },
    {
      key: "3",
      label: `Health insurance (${1.5}%)`,
      value: 1000,
    },
    {
      key: "4",
      label: ` Unemployment insurance (${1}% - lương tối thiểu vùng)`,
      value: 1000,
    },
    {
      key: "5",
      label: "Income before tax",
      value: 1000,
    },
    {
      key: "6",
      label: "Reduction for personal",
      value: 1000,
    },
    {
      key: "7",
      label: "Reduction for dependant",
      value: 1000,
    },
    {
      key: "8",
      label: "Taxable income",
      value: 1000,
    },
    {
      key: "9",
      label: "Personal income tax (*)",
      value: 1000,
    },
    {
      key: "10",
      label: "NET salary",
      value: 1000,
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
