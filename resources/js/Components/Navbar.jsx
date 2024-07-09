import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#suggested">
              <FaUser /> Credenciales Sugeridas
            </Nav.Link>
            <Nav.Link href="#login">
              <FaSignInAlt /> Iniciar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
