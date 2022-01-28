import React from 'react';

const EmployerPay = () => {
  return <React.Fragment>
      <h3>Employer pay (USD)</h3>
      <table>
          <tbody>
              <tr>
                  <th>GROSS salary</th>
                  <td>429.18</td>
              </tr>
              <tr>
                  <th>Social insurance (17.5%)</th>
                  <td>0.00</td>
              </tr>
              <tr>
                  <th>Health insurance (3%)</th>
                  <td>0.00</td>
              </tr>
              <tr>
                  <th>Unemployment insurance (1% - lương tối thiểu vùng)</th>
                  <td>4.29</td>
              </tr>
              <tr className="bgGrey">
                  <th>Total</th>
                  <td>433.48</td>
              </tr>
          </tbody>
      </table>
  </React.Fragment>;
};

export default EmployerPay;
