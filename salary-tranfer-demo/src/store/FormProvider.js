import React, { useReducer } from "react";
import FormContext from "./form-context";

const defaultFormState = {
  item: {
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
  },
};

const formReducer = (state, action) => {
  if (action.type === "grossToNet") {
    let updatedItem = {
      ...state.item,
      ...action.item,
    };
    return {
      item: updatedItem,
    };
  }
};

const FormProvider = (props) => {
  const [formState, dispatchFormAction] = useReducer(
    formReducer,
    defaultFormState
  );

  const grossToNetHandler = (item) => {
    dispatchFormAction({
      type: "grossToNet",
      item: item,
    });
  };

  const formContext = {
    item: formState.item,
    grossToNet: grossToNetHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
