import React, { useState } from 'react';
import logo from '../../img/logo-uner.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

function Registro() {
  const {registrar} = useUser();
  const [values, setValues] = useState({
    correoElectronico: '',  
    nombre: '',
    apellido: '',
    clave: '',
  })
  const navegar = useNavigate();
  const manejarSubmit = (e) => {
    e.preventDefault();
    registrar(values);
    
  }
  

  return (
    <div className="registro-container">
      <div className="logo-login">
        <img src={logo} alt="Logo Uner" />
      </div>
      <div className="registro-box">
        <h2>Registro</h2>
        <form onSubmit={manejarSubmit}>
          <div className="input-container">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
            onChange={e => setValues({...values, correoElectronico: e.target.value})}
              type="email"
              id="email"
              name="correoElectronico"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="nombre">Nombre:</label>
            <input
            onChange={e => setValues({...values, nombre: e.target.value})}
              type="text"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="apellido">Apellido:</label>
            <input
            onChange={e => setValues({...values, apellido: e.target.value})}
              type="text"
              id="apellido"
              name="apellido"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña:</label>
            <input
            onChange={e => setValues({...values, clave: e.target.value})}
              type="password"
              id="password"
              name="clave"
              required
            />
          </div>
          <div className="input-container">
            <button type="submit" name="submit-button">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
