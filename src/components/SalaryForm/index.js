import { Form } from "antd";
import React from "react";
import { grossToNetConvert } from "../../helpers/convertGrossToNet";
import { netToCrossConvert } from "../../helpers/convertNetToGross";
import { employerPayCalc } from "../../helpers/employerPayCalc";

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
  const { updateSalaryInfo } = props;
  const [form] = Form.useForm();

  const onFinish = (value) => {
    form.setFieldsValue({
      ...value,
    });
  };

  const grossToNetCalc = (formValues) => {
    const result = grossToNetConvert(formValues);
    const transferResult = {
      grossSalary: result.grossSalary,
      netSalary: result.netSalary,
    };
    const explainInDetail = {
      grossSalary: result.grossSalary,
      socialInsurance: {
        percentage: +formValues.social,
        payment: result.socialPayment,
      },
      healthInsurance: {
        percentage: +formValues.health,
        payment: result.healthPayment,
      },
      unemployedInsurance: {
        percentage: +formValues.unemployed,
        payment: result.unemployedPayment,
      },
      incomeBeforeTax: result.incomeBeforeTax,
      personalReduction: +formValues.personalReduction,
      dependantReduction: result.dependantReduction,
      taxableIncome: result.taxableIncome,
      personalIncomeTax: result.personalTax,
      netSalary: result.netSalary,
    };

    const employer = employerPayCalc(formValues);

    const employerPay = {
      grossSalary: result.grossSalary,
      socialInsurance: {
        percent: employer.socialPercent,
        payment: employer.socialEmployerPayment,
      },
      healthInsurance: {
        percent: employer.healthPercent,
        payment: employer.healthEmployerPayment,
      },
      unemployedInsurance: {
        percent: employer.unemployedEmployerPayment,
        payment: employer.unemployedEmployerPayment,
      },
    };

    updateSalaryInfo({
      rateExchange: +formValues.rateExchange,
      transferResult,
      explainInDetail,
      employerPay,
    });
  };

  const grossToNetHandler = () => {
    form.submit();
    const formValues = form.getFieldValue();
    grossToNetCalc(formValues);
  };

  const netToGrossHandler = () => {
    form.submit();
    const formValues = form.getFieldValue();
    const { grossSalary } = netToCrossConvert(formValues);
    const newFormValues = {
      ...formValues,
      incomeInput: grossSalary,
    };
    grossToNetCalc(newFormValues);
  };

  return (
    <Form form={form} initialValues={initValues} onFinish={onFinish}>
      <Income />
      <Insurance />
      <Reductions />
      <TransferSalary
        grossToNetHandler={grossToNetHandler}
        netToGrossHandler={netToGrossHandler}
      />
    </Form>
  );
};

export default Index;
