import React, { useContext } from "react";
import FormContext from "../../store/form-context";
import { personalIncomeTax } from "../Helpers/convertGrossToNet";
import { formatVND } from "../Helpers/currency-convert";

const PersonalIncomeTax = () => {
  const formCtx = useContext(FormContext);

  const { taxableIncome } = formCtx.item;
  const taxableLevel = personalIncomeTax(taxableIncome);

  return (
    <React.Fragment>
      <h3>(*) Detail of personal income tax (USD)</h3>
      <table>
        <thead className="bgGrey">
          <tr>
            <th>The taxable</th>
            <th>The tax rate</th>
            <th>The payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>To 5 million VND</td>
            <td>5%</td>
            <td>{formatVND(taxableLevel.level1)}</td>
          </tr>
          <tr>
            <td>Upper 5 million VND to 10 million VND </td>
            <td>10%</td>
            <td>{formatVND(taxableLevel.level2) || 0}</td>
          </tr>
          <tr>
            <td>Upper 10 million VND to 18 million VND</td>
            <td>15%</td>
            <td>{formatVND(taxableLevel.level3) || 0}</td>
          </tr>
          <tr>
            <td>Upper 18 million VND to 32 million VND</td>
            <td>20%</td>
            <td>{formatVND(taxableLevel.level4) || 0}</td>
          </tr>
          <tr>
            <td>Upper 32 million VND to 52 million VND</td>
            <td>25%</td>
            <td>{formatVND(taxableLevel.level5) || 0}</td>
          </tr>
          <tr>
            <td>Upper 52 million VND to 80 million VND</td>
            <td>30%</td>
            <td>{formatVND(taxableLevel.level6) || 0}</td>
          </tr>
          <tr>
            <td>Upper 80 million VND</td>
            <td>35%</td>
            <td>{formatVND(taxableLevel.level7) || 0}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PersonalIncomeTax;
