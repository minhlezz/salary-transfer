import React, { useContext } from "react";
import FormContext from "../../store/form-context";
import { formatVND } from "../Helpers/currency-convert";

const EmployerPay = () => {
  const formCtx = useContext(FormContext);

  const {
    gross,
    employerPay: { socialInsurance, healthInsurance, unemployedInsurance },
  } = formCtx.item;

  let total =
    gross +
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
            <td>{formatVND(gross)}</td>
          </tr>
          <tr>
            <th>Social insurance ({socialInsurance.percentage}%)</th>
            <td>{formatVND(socialInsurance.payment)}</td>
          </tr>
          <tr>
            <th>Health insurance ({healthInsurance.percentage}%)</th>
            <td>{formatVND(healthInsurance.payment)}</td>
          </tr>
          <tr>
            <th>
              Unemployment insurance ({unemployedInsurance.percentage}% - lương
              tối thiểu vùng)
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
