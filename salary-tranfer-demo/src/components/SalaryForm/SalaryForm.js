import React, { useState } from "react";
import {
  insunranceOnRegionCalc,
  insuranceOnMinWageCalc,
  personalIncomeTaxCalc,
  regionMinwageCalc,
  totalReductionCalc,
} from "../Helpers/calculation";
import Button from "../UI/Button";
import Income from "./Income";
import Insurance from "./Insurance";
import Reduction from "./Reduction";

const SalaryForm = (props) => {
  const { gross, grossHandler, rate, rateHandler } = props;

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

  const totalInsurance = () => {
    let total;
    let base;

    if (selectedPayfor === "fullwage") {
      base = +gross;
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

    return total;
  };

  const incomeNoTaxCalc = () => {
    let incomeWasTax;
    let personalTax;

    const insurances = totalInsurance();
    const reductions = totalReductionCalc(
      personalReduction,
      dependant,
      numberDependant
    );

    let incomeBeforeTax = +gross - insurances;

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
    return { incomeBeforeTax, personalTax };
  };

  const grossToNetHandler = (e) => {
    e.preventDefault();
    const { incomeBeforeTax, personalTax } = incomeNoTaxCalc();

    const netSalary = incomeBeforeTax - personalTax;
    props.netHandler(netSalary);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={submitHandler}>
      <Income
        gross={gross}
        grossHandler={grossHandler}
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
        <Button type="submit" onClick={grossToNetHandler}>
          GROSS &rarr; NET
        </Button>
        <Button>NET &rarr; GROSS</Button>
        <Button disabled>Print</Button>
      </div>
    </form>
  );
};

export default SalaryForm;
