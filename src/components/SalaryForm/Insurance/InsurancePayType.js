import React from "react";
import { Col, Radio, Row, Form, Input } from "antd";

const InsurancePayType = (props) => {
  return (
    <Row>
      <Col span={12}>
        <Form.Item label="Pay for" name="payType">
          <Radio.Group>
            <Radio value="fullwage">full wage</Radio>
            <Radio value="other">other</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="otherInput">
          <Input suffix="VND" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InsurancePayType;
