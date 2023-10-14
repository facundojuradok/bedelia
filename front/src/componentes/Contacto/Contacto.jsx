import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import './contacto.css';



const Contacto = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellido: '',
    asunto: '',
    correo: '',
    teléfono: '',
    mensaje: ''
  });

  const actualizarDatos = (e) => {
    const { nombre, value } = e.target;
    setDatosFormulario((prevData) =>  ({ ...prevData, [nombre]: value }));
  };

  const enviarForm = (e) => {
    e.preventDefault();
    const contenidoFormateado = Object.entries(datosFormulario)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');

    alert(contenidoFormateado);
  };
   // Mapa
  const mapRef = useRef(null);
  const mapInitialized = useRef(false);

  useEffect(() => {
    if (!mapInitialized.current && mapRef.current) {
      

      let map = L.map(mapRef.current).setView([-31.38204, -58.02264], 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-31.38204, -58.02264]).addTo(map);

      mapInitialized.current = true;

      const resizeMap = () => {
        map.invalidateSize();
      };

      window.addEventListener('resize', resizeMap);


      return () => {
        window.removeEventListener('resize', resizeMap);
      };
    }
  }, []);

  return (
    
    <div className="contactanos container">
      {/* Formulario de contacto */}
      <div className="form">
        <form id="contactForm" onSubmit={enviarForm}>
          <input type="text" name="nombre" required placeholder="Nombre" onChange={actualizarDatos} />
          <input type="text" name="apellido" required placeholder="Apellido" onChange={actualizarDatos} />
          <input type="text" name="asunto" required placeholder="Asunto" onChange={actualizarDatos} />
          <input type="email" name="correo" required placeholder="Tu correo" onChange={actualizarDatos} />
          <input type="tel" name="teléfono" required placeholder="Tu Teléfono" onChange={actualizarDatos} />
          <textarea name="mensaje" required placeholder="Mensaje" onChange={actualizarDatos}></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {/* Contenedor del mapa */}
      <div className="map-container" ref={mapRef}></div>
    </div>
  );
};



export default Contacto;