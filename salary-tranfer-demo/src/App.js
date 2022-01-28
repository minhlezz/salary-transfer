import { useState } from "react";
import "./App.css";
import Container from "./components/UI/Container";
import Salary from "./components/Salary/Salary";
import SalaryForm from "./components/SalaryForm/SalaryForm";

function App() {
  const [gross, setGross] = useState(0);
  const [net, setNet] = useState(0);
  const [rate, setRate] = useState(23300);

  const netHandler = (netSalary) => {
    setNet(netSalary);
  };

  const grossHandler = (e) => {
    setGross(e.target.value);
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  return (
    <Container>
      <h1>Transfer GROSS to NET and vice versa</h1>
      <SalaryForm
        net={net}
        netHandler={netHandler}
        gross={gross}
        grossHandler={grossHandler}
        rate={rate}
        rateHandler={rateHandler}
      />
      <Salary net={net} gross={gross} rate={rate} />
    </Container>
  );
}

export default App;
