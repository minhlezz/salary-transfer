import { Col, Row } from "antd";
import React from "react";
import {
  convertToUSD,
  formatUSD,
  formatVND,
} from "../../helpers/convertCurrency";

const SalaryResult = (props) => {
  const { rateExchange } = props;
  const { grossSalary, netSalary } = props.transferResult;

  const grossToUSD = convertToUSD(grossSalary, rateExchange);
  const netToUSD = convertToUSD(netSalary, rateExchange);

  return (
    <Row justify="end">
      <Col className="text-red">
        <div>
          <span>GROSS:</span>
          <span>{formatVND(grossSalary)} (VND)</span>&nbsp;
          <span>&asymp;</span>&nbsp;
          <span>{formatUSD(grossToUSD)} (USD)</span>
        </div>
        <div>
          <span>NET:</span>&nbsp;
          <span>{formatVND(netSalary)} (VND)</span>&nbsp;
          <span>&asymp;</span>&nbsp;
          <span>{formatUSD(netToUSD)} (USD)</span>
        </div>
      </Col>
    </Row>
  );
};

export default SalaryResult;
