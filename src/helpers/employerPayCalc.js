const socialEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 25.5 - employeePercentage;
  const socialEmployerPayment = (gross * remainPercentage) / 100;
  return {
    remainPercentage,
    socialEmployerPayment,
  };
};

const healthEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 4.5 - employeePercentage;
  const healthEmployerPayment = (gross * remainPercentage) / 100;

  return {
    remainPercentage,
    healthEmployerPayment,
  };
};

const unemployedEmployerPay = (employeePercentage, gross) => {
  const remainPercentage = 2 - employeePercentage;
  const unemployedEmployerPayment = (gross * remainPercentage) / 100;

  return {
    remainPercentage,
    unemployedEmployerPayment,
  };
};

export const employerPayCalc = (formValues) => {
  const { incomeInput, social, health, unemployed } = formValues;

  const { remainPercentage: socialPercent, socialEmployerPayment } =
    socialEmployerPay(+social, +incomeInput);
  const { remainPercentage: healthPercent, healthEmployerPayment } =
    healthEmployerPay(+health, +incomeInput);
  const { remainPercentage: unemployedPercent, unemployedEmployerPayment } =
    unemployedEmployerPay(+unemployed, +incomeInput);

  return {
    socialPercent,
    socialEmployerPayment,
    healthPercent,
    healthEmployerPayment,
    unemployedPercent,
    unemployedEmployerPayment,
  };
};
