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
