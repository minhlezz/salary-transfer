import { Col, Form, Input, Row } from "antd";
import React from "react";

const Reductions = () => {
  return (
    <React.Fragment>
      <h3>Reduction based on family circumstances</h3>
      <Row gutter={4}>
        <Col span={8}>
          <Form.Item label="Personal" name="personalReduction">
            <Input suffix="VND" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Dependant" name="dependant">
            <Input suffix="VND" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Number of dependant" name="numberDependant">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Reductions;
