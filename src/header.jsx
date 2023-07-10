import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function Header() {
  return (
    <Navbar style={{backgroundColor: '#3d8b95 !important',color:'white !important'}}  sticky='top' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link className='custom-nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='custom-nav-link' href="#about">About</Nav.Link>
            <Nav.Link className='custom-nav-link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
