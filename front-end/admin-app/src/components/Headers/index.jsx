import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

Headers.propTypes = {

};

function Headers(props) {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Admin DashBoard</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">Admin DashBoard</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link"> Đăng nhập</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link"> Đăng ký</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;