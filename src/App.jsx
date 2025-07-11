import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

import NavBar from './components/navbar';
import ImageCarousel from './components/Carousel';
import Services from './components/services';
import ContactForm from './components/contactform';
import Footer from './components/footer';

export default function App() {
  /* ---------- estados ---------- */
  const [showContact, setShowContact]        = useState(false);  // muestra u oculta formulario
  const [formSubmissions, setFormSubmissions] = useState([]);    // lista de envíos
  const [toast, setToast]                    = useState({        // controla toast
    show   : false,
    text   : '',
    bg     : 'success'
  });

  /* ---------- cargar envíos guardados al iniciar ---------- */
  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      setFormSubmissions(JSON.parse(stored));
    }
  }, []);

  /* ---------- guardar cada vez que cambien ---------- */
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formSubmissions));
  }, [formSubmissions]);

  /* ---------- recibir datos del ContactForm ---------- */
  const handleFormSubmit = (data) => {
    setFormSubmissions(prev => [...prev, data]);
    setToast({ show: true, text: '¡Tu mensaje ha sido enviado!', bg: 'success' });
  };

  /* ---------- borrar todos los envíos ---------- */
  const clearSubmissions = () => {
    setFormSubmissions([]);
    localStorage.removeItem('formData');
    setToast({ show: true, text: 'Mensajes eliminados', bg: 'danger' });
  };

  /* ---------- render ---------- */
  return (
    <>
      {/* ---------- NAV ---------- */}
      <NavBar
        onSectionChange={(section) => {
          if (section === 'contact') {
            setShowContact(true);
            setTimeout(() => {
              const el = document.getElementById('contacto');
              el && el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            setShowContact(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* ---------- CONTENIDO PRINCIPAL ---------- */}
      <ImageCarousel />
      <Services />

      {/* ---------- FORMULARIO DE CONTACTO ---------- */}
      {showContact && (
        <div id="contacto" style={{ padding: '40px 20px', background: '#f4f4f4' }}>
          <ContactForm onSubmit={handleFormSubmit} />

          {/* listado de envíos */}
          {formSubmissions.length > 0 && (
            <div className="mt-4">
              <h5>Mensajes recibidos:</h5>
              <ul>
                {formSubmissions.map((m, i) => (
                  <li key={i}>
                    <strong>{m.nombre}</strong> ({m.email}): {m.mensaje}
                  </li>
                ))}
              </ul>

              {/* botón borrar */}
              <button className="btn btn-danger mt-2" onClick={clearSubmissions}>
                Borrar todos los mensajes
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------- FOOTER ---------- */}
      <Footer />

      {/* ---------- TOAST ---------- */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast
          bg={toast.bg}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Macondo Envíos</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toast.text}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
