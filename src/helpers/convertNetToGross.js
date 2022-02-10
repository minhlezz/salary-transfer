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
      incomeInput: middle,
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
  const { incomeInput } = formValues;
  const result = applyBinarySearch(+incomeInput, formValues);
  return result;
};

export const netToCrossConvert = (formValues) => {
  let result;
  result = findNetByBinarySearch(formValues);
  console.log(result);
  return result;
};
