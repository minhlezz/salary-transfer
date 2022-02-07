import { useState } from "react";
import "./App.css";
import Container from "./components/UI/Container";
import Salary from "./components/Salary/Salary";
import SalaryForm from "./components/SalaryForm/SalaryForm";
import FormProvider from "./store/FormProvider";

function App() {
  const [gross, setGross] = useState(0);
  const [net, setNet] = useState(0);
  const [rate, setRate] = useState(23300);

  const netHandler = (netSalary) => {
    setNet(netSalary);
  };

  const grossHandler = (grossSalary) => {
    setGross(grossSalary);
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  return (
    <FormProvider>
      <Container>
        <h1>Transfer GROSS to NET and vice versa</h1>
        <SalaryForm
          netHandler={netHandler}
          rate={rate}
          rateHandler={rateHandler}
          grossHandler={grossHandler}
        />
        <Salary net={net} rate={rate} gross={gross} />
      </Container>
    </FormProvider>
  );
}

export default App;
