import React from "react";
import SalaryDetail from "./SalaryDetail";
import SalaryEmployerPay from "./SalaryEmployerPay";
import SalaryIncomeTax from "./SalaryIncomeTax";
import SalaryResult from "./SalaryResult";

const Salary = (props) => {
  const { transferResult, explainInDetail, employerPay, rateExchange } =
    props.salaryInfo;

  return (
    <React.Fragment>
      <SalaryResult
        transferResult={transferResult}
        rateExchange={rateExchange}
      />
      <SalaryDetail explainInDetail={explainInDetail} />
      <SalaryIncomeTax explainInDetail={explainInDetail} />
      <SalaryEmployerPay employerPay={employerPay} />
    </React.Fragment>
  );
};

export default Salary;
