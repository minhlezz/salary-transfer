import { Col, Form, Input, Row } from "antd";
import React from "react";

const Income = () => {
  return (
    <React.Fragment>
      <h3>Income</h3>
      <Row gutter={12}>
        <Col span={6}>
          <Form.Item label="VND:" name="incomeInput">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="USD:">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Exchange rate: 1 USD" name="rateExchange">
            <Input suffix="VND" />
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Income;
