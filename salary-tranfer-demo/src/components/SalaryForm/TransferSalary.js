import React from "react";
import {
  employerPayCalc,
  grossToNetConvert,
} from "../Helpers/convertGrossToNet";
import { netToCrossConvert } from "../Helpers/convertNetToGross";
import Button from "../UI/Button";

const TransferSalary = (props) => {
  const { salaryInfo, calculateResultHandler } = props;
  const { income, insurance } = salaryInfo;

  const { employee } = insurance;

  const grossToNetHandler = (e) => {
    e.preventDefault();
    const updatedForm = {
      inputValue: +income.incomeInput,
      minimumWage: employee.minWage,
      socialInsurancePercent: employee.social,
      healthInsurancePercent: employee.health,
      unemployedInsurancePercent: employee.unemployed,
      region: insurance.region,
      personal: salaryInfo.dependantReduction.personalReduction,
      dependant: salaryInfo.dependantReduction.dependant,
      numberDependant: salaryInfo.dependantReduction.numberDependant,
    };

    const result = grossToNetConvert(updatedForm);
    const explainInDetail = {
      grossSalary: result.grossSalary,
      socialInsurance: {
        percentage: updatedForm.socialInsurancePercent,
        payment: result.socialPayment,
      },
      healthInsurance: {
        percentage: updatedForm.healthInsurancePercent,
        payment: result.healthPayment,
      },
      unemployedInsurance: {
        percentage: updatedForm.unemployedInsurancePercent,
        payment: result.unemployedPayment,
      },
      incomeBeforeTax: result.incomeBeforeTax,
      personalReduction: +updatedForm.personal,
      dependantReduction: result.dependantReduction,
      taxableIncome: result.taxableIncome,
      personalIncomeTax: result.personalTax,
      netSalary: result.netSalary,
    };

    const employer = employerPayCalc(updatedForm);

    const updatedEmployerPay = {
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
        percent: employer.unemployedPercent,
        payment: employer.unemployedEmployerPayment,
      },
    };

    calculateResultHandler({
      result: {
        grossSalary: result.grossSalary,
        netSalary: result.netSalary,
      },
      explainInDetail,
      employerPay: updatedEmployerPay,
    });
  };

  const netToGrossHandler = (e) => {
    e.preventDefault();

    const updatedForm = {
      inputValue: +income.incomeInput,
      minimumWage: employee.minWage,
      socialInsurancePercent: employee.social,
      healthInsurancePercent: employee.health,
      unemployedInsurancePercent: employee.unemployed,
      region: insurance.region,
      personal: salaryInfo.dependantReduction.personalReduction,
      dependant: salaryInfo.dependantReduction.dependant,
      numberDependant: salaryInfo.dependantReduction.numberDependant,
    };

    const newGrossSalary = netToCrossConvert(updatedForm);

    const updatedNewGrossToForm = {
      ...updatedForm,
      inputValue: newGrossSalary,
    };

    const result = grossToNetConvert(updatedNewGrossToForm);
    const explainInDetail = {
      grossSalary: result.grossSalary,
      socialInsurance: {
        percentage: updatedForm.socialInsurancePercent,
        payment: result.socialPayment,
      },
      healthInsurance: {
        percentage: updatedForm.healthInsurancePercent,
        payment: result.healthPayment,
      },
      unemployedInsurance: {
        percentage: updatedForm.unemployedInsurancePercent,
        payment: result.unemployedPayment,
      },
      incomeBeforeTax: result.incomeBeforeTax,
      personalReduction: +updatedForm.personal,
      dependantReduction: result.dependantReduction,
      taxableIncome: result.taxableIncome,
      personalIncomeTax: result.personalTax,
      netSalary: result.netSalary,
    };

    const employer = employerPayCalc(updatedForm);

    const updatedEmployerPay = {
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
        percent: employer.unemployedPercent,
        payment: employer.unemployedEmployerPayment,
      },
    };

    calculateResultHandler({
      result: {
        grossSalary: result.grossSalary,
        netSalary: result.netSalary,
      },
      explainInDetail,
      employerPay: updatedEmployerPay,
    });
  };

  return (
    <div className="d-flex justify-center">
      <Button onClick={grossToNetHandler}>GROSS &rarr; NET</Button>
      <Button onClick={netToGrossHandler}>NET &rarr; GROSS</Button>
      <Button disabled>Print</Button>
    </div>
  );
};

export default TransferSalary;
