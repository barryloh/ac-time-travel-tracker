import React from 'react';
import { Row, Col } from 'antd';

const ContentContainer = props => {
  const { children } = props;
  return (
    <Row>
      <Col
        xs={{ span: 24, offset: 0 }}
        md={{ span: 21, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
      >
        {children}
      </Col>
    </Row>
  );
};

export default ContentContainer;
