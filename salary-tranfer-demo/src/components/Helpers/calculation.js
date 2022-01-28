export const toNumber = (number) => {
  return Number(number);
};

export const insuranceOnMinWageCalc = (number, gross, minWage) => {
  let result;
  const percentage = number / 100;
  const minWageX20 = minWage * 20;
  if (gross > minWageX20) {
    result = minWageX20 * percentage;
  } else {
    result = gross * percentage;
  }

  return result;
};

export const regionMinwageCalc = (region) => {
  let min;
  switch (region) {
    case "one":
      min = 4420000;
      break;
    case "two":
      min = 3920000;
      break;
    case "three":
      min = 3430000;
      break;
    case "four":
      min = 3070000;
      break;
    default:
  }
  return min;
};

export const insunranceOnRegionCalc = (number, gross, regionMinwage) => {
  let resultValue;
  const percentage = number / 100;
  const regionX20 = regionMinwage * 20;

  if (gross > regionX20) {
    resultValue = regionX20 * percentage;
  } else {
    resultValue = gross * percentage;
  }
  return resultValue;
};

export const totalReductionCalc = (personal, dependant, number) => {
  let result;
  const amountDepedant = dependant * number;
  result = ~~personal + amountDepedant;
  return result;
};

export const incomeNoTaxCalc = (gross, totalInsurance, totalReduction) => {
  return gross - totalInsurance - totalReduction;
};

export const personalIncomeTaxCalc = (incomeBeforeTax) => {
  let payment;
  if (incomeBeforeTax <= 5000000) {
    payment = (incomeBeforeTax * 5) / 100;
  } else if (incomeBeforeTax > 5000000 && incomeBeforeTax <= 10000000) {
    payment = 250000 + (incomeBeforeTax - 5000000) * 0.1;
  } else if (incomeBeforeTax > 10000000 && incomeBeforeTax <= 18000000) {
    payment = 250000 + 500000 + (incomeBeforeTax - 10000000) * 0.15;
  } else if (incomeBeforeTax > 18000000 && incomeBeforeTax <= 32000000) {
    payment = 250000 + 500000 + 1200000 + (incomeBeforeTax - 18000000) * 0.2;
  } else if (incomeBeforeTax > 32000000 && incomeBeforeTax <= 52000000) {
    payment =
      250000 + 500000 + 1200000 + 2800000 + (incomeBeforeTax - 32000000) * 0.25;
  } else if (incomeBeforeTax > 52000000 && incomeBeforeTax <= 80000000) {
    payment =
      250000 +
      500000 +
      1200000 +
      2800000 +
      5000000 +
      (incomeBeforeTax - 52000000) * 0.3;
  } else if (incomeBeforeTax > 80000000) {
    payment =
      250000 +
      500000 +
      1200000 +
      2800000 +
      5000000 +
      8400000 +
      (incomeBeforeTax - 80000000) * 0.35;
  }
  return { payment };
};
