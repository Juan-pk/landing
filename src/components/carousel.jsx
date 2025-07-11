import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/banner1.jpeg';
import img2 from '../assets/banner2.jpeg';
import img3 from '../assets/banner3.jpeg';
import '../components/carousel.css'; // Asegúrate de tener este archivo para estilos personalizados

const imagenes = [
  {
    src: img1,
    alt: 'Atención Personalizada',
    caption: ''
  },
  {
    src: img2,
    alt: 'Envíos Aéreos',
    caption: ''
  },
  {
    src: img3,
    alt: 'envíos Marítimos',
    caption: ''
  }
];

export default function ImageCarousel() {
  return (
    <Carousel fade interval={3000} pause={false}>
      {imagenes.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={img.src}
            alt={img.alt}
          />
          <Carousel.Caption>
            <h3>{img.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
// reinicie el equipo