import React, { useContext } from "react";
import "./SalaryDetail.module.css";
import FormContext from "../../store/form-context";
import { formatVND } from "../Helpers/currency-convert";

const SalaryDetail = () => {
  const formCtx = useContext(FormContext);
  const {
    grossSalary,
    socialInsurance,
    healthInsurance,
    unemployedInsurance,
    incomeBeforeTax,
    personalReduction,
    dependantReduction,
    taxableIncome,
    personalIncomeTax,
    netSalary,
  } = formCtx.explainInDetail;
  return (
    <React.Fragment>
      <h3>Explain in detail (USD)</h3>
      <table>
        <tbody>
          <tr className="bgGrey">
            <th>Gross salary</th>
            <td>{formatVND(grossSalary)}</td>
          </tr>
          <tr>
            <th>Social insurance ({socialInsurance.percentage}%)</th>
            <td>{formatVND(socialInsurance.payment)}</td>
          </tr>
          <tr>
            <th>Health insurance ({healthInsurance.percentage}%)</th>
            <td>- {formatVND(healthInsurance.payment)}</td>
          </tr>
          <tr>
            <th>
              Unemployment insurance ({unemployedInsurance.percentage}% - lương
              tối thiểu vùng)
            </th>
            <td>- {formatVND(unemployedInsurance.payment)}</td>
          </tr>
          <tr className="bgGrey">
            <th>Income before tax</th>
            <td>{formatVND(incomeBeforeTax)}</td>
          </tr>
          <tr>
            <th>Reduction for personal</th>
            <td>- {formatVND(personalReduction)}</td>
          </tr>
          <tr>
            <th>Reduction for dependant</th>
            <td>- {formatVND(dependantReduction)}</td>
          </tr>
          <tr className="bgGrey">
            <th>Taxable income</th>
            <td>{formatVND(taxableIncome)}</td>
          </tr>
          <tr>
            <th>Personal income tax (*)</th>
            <td>- {formatVND(personalIncomeTax)}</td>
          </tr>
          <tr className="bgGrey">
            <th>
              NET salary
              <br />
              <span>(Income before tax - Personal income tax)</span>
            </th>
            <td>{formatVND(netSalary)}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SalaryDetail;
