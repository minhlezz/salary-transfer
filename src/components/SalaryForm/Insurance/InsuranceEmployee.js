import { Col, Form, Input, Row } from "antd";
import React from "react";

const InsuranceEmployee = () => {
  return (
    <Row gutter={4}>
      <Col span={10}>
        <Form.Item label="Minimum wage" name="minWage">
          <Input suffix="VND" size="small" />
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item label="Social" name="social">
          <Input suffix="%" size="small" />
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item label="Health" name="health">
          <Input suffix="%" size="small" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item label="Unemployed" name="unemployed">
          <Input suffix="%" size="small" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InsuranceEmployee;
