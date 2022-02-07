import { grossToNetConvert } from "./convertGrossToNet";

const findSuitableGross = (formValues) => {
  const { inputValue } = formValues;
  const netSalary = inputValue;
  let coef = 2;
  let lowerBound = netSalary;
  let upperBound = lowerBound * coef;

  while (true) {
    let newFormValues;
    let middle = (lowerBound + upperBound) / 2;
    newFormValues = {
      ...formValues,
      inputValue: middle,
    };
    const updatedForm = grossToNetConvert(newFormValues);

    let temp = updatedForm.netSalary;
    if (Math.floor(temp) === netSalary) {
      return {
        ...updatedForm,
      };
    }
    if (temp < netSalary) {
      lowerBound = middle;
    } else {
      upperBound = middle;
    }
  }
};

export const netToCrossConvert = (formValues) => {
  let result;
  const { grossSalary } = findSuitableGross(formValues);
  result = grossSalary;
  return result;
};
