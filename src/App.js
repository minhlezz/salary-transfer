import React, { useState } from "react";

import SalaryForm from "./components/SalaryForm";
import { Col, Row, Layout, Space } from "antd";

import "./App.css";
import Salary from "./components/Salary";

const initSalaryInfo = {
  incomeInput: 0,
  rateExchange: 0,
  minWage: 0,
  social: 0,
  health: 0,
  unemployed: 0,
  region: "",
  payType: "",
  otherInput: 0,
  personalReduction: 0,
  dependant: 0,
  numberDependant: 0,
};

function App() {
  const { Header, Content } = Layout;
  const [salaryInfo, setSalaryInfo] = useState(initSalaryInfo);

  const updateSalaryInfo = (values) => {
    setSalaryInfo((prevValues) => {
      return {
        ...prevValues,
        ...values,
      };
    });
  };
  console.log(salaryInfo);
  return (
    <Layout className="bg-white">
      <Header className="bg-grey">
        <h1>Transfer GROSS to NET and vice versa</h1>
      </Header>
      <Content>
        <Row>
          <Col span={12} offset={6}>
            <Space direction="vertical" size={24}>
              <SalaryForm
                salaryInfo={salaryInfo}
                updateSalaryInfo={updateSalaryInfo}
              />
              <Salary />
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
