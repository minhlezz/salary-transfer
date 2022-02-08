import { useState } from "react";

import Container from "./components/UI/Container";
import Salary from "./components/Salary/Salary";
import SalaryForm from "./components/SalaryForm/SalaryForm";
import FormProvider from "./store/FormProvider";
import "./App.css";

function App() {
  const [rate, setRate] = useState(23300);

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  return (
    <FormProvider>
      <Container>
        <h1>Transfer GROSS to NET and vice versa</h1>
        <SalaryForm rate={rate} rateHandler={rateHandler} />
        <Salary rate={rate} />
      </Container>
    </FormProvider>
  );
}

export default App;
