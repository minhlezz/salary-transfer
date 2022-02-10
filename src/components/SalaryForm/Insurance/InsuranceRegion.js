import { Col, Form, Radio, Row } from "antd";
import React from "react";

const InsuranceRegion = () => {
  return (
    <Row>
      <Col span={12}>
        <Form.Item label="Region" name="region">
          <Radio.Group>
            <Radio value="I">I</Radio>
            <Radio value="II">II</Radio>
            <Radio value="III">III</Radio>
            <Radio value="IV">IV</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InsuranceRegion;
