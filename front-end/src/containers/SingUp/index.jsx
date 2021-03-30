import React from 'react';
import Layouts from '../../components/Layouts';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Input from '../../components/UI/Input';

SignUp.propTypes = {

};

function SignUp(props) {
  return (
    <Layouts>
      <Container>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="Tên"
                    placeholder="Tên"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Họ"
                    placeholder="Họ"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
              </Row>
              <Input
                label="ID"
                placeholder="ID"
                value=""
                type="text"
                onChange={() => { }}
              />
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="text"
                onChange={() => { }}
              />
              <Input
                label="Mật khẩu"
                placeholder="Mật khẩu"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Submit
                    </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layouts>
  );
}

export default SignUp;