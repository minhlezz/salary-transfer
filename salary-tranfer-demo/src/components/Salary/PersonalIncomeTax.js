import React from "react";

const PersonalIncomeTax = () => {
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
            <td>10.73</td>
          </tr>
          <tr>
            <td>Upper 5 million VND to 10 million VND </td>
            <td>10%</td>
            <td>21.03</td>
          </tr>
          <tr>
            <td>Upper 10 million VND to 18 million VND</td>
            <td>5%</td>
            <td>10.73</td>
          </tr>
          <tr>
            <td>Upper 18 million VND to 32 million VND</td>
            <td>5%</td>
            <td>10.73</td>
          </tr>
          <tr>
            <td>Upper 32 million VND to 52 million VND</td>
            <td>5%</td>
            <td>10.73</td>
          </tr>
          <tr>
            <td>Upper 52 million VND to 80 million VND</td>
            <td>5%</td>
            <td>10.73</td>
          </tr>
          <tr>
            <td>Upper 80 million VND</td>
            <td>5%</td>
            <td>10.73</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PersonalIncomeTax;
