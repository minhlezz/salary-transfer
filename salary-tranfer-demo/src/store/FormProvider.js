import React, { useReducer } from "react";
import {
  grossToNetConvert,
  healthEmployerPay,
  socialEmployerPay,
  unemployedEmployerPay,
} from "../components/Helpers/convertGrossToNet";
import { netToCrossConvert } from "../components/Helpers/convertNetToGross";
import FormContext from "./form-context";

const defaultFormState = {
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

const formReducer = (state, action) => {
  if (action.type === "GROSS_TO_NET") {
    let updatedForm = {
      ...state.formValues,
      ...action.formValues,
    };
    const {
      socialPayment,
      dependantReduction,
      healthPayment,
      unemployedPayment,
      incomeBeforeTax,
      taxableIncome,
      personalTax,
      netSalary,
    } = grossToNetConvert(updatedForm);

    const updatedExplainInDetail = {
      ...state.explainInDetail,
      grossSalary: updatedForm.inputValue,
      socialInsurance: {
        percentage: updatedForm.socialInsurancePercent,
        payment: socialPayment,
      },
      healthInsurance: {
        percentage: updatedForm.healthInsurancePercent,
        payment: healthPayment,
      },
      unemployedInsurance: {
        percentage: updatedForm.unemployedInsurancePercent,
        payment: unemployedPayment,
      },
      incomeBeforeTax,
      personalReduction: updatedForm.personal,
      dependantReduction: dependantReduction,
      taxableIncome,
      personalIncomeTax: personalTax,
      netSalary,
    };
    const { remainPercentage: socialPercent, socialEmployerPayment } =
      socialEmployerPay(
        updatedForm.socialInsurancePercent,
        updatedForm.inputValue
      );

    const { remainPercentage: healthPercent, healthEmployerPayment } =
      healthEmployerPay(
        updatedForm.healthInsurancePercent,
        updatedForm.inputValue
      );
    const { remainPercentage: unemployedPercent, unemployedEmployerPayment } =
      unemployedEmployerPay(
        updatedForm.unemployedInsurancePercent,
        updatedForm.inputValue
      );

    const updatedEmployerPay = {
      grossSalary: updatedForm.inputValue,
      socialInsurance: {
        percent: socialPercent,
        payment: socialEmployerPayment,
      },
      healthInsurance: {
        percent: healthPercent,
        payment: healthEmployerPayment,
      },
      unemployedInsurance: {
        percent: unemployedPercent,
        payment: unemployedEmployerPayment,
      },
    };
    return {
      formValues: updatedForm,
      explainInDetail: updatedExplainInDetail,
      transfer: {
        gross: updatedForm.inputValue,
        netSalary,
      },
      employerPay: updatedEmployerPay,
    };
  }
  if (action.type === "NET_TO_GROSS") {
    let updatedForm = {
      ...state.formValues,
      ...action.formValues,
    };
    const newGrossSalary = netToCrossConvert(updatedForm);
    const updatedGrossToForm = {
      ...updatedForm,
      inputValue: newGrossSalary,
    };

    const {
      socialPayment,
      dependantReduction,
      healthPayment,
      unemployedPayment,
      incomeBeforeTax,
      taxableIncome,
      personalTax,
      netSalary,
    } = grossToNetConvert(updatedGrossToForm);

    const updatedExplainInDetail = {
      ...state.explainInDetail,
      grossSalary: updatedGrossToForm.inputValue,
      socialInsurance: {
        percentage: updatedGrossToForm.socialInsurancePercent,
        payment: socialPayment,
      },
      healthInsurance: {
        percentage: updatedGrossToForm.healthInsurancePercent,
        payment: healthPayment,
      },
      unemployedInsurance: {
        percentage: updatedGrossToForm.unemployedInsurancePercent,
        payment: unemployedPayment,
      },
      incomeBeforeTax,
      personalReduction: updatedGrossToForm.personal,
      dependantReduction: dependantReduction,
      taxableIncome,
      personalIncomeTax: personalTax,
      netSalary,
    };

    const { remainPercentage: socialPercent, socialEmployerPayment } =
      socialEmployerPay(
        updatedGrossToForm.socialInsurancePercent,
        updatedGrossToForm.inputValue
      );
    const { remainPercentage: healthPercent, healthEmployerPayment } =
      healthEmployerPay(
        updatedGrossToForm.healthInsurancePercent,
        updatedGrossToForm.inputValue
      );
    const { remainPercentage: unemployedPercent, unemployedEmployerPayment } =
      unemployedEmployerPay(
        updatedGrossToForm.unemployedInsurancePercent,
        updatedGrossToForm.inputValue
      );

    const updatedEmployerPay = {
      grossSalary: updatedGrossToForm.inputValue,
      socialInsurance: {
        percent: socialPercent,
        payment: socialEmployerPayment,
      },
      healthInsurance: {
        percent: healthPercent,
        payment: healthEmployerPayment,
      },
      unemployedInsurance: {
        percent: unemployedPercent,
        payment: unemployedEmployerPayment,
      },
    };
    return {
      formValues: updatedGrossToForm,
      explainInDetail: updatedExplainInDetail,
      transfer: {
        gross: updatedGrossToForm.inputValue,
        netSalary,
      },
      employerPay: updatedEmployerPay,
    };
  }
};

const FormProvider = (props) => {
  const [formState, dispatchFormAction] = useReducer(
    formReducer,
    defaultFormState
  );

  const grossToNetHandler = (formValues) => {
    dispatchFormAction({
      type: "GROSS_TO_NET",
      formValues: formValues,
    });
  };

  const netToGrossHandler = (formValues) => {
    dispatchFormAction({
      type: "NET_TO_GROSS",
      formValues: formValues,
    });
  };

  const formContext = {
    formValues: formState.formValues,
    explainInDetail: formState.explainInDetail,
    transfer: formState.transfer,
    employerPay: formState.employerPay,
    grossToNet: grossToNetHandler,
    netToGross: netToGrossHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
