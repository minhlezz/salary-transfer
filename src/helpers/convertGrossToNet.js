const insuranceOnMinWageCalc = (gross, percent, minWage) => {
  let result;
  const percentage = percent / 100;
  const minWageX20 = minWage * 20;
  if (gross > minWageX20) {
    result = minWageX20 * percentage;
  } else {
    result = gross * percentage;
  }

  return result;
};

const regionMinwageCalc = (region) => {
  let min;
  switch (region) {
    case "I":
      min = 4420000;
      break;
    case "II":
      min = 3920000;
      break;
    case "III":
      min = 3430000;
      break;
    case "IV":
      min = 3070000;
      break;
    default:
  }
  return min;
};

const insunranceOnRegionCalc = (gross, percent, regionMinwage) => {
  let resultValue;
  const percentage = percent / 100;
  const regionX20 = regionMinwage * 20;

  if (gross > regionX20) {
    resultValue = regionX20 * percentage;
  } else {
    resultValue = gross * percentage;
  }
  return resultValue;
};

const unemployedPaymentCalc = (
  inputValue,
  unemployedInsurancePercent,
  region
) => {
  const regionMinwage = regionMinwageCalc(region);

  const unemployedPayment = insunranceOnRegionCalc(
    inputValue,
    unemployedInsurancePercent,
    regionMinwage
  );
  return unemployedPayment;
};

const incomeBeforeTaxCalc = (incomeInput, totalInsurance) => {
  return incomeInput - totalInsurance;
};

const totalReductionCalc = (personal, dependant, number) => {
  let result;
  const amountDepedant = dependant * number;
  result = ~~personal + amountDepedant;
  return { reductions: result, totalDependant: amountDepedant };
};

const taxableIncomeCalc = (reductions, incomeBeforeTax) => {
  let result;
  if (reductions > 0 && reductions < incomeBeforeTax) {
    result = incomeBeforeTax - reductions;
  }
  if (reductions > 0 && reductions > incomeBeforeTax) {
    result = 0;
  }
  if (reductions === 0) {
    result = incomeBeforeTax;
  }

  return result;
};

const personalIncomeTaxCalc = (incomeWasTax) => {
  let payment;
  if (incomeWasTax <= 5000000) {
    payment = (incomeWasTax * 5) / 100;
  } else if (incomeWasTax > 5000000 && incomeWasTax <= 10000000) {
    payment = 250000 + (incomeWasTax - 5000000) * 0.1;
  } else if (incomeWasTax > 10000000 && incomeWasTax <= 18000000) {
    payment = 250000 + 500000 + (incomeWasTax - 10000000) * 0.15;
  } else if (incomeWasTax > 18000000 && incomeWasTax <= 32000000) {
    payment = 250000 + 500000 + 1200000 + (incomeWasTax - 18000000) * 0.2;
  } else if (incomeWasTax > 32000000 && incomeWasTax <= 52000000) {
    payment =
      250000 + 500000 + 1200000 + 2800000 + (incomeWasTax - 32000000) * 0.25;
  } else if (incomeWasTax > 52000000 && incomeWasTax <= 80000000) {
    payment =
      250000 +
      500000 +
      1200000 +
      2800000 +
      5000000 +
      (incomeWasTax - 52000000) * 0.3;
  } else if (incomeWasTax > 80000000) {
    payment =
      250000 +
      500000 +
      1200000 +
      2800000 +
      5000000 +
      8400000 +
      (incomeWasTax - 80000000) * 0.35;
  }
  return payment;
};

export const grossToNetConvert = (formValues) => {
  let totalInsurance;
  let incomeBeforeTax;
  let taxableIncome;
  let personalTax;
  let netSalary;
  const {
    incomeInput,
    minWage,
    social,
    health,
    unemployed,
    region,
    personalReduction,
    dependant,
    numberDependant,
    // otherInput,
    // payType,
    // rateExchange,
  } = formValues;

  const socialPayment = insuranceOnMinWageCalc(+incomeInput, +social, +minWage);
  const healthPayment = insuranceOnMinWageCalc(+incomeInput, +health, +minWage);
  const unemployedPayment = unemployedPaymentCalc(
    +incomeInput,
    +unemployed,
    region
  );

  totalInsurance = socialPayment + healthPayment + unemployedPayment;
  incomeBeforeTax = incomeBeforeTaxCalc(+incomeInput, totalInsurance);

  const { reductions, totalDependant: dependantReduction } = totalReductionCalc(
    +personalReduction,
    +dependant,
    +numberDependant
  );

  taxableIncome = taxableIncomeCalc(reductions, incomeBeforeTax);
  personalTax = personalIncomeTaxCalc(taxableIncome);
  netSalary = incomeBeforeTax - personalTax;

  return {
    grossSalary: +incomeInput,
    dependantReduction,
    socialPayment,
    healthPayment,
    unemployedPayment,
    incomeBeforeTax,
    taxableIncome,
    personalTax,
    netSalary,
  };
};
