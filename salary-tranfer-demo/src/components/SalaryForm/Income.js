import React from "react";
import Input from "../UI/Input/Input";

const Income = (props) => {
  const { income, incomeChangeHandler } = props;

  const handleChangeIncome = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    incomeChangeHandler({
      ...income,
      [id]: value,
    });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Income</h3>
      <Input
        type="number"
        id="incomeInput"
        size="large"
        preLabel="VND:"
        value={income.incomeInput}
        onChange={handleChangeIncome}
      />
      <Input
        type="number"
        id="usd"
        size="medium"
        preLabel="USD:"
        onChange={handleChangeIncome}
      />
      <Input
        type="number"
        id="rateExchange"
        size="medium"
        preLabel="Exchange rate: 1 USD = "
        label="VND"
        value={income.rateExchange}
        onChange={handleChangeIncome}
      />
    </div>
  );
};

export default Income;
