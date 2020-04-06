import React from 'react';
import { Row, Col, Typography } from 'antd';

import HeaderContainer from '../HeaderContainer';

function AppHeader() {
  return (
    <>
      <HeaderContainer>
        <Row align="middle">
          <Col>
            <Typography
              style={{
                marginBottom: '0px',
                fontSize: '18px',
                fontWeight: 'bold'
                // color: '#283F3B'
              }}
            >
              Time Travel Tracker
            </Typography>
          </Col>
          {/* <Col>
            <Button>Login</Button>
          </Col> */}
        </Row>
      </HeaderContainer>
    </>
  );
}

export default AppHeader;
