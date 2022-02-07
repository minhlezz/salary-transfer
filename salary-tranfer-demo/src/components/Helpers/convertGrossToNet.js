export const insuranceOnMinWageCalc = (gross, percent, minWage) => {
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

export const insunranceOnRegionCalc = (gross, percent, regionMinwage) => {
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

export const totalReductionCalc = (personal, dependant, number) => {
  let result;
  const amountDepedant = dependant * number;
  result = ~~personal + amountDepedant;
  return { reductions: result, totalDependant: amountDepedant };
};

export const incomeNoTaxCalc = (gross, totalInsurance, totalReduction) => {
  return gross - totalInsurance - totalReduction;
};

export const personalIncomeTaxCalc = (incomeWasTax) => {
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

export const personalIncomeTax = (taxableIncome) => {
  let taxableLevel = {
    level1: 0,
    level2: 0,
    level3: 0,
    level4: 0,
    level5: 0,
    level6: 0,
    level7: 0,
  };
  let remain;

  if (taxableIncome <= 5000000) {
    remain = (taxableIncome * 5) / 100;
    return {
      ...taxableLevel,
      level1: remain,
    };
  } else if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
    remain = (taxableIncome - 5000000) * 0.1;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: remain,
    };
  } else if (taxableIncome > 10000000 && taxableIncome <= 18000000) {
    remain = (taxableIncome - 10000000) * 0.15;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: 500000,
      level3: remain,
    };
  } else if (taxableIncome > 18000000 && taxableIncome <= 32000000) {
    remain = (taxableIncome - 18000000) * 0.2;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: 500000,
      level3: 1200000,
      level4: remain,
    };
  } else if (taxableIncome > 32000000 && taxableIncome <= 52000000) {
    remain = (taxableIncome - 32000000) * 0.25;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: 500000,
      level3: 1200000,
      level4: 2800000,
      level5: remain,
    };
  } else if (taxableIncome > 52000000 && taxableIncome <= 80000000) {
    remain = (taxableIncome - 52000000) * 0.3;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: 500000,
      level3: 1200000,
      level4: 2800000,
      level5: 5000000,
      level6: remain,
    };
  } else if (taxableIncome > 80000000) {
    remain = (taxableIncome - 80000000) * 0.35;
    return {
      ...taxableLevel,
      level1: 250000,
      level2: 500000,
      level3: 1200000,
      level4: 2800000,
      level5: 5000000,
      level6: 8400000,
      level7: remain,
    };
  }
};

export const socialEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 25.5 - employeePercentage;
  const socialEmployerPayment = (gross * remainPercentage) / 100;
  return {
    remainPercentage,
    socialEmployerPayment,
  };
};

export const healthEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 4.5 - employeePercentage;
  const healthEmployerPayment = (gross * remainPercentage) / 100;

  return {
    remainPercentage,
    healthEmployerPayment,
  };
};

export const unemployedEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 2 - employeePercentage;
  const unemployedEmployerPayment = (gross * remainPercentage) / 100;

  return {
    remainPercentage,
    unemployedEmployerPayment,
  };
};

export const grossToNetConvert = (formValues) => {
  let totalInsurance;
  let totalReductions;
  let incomeBeforeTax;
  let taxableIncome;
  let personalTax;
  let netSalary;

  const {
    inputValue,
    // payfor,
    minimumWage,
    socialInsurancePercent,
    healthInsurancePercent,
    unemployedInsurancePercent,
    region,
    personal,
    dependant,
    numberDependant,
  } = formValues;

  const socialPayment = insuranceOnMinWageCalc(
    inputValue,
    socialInsurancePercent,
    minimumWage
  );
  const healthPayment = insuranceOnMinWageCalc(
    inputValue,
    healthInsurancePercent,
    minimumWage
  );
  const unemployedPayment = unemployedPaymentCalc(
    inputValue,
    unemployedInsurancePercent,
    region
  );

  totalInsurance = socialPayment + healthPayment + unemployedPayment;

  incomeBeforeTax = incomeBeforeTaxCalc(inputValue, totalInsurance);

  const { reductions, totalDependant: dependantReduction } = totalReductionCalc(
    personal,
    dependant,
    numberDependant
  );

  totalReductions = reductions;

  taxableIncome = taxableIncomeCalc(totalReductions, incomeBeforeTax);

  personalTax = personalIncomeTaxCalc(taxableIncome);

  netSalary = incomeBeforeTax - personalTax;

  return {
    grossSalary: inputValue,
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

const incomeBeforeTaxCalc = (incomeInput, totalInsurance) => {
  return incomeInput - totalInsurance;
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
