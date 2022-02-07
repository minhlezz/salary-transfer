import React from "react";

const FormContext = React.createContext({
  gross: 0,
  socialInsurance: {
    socialPercentage: 0,
    totalSocial: 0,
  },
  healthInsurance: {
    healthPercentage: 0,
    totalHealth: 0,
  },
  UnemployedInsurance: {
    unemployedPercentage: 0,
    totalUnemployed: 0,
  },
  incomeBeforeTax: 0,
  personalReduction: 0,
  dependantReduction: {
    dependantNumber: 0,
    totalDependant: 0,
  },
  taxableIncome: 0,
  personalIncomeTax: 0,
  net: 0,
  grossToNet: () => {},
});

export default FormContext;
