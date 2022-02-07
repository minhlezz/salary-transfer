import React, { useContext } from "react";
import FormContext from "../../store/form-context";
import { formatVND } from "../Helpers/currency-convert";

const EmployerPay = () => {
  const formCtx = useContext(FormContext);

  const { grossSalary, socialInsurance, healthInsurance, unemployedInsurance } =
    formCtx.employerPay;
  let total =
    grossSalary +
    socialInsurance.payment +
    healthInsurance.payment +
    unemployedInsurance.payment;

  return (
    <React.Fragment>
      <h3>Employer pay (USD)</h3>
      <table>
        <tbody>
          <tr>
            <th>GROSS salary</th>
            <td>{formatVND(grossSalary)}</td>
          </tr>
          <tr>
            <th>Social insurance ({socialInsurance.percent}%)</th>
            <td>{formatVND(socialInsurance.payment)}</td>
          </tr>
          <tr>
            <th>Health insurance ({healthInsurance.percent}%)</th>
            <td>{formatVND(healthInsurance.payment)}</td>
          </tr>
          <tr>
            <th>
              Unemployment insurance ({unemployedInsurance.percent}% - lương tối
              thiểu vùng)
            </th>
            <td>{formatVND(unemployedInsurance.payment)}</td>
          </tr>
          <tr className="bgGrey">
            <th>Total</th>
            <td>{formatVND(total)}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default EmployerPay;
