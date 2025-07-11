import React, { useEffect, useState } from 'react';
import servicesData from '../data/services.json'; // Asegúrate de tener este archivo con los datos de servicios
import { Accordion, Container } from 'react-bootstrap';

export default function Services() {

  // (opcional) estado para controlar cual item esta abierto
  const [activeKey, setActiveKey] = useState(null);

  return (
    <Container id="servicios" className="my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>


      <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        {servicesData.map((servicio, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={servicio.id}>
            <Accordion.Header>{servicio.nombre}</Accordion.Header>
            <Accordion.Body>{servicio.descripcion}</Accordion.Body>
          </Accordion.Item> 
        ))}
      </Accordion>
    </Container>
  );
}
