import React, { useContext } from "react";
import "./SalaryDetail.module.css";
import FormContext from "../../store/form-context";
import { formatVND } from "../Helpers/currency-convert";

const SalaryDetail = () => {
  const formCtx = useContext(FormContext);
  const {
    gross,
    socialInsurance: social,
    healthInsurance: health,
    UnemployedInsurance: unemployed,
    incomeBeforeTax,
    personalReduction,
    dependantReduction: dependant,
    taxableIncome,
    personalIncomeTax,
    net,
  } = formCtx.item;

  return (
    <React.Fragment>
      <h3>Explain in detail (USD)</h3>
      <table>
        <tbody>
          <tr className="bgGrey">
            <th>Gross salary</th>
            <td>{formatVND(gross)}</td>
          </tr>
          <tr>
            <th>Social insurance ({social.socialPercentage})</th>
            <td>{formatVND(social.totalSocial)}</td>
          </tr>
          <tr>
            <th>Health insurance ({health.healthPercentage})</th>
            <td>- {formatVND(health.totalHealth)}</td>
          </tr>
          <tr>
            <th>
              Unemployment insurance ({unemployed.unemployedPercentage} - lương
              tối thiểu vùng)
            </th>
            <td>- {formatVND(unemployed.totalUnemployed)}</td>
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
            <td>- {formatVND(dependant.totalDependant)}</td>
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
            <td>{formatVND(net)}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SalaryDetail;
