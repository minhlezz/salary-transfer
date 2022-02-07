import React from "react";

const FormContext = React.createContext({
  formValues: {
    inputValue: 0,
    payfor: 0,
    minimumWage: 0,
    socialInsurancePercent: 0,
    healthInsurancePercent: 0,
    unemployedInsurancePercent: 0,
    region: "",
    personal: 0,
    dependant: 0,
    numberDependant: 0,
  },
  transfer: {
    gross: 0,
    net: 0,
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
  grossToNet: () => {},
  netToGross: () => {},
});

export default FormContext;
