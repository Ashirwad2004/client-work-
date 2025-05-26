import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (

    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="shadow-sm">
    <Container>
      <BootstrapNavbar.Brand href="#home">Magnetto</BootstrapNavbar.Brand>
    </Container>
  </BootstrapNavbar>
  )
};

export default Navbar;
