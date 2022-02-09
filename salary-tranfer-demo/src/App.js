import { useState } from "react";

import Container from "./components/UI/Container";
import Salary from "./components/Salary/Salary";
import SalaryForm from "./components/SalaryForm/SalaryForm";
import FormProvider from "./store/FormProvider";
import "./App.css";

const initSalaryInfo = {
  income: {
    incomeInput: 0,
    rateExchange: 23300,
  },
  insurance: {
    employee: {
      minWage: 1490000,
      social: 8,
      health: 1.5,
      unemployed: 1,
    },
    region: "I",
    payType: {
      type: "fullwage",
      otherInput: 0,
    },
  },
  dependantReduction: {
    personalReduction: 0,
    dependant: 0,
    numberDependant: 0,
  },

  result: {
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
    <FormProvider>
      <Container>
        <h1>Transfer GROSS to NET and vice versa</h1>
        <SalaryForm
          salaryInfo={salaryInfo}
          updateSalaryInfo={updateSalaryInfo}
        />
        <Salary salaryInfo={salaryInfo} />
      </Container>
    </FormProvider>
  );
}

export default App;
