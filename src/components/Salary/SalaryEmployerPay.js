import { Table } from "antd";
import React from "react";

const SalaryEmployerPay = () => {
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
      value: 1000000,
    },
    {
      key: "2",
      label: `Social insurance (${10}%`,
      value: 1000000,
    },
    {
      key: "3",
      label: `Health insurance (${10}%)`,
      value: 1000000,
    },
    {
      key: "4",
      label: `Unemployment insurance (${10}% - lương tối
          thiểu vùng)`,
      value: 1000000,
    },
    {
      key: "5",
      label: "Total",
      value: 1000000,
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
