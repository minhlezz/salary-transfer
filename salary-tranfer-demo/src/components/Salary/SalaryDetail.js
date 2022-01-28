import React from "react";
import "./SalaryDetail.module.css";

const SalaryDetail = () => {
  return (
    <React.Fragment>
      <h3>Explain in detail (USD)</h3>
      <table>
        <tbody>
          <tr className="bgGrey">
            <th>Gross salary</th>
            <td>429.18</td>
          </tr>
          <tr>
            <th>Social insurance (8%)</th>
            <td>- 0.00</td>
          </tr>
          <tr>
            <th>Health insurance (1.5%)</th>
            <td>- 0.00</td>
          </tr>
          <tr>
            <th>Unemployment insurance (1% - lương tối thiểu vùng)</th>
            <td>- 4.29</td>
          </tr>
          <tr className="bgGrey">
            <th>Income before tax</th>
            <td>424.89</td>
          </tr>
          <tr>
            <th>Reduction for personal</th>
            <td>- 0.00</td>
          </tr>
          <tr>
            <th>Reduction for dependant</th>
            <td>- 0.00</td>
          </tr>
          <tr className="bgGrey">
            <th>Taxable income</th>
            <td>424.89</td>
          </tr>
          <tr>
            <th>Personal income tax (*)</th>
            <td>- 31.76</td>
          </tr>
          <tr className="bgGrey">
            <th>
              NET salary
              <br />
              <span>(Income before tax - Personal income tax)</span>
            </th>
            <td>393.13</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SalaryDetail;
