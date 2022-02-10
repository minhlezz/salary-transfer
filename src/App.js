import React, { useState } from "react";

import SalaryForm from "./components/SalaryForm";
import { Col, Row, Layout, Space } from "antd";

import "./App.css";
import Salary from "./components/Salary";

const initSalaryInfo = {
  rateExchange: 0,
  transferResult: {
    grossSalary: 0,
    netSalary: 0,
  },
  explainInDetail: {
    grossSalary: 0,
    socialInsurance: {
      percentage: 0,
      payment: 0,
    },
    healthInsurance: {
      percentage: 0,
      payment: 0,
    },
    unemployedInsurance: {
      percentage: 0,
      payment: 0,
    },
    incomeBeforeTax: 0,
    personalReduction: 0,
    dependantReduction: 0,
    taxableIncome: 0,
    personalIncomeTax: 0,
    netSalary: 0,
  },
  employerPay: {
    grossSalary: 0,
    socialInsurance: {
      percent: 0,
      payment: 0,
    },
    healthInsurance: {
      percent: 0,
      payment: 0,
    },
    unemployedInsurance: {
      percent: 0,
      payment: 0,
    },
  },
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
              <Salary salaryInfo={salaryInfo} />
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
