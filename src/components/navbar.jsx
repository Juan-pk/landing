import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './navbar.css';

export default function NavBar({ onSectionChange }) {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange('home');
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSectionChange('home');
              }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSectionChange('contact');
              }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
