import React from 'react';
import { Row, Col } from 'antd';

function HeaderContainer(props) {
  const { children } = props;
  return (
    <>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 21, offset: 2 }}
          lg={{ span: 16, offset: 4 }}
        >
          {children}
        </Col>
      </Row>
    </>
  );
}

export default HeaderContainer;
