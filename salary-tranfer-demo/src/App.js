import { useState } from "react";
import "./App.css";
import Container from "./components/UI/Container";
import Salary from "./components/Salary/Salary";
import SalaryForm from "./components/SalaryForm/SalaryForm";

function App() {
  const [incomeInput, setIncomeInput] = useState(0);
  const [gross, setGross] = useState(0);
  const [net, setNet] = useState(0);
  const [rate, setRate] = useState(23300);

  const netHandler = (netSalary) => {
    setNet(netSalary);
  };

  const grossHandler = (grossSalary) => {
    setGross(grossSalary);
  };

  const incomeInputHandler = (e) => {
    setIncomeInput(e.target.value);
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  return (
    <Container>
      <h1>Transfer GROSS to NET and vice versa</h1>
      <SalaryForm
        netHandler={netHandler}
        incomeInput={incomeInput}
        incomeInputHandler={incomeInputHandler}
        rate={rate}
        rateHandler={rateHandler}
        grossHandler={grossHandler}
      />
      <Salary net={net} rate={rate} gross={gross} />
    </Container>
  );
}

export default App;
