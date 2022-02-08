import { grossToNetConvert } from "./convertGrossToNet";

const applyBinarySearch = (netSalary, formValues) => {
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

    const temp = updatedForm.netSalary;

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

const findNetByBinarySearch = (formValues) => {
  const { inputValue } = formValues;
  const netSalary = inputValue;
  const result = applyBinarySearch(netSalary, formValues);
  return result;
};

export const netToCrossConvert = (formValues) => {
  let result;
  const { grossSalary } = findNetByBinarySearch(formValues);
  result = grossSalary;
  return result;
};
