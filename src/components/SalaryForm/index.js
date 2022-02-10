import { Form } from "antd";
import React from "react";

import Income from "./Income";
import Insurance from "./Insurance";
import Reductions from "./Reductions";
import TransferSalary from "./TransferSalary";
const initValues = {
  incomeInput: 0,
  rateExchange: 23330,
  payType: "fullwage",
  otherInput: 0,
  minWage: 1490000,
  social: 8,
  health: 1.5,
  unemployed: 1,
  region: "I",
  personalReduction: 0,
  dependant: 0,
  numberDependant: 0,
};

const Index = (props) => {
  const { salaryInfo, updateSalaryInfo } = props;
  const [form] = Form.useForm();

  const onFinish = (value) => {
    form.setFieldsValue({
      ...value,
    });
  };
  const salaryResultCalc = () => {
    form.submit();
    const formValues = form.getFieldValue();
    updateSalaryInfo({
      ...salaryInfo,
      ...formValues,
    });
  };
  return (
    <Form form={form} initialValues={initValues} onFinish={onFinish}>
      <Income />
      <Insurance />
      <Reductions />
      <TransferSalary salaryResultCalc={salaryResultCalc} />
    </Form>
  );
};

export default Index;
