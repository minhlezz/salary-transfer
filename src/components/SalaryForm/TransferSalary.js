import { Button, Col, Row } from "antd";
import React from "react";

const TransferSalary = (props) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Button onClick={props.salaryResultCalc}>GrossToNet</Button>
        <Button onClick={props.netToGrossHandler}>NetToGross</Button>
        <Button htmlType="submit">Print</Button>
      </Col>
    </Row>
  );
};

export default TransferSalary;
