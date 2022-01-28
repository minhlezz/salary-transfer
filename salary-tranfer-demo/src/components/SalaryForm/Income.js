import React from "react";
import Input from "../UI/Input/Input";

const Income = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Income</h3>
      <Input
        type="number"
        id="vnd"
        size="large"
        preLabel="VND:"
        value={props.incomeInput}
        onChange={props.incomeInputHandler}
      />
      <Input type="number" id="usd" size="medium" preLabel="USD:" />
      <Input
        type="number"
        id="exchange"
        size="medium"
        preLabel="Exchange rate: 1 USD = "
        label="VND"
        value={props.rate}
        onChange={props.rateHandler}
      />
    </div>
  );
};

export default Income;
