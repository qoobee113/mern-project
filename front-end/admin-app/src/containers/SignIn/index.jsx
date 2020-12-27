import React from 'react';
import PropTypes from 'prop-types';
import Layouts from '../../components/Layouts';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';

SingIn.propTypes = {

};

function SingIn(props) {
  return (
    <Layouts>
      <Container>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="ID"
                placeholder="ID"
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

export default SingIn;