import { Col, Descriptions, Row } from "antd";
import React from "react";

const SalaryResult = () => {
  return (
    <Row justify="end">
      <Col className="text-red">
        <div>
          <span>GROSS:</span>
          <span>{12321321312} (VND)</span>&nbsp;
          <span>&asymp;</span>&nbsp;
          <span>{123123123} (USD)</span>
        </div>
        <div>
          <span>NET:</span>&nbsp;
          <span>{123123} (VND)</span>&nbsp;
          <span>&asymp;</span>&nbsp;
          <span>{12312312321} (USD)</span>
        </div>
      </Col>
    </Row>
  );
};

export default SalaryResult;
