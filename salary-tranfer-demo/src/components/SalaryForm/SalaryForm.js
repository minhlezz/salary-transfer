import React, { useContext, useState } from "react";
import {
  insunranceOnRegionCalc,
  insuranceOnMinWageCalc,
  personalIncomeTaxCalc,
  regionMinwageCalc,
  totalReductionCalc,
} from "../Helpers/convertGrossToNet";
import Button from "../UI/Button";
import Income from "./Income";
import Insurance from "./Insurance";
import Reduction from "./Reduction";
import FormContext from "../../store/form-context";

const SalaryForm = (props) => {
  const { rate, rateHandler } = props;

  const [incomeInput, setIncomeInput] = useState(0);

  const [selectedPayfor, setSelectedPayfor] = useState("fullwage");
  const [otherInput, setOtherInput] = useState(0);

  const [minwage, setMinwage] = useState(1490000);
  const [social, setSocial] = useState(8);
  const [health, setHealth] = useState(1.5);
  const [unemployed, setUnemployed] = useState(1);

  const [selectedRegion, setSelectedRegion] = useState("one");

  const [personalReduction, setPersonalReduction] = useState(0);
  const [dependant, setDependant] = useState(0);
  const [numberDependant, setNumberDependant] = useState(0);

  const formCtx = useContext(FormContext);

  const payforChangeHandler = (e) => {
    setSelectedPayfor(e.target.value);
  };

  const otherInputHandler = (e) => {
    setOtherInput(e.target.value);
  };

  const minwageHandler = (e) => {
    setMinwage(e.target.value);
  };

  const socialHandler = (e) => {
    setSocial(e.target.value);
  };
  const healthHandler = (e) => {
    setHealth(e.target.value);
  };
  const unemployedHandler = (e) => {
    setUnemployed(e.target.value);
  };

  const regionChangeHandler = (e) => {
    setSelectedRegion(e.target.value);
  };

  const personalReductionHandler = (e) => {
    setPersonalReduction(e.target.value);
  };

  const dependantHandler = (e) => {
    setDependant(e.target.value);
  };

  const numberDependantHandler = (e) => {
    setNumberDependant(e.target.value);
  };

  const incomeInputHandler = (e) => {
    setIncomeInput(e.target.value);
  };

  const totalInsurance = () => {
    let total;
    let base;

    if (selectedPayfor === "fullwage") {
      base = +incomeInput;
    }
    if (selectedPayfor === "other") {
      base = +otherInput;
    }

    const socialCalc = insuranceOnMinWageCalc(social, base, minwage);
    const healthCalc = insuranceOnMinWageCalc(health, base, minwage);
    const regionMinwage = regionMinwageCalc(selectedRegion);
  
    const unemployedCalc = insunranceOnRegionCalc(
      unemployed,
      base,
      regionMinwage
    );

    total = socialCalc + healthCalc + unemployedCalc;

    return {
      totalInsuranceCalc: total,
      socialCalc,
      healthCalc,
      unemployedCalc,
    };
  };

  const incomeNoTaxCalc = () => {
    let incomeWasTax;
    let personalTax;

    const { totalInsuranceCalc, socialCalc, healthCalc, unemployedCalc } =
      totalInsurance();
    const { reductions, totalDependant } = totalReductionCalc(
      personalReduction,
      dependant,
      numberDependant
    );

    let incomeBeforeTax = +incomeInput - totalInsuranceCalc;

    if (reductions > 0 && reductions < incomeBeforeTax) {
      incomeWasTax = incomeBeforeTax - reductions;
    }
    if (reductions > 0 && reductions > incomeBeforeTax) {
      incomeWasTax = 0;
    }
    if (reductions === 0) {
      incomeWasTax = incomeBeforeTax;
    }

    personalTax = personalIncomeTaxCalc(incomeWasTax);
    const netSalary = incomeBeforeTax - personalTax;
    formCtx.grossToNet({
      gross: +incomeInput,
      socialInsurance: {
        socialPercentage: social,
        totalSocial: socialCalc,
      },
      healthInsurance: {
        healthPercentage: health,
        totalHealth: healthCalc,
      },
      UnemployedInsurance: {
        unemployedPercentage: unemployed,
        totalUnemployed: unemployedCalc,
      },
      incomeBeforeTax: incomeBeforeTax,
      personalReduction: +personalReduction,
      dependantReduction: {
        dependantNumber: +numberDependant,
        totalDependant: totalDependant,
      },
      taxableIncome: incomeWasTax,
      personalIncomeTax: personalTax,
      net: netSalary,
    });
    return netSalary;
  };

  const incomeCalc = (input) => {
    let incomeWasTax;
    let personalTax;

    const insurances = totalInsurance();
    const reductions = totalReductionCalc(
      personalReduction,
      dependant,
      numberDependant
    );
    let incomeBeforeTax = +input - insurances;

    if (reductions > 0 && reductions < incomeBeforeTax) {
      incomeWasTax = incomeBeforeTax - reductions;
    }
    if (reductions > 0 && reductions > incomeBeforeTax) {
      incomeWasTax = 0;
    }
    if (reductions === 0) {
      incomeWasTax = incomeBeforeTax;
    }

    personalTax = personalIncomeTaxCalc(incomeWasTax);
    const netSalary = incomeBeforeTax - personalTax;
    return netSalary;
  };

  const grossToNetHandler = (e) => {
    e.preventDefault();
    const netSalary = incomeNoTaxCalc();

    props.grossHandler(incomeInput);
    props.netHandler(netSalary);
  };

  const netToGrossHandler = (e) => {
    e.preventDefault();
    props.netHandler(incomeInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Income
        incomeInput={incomeInput}
        incomeInputHandler={incomeInputHandler}
        rate={rate}
        rateHandler={rateHandler}
      />
      <Insurance
        selectedPayfor={selectedPayfor}
        payforChangeHandler={payforChangeHandler}
        otherInput={otherInput}
        otherInputHandler={otherInputHandler}
        minwage={minwage}
        social={social}
        health={health}
        unemployed={unemployed}
        minwageHandler={minwageHandler}
        socialHandler={socialHandler}
        healthHandler={healthHandler}
        unemployedHandler={unemployedHandler}
        selectedRegion={selectedRegion}
        regionChangeHandler={regionChangeHandler}
      />
      <Reduction
        personalReduction={personalReduction}
        personalReductionHandler={personalReductionHandler}
        dependant={dependant}
        dependantHandler={dependantHandler}
        numberDependant={numberDependant}
        numberDependantHandler={numberDependantHandler}
      />
      <div className="d-flex justify-center">
        <Button onClick={grossToNetHandler}>GROSS &rarr; NET</Button>
        <Button onClick={netToGrossHandler}>NET &rarr; GROSS</Button>
        <Button disabled>Print</Button>
      </div>
    </form>
  );
};

export default SalaryForm;
