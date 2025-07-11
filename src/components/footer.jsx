import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'; // o logo-footer.png si usas uno diferente

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <img
              src={logo}
              alt="Logo Macondo"
              style={{ height: '60px' }}
            />
          </Col>

          <Col md={4}>
            <h5 className="mb-2">Macondo Envíos</h5>
            <p className="mb-0">Tu puente entre Estados Unidos y Colombia.</p>
          </Col>

          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: macondoenvios@outlook.com</p>
            <p>Tel: +57 300 123 4567</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaInstagram />
              </a>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaWhatsapp />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="mt-4" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Macondo Envíos</p>
      </Container>
    </footer>
  );
}
