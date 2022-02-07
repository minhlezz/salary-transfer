import React, { useContext, useState } from "react";
import FormContext from "../../store/form-context";

import Button from "../UI/Button";
import Income from "./Income";
import Insurance from "./Insurance";
import Reduction from "./Reduction";

const SalaryForm = (props) => {
  const formCtx = useContext(FormContext);

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

  const grossToNetHandler = (e) => {
    e.preventDefault();
    formCtx.grossToNet({
      inputValue: +incomeInput,
      payfor: selectedPayfor,
      minimumWage: +minwage,
      socialInsurancePercent: social,
      healthInsurancePercent: health,
      unemployedInsurancePercent: unemployed,
      region: selectedRegion,
      personal: +personalReduction,
      dependant: +dependant,
      numberDependant: +numberDependant,
    });
  };

  const netToGrossHandler = (e) => {
    e.preventDefault();
    formCtx.netToGross({
      inputValue: +incomeInput,
      payfor: selectedPayfor,
      minimumWage: +minwage,
      socialInsurancePercent: social,
      healthInsurancePercent: health,
      unemployedInsurancePercent: unemployed,
      region: selectedRegion,
      personal: +personalReduction,
      dependant: +dependant,
      numberDependant: +numberDependant,
    });
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
