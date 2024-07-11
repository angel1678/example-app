// resources/js/Components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

const TopNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img
          src="/path/to/logo.png"
          height="30"
          className="d-inline-block align-top"
          alt="Accredible logo"
        /> Credential.net
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Credenciales sugeridas</Nav.Link>
          <Nav.Link href="#">
            <FaUser /> Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavbar;