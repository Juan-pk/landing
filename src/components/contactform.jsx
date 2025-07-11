import React, { useRef, useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ii8gka9',     // <- reemplaza
        'template_fqu6gb4',    // <- reemplaza
        formRef.current,
        'gv2FlOoH_UMlbHKSb'      // <- reemplaza
      )
      .then(() => {
        setEnviado(true);
        formRef.current.reset();
      })
      .catch(() => {
        setError(true);
      });

    setTimeout(() => {
      setEnviado(false);
      setError(false);
    }, 4000);
  };

  return (
    <Container className="my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Contáctanos</h2>

      {enviado && <Alert variant="success">Mensaje enviado correctamente.</Alert>}
      {error && <Alert variant="danger">Hubo un error al enviar. Intenta de nuevo.</Alert>}

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" name="mensaje" rows={4} required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
