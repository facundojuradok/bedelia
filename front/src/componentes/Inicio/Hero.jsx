import React from 'react';
import alumnos from '../../img/alumnos.png';


function Hero() {
  return (
    <main className="hero">
      <div className="hero_content__text">
        <h1>Descubrí tu vocación</h1>
        <p>Carreras presenciales y a distancia</p>
      </div>
      <div className="hero_content__img">
        <img src={alumnos} alt="Alumnos Uner" />
      </div>
    </main>
  );
}

export default Hero;
