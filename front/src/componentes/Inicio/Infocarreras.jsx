import React from 'react';
import contadorPublico from '../../img/contador.jpg';
import desarrolloWeb from '../../img/web.jpg';
import profPortugues from '../../img/portugues.jpg';
import turismo from '../../img/turismo.jpg';


function Infocarreras() {
  return (
    <section className="informacion_carreras">
      <h2>OFERTA ACADÉMICA</h2>
      <div className="bloque_carreras container">
         {/* Primer carrera */}
         <div className="informacion_carreras__bloque">
            <img src={contadorPublico} alt="Contador Público" />
            <div className="informacion_carreras__texto">
               <h3>CONTADOR PÚBLICO</h3>
               <br />
               <p>Duración 5 años.</p>
               <p>El graduado puede asesorar y controlar organizaciones públicas o privadas en temas contables, financieros y tributarios.</p>
            </div>
         </div>
         {/* Segunda carrera */}
         <div className="informacion_carreras__bloque">
            <img src={desarrolloWeb} alt="Contador Público" />
            <div className="informacion_carreras__texto">
               <h3>TEC. EN DESARROLLO WEB</h3>
               <br />
               <p>Duración 3 años.</p>
               <p>Carrera virtual, corta y con salida laboral. Aprendé a programar aplicaciones web con tecnologías innovadoras.</p>
            </div>
         </div>
         {/* Tercer carrera */}
         <div className="informacion_carreras__bloque">
            <img src={profPortugues} alt="Contador Público" />
            <div className="informacion_carreras__texto">
               <h3>PROFESORADO EN PORTUGUÉS</h3>
               <br />
               <p>Duración 4 años.</p>
               <p>Enseñá portugués con conocimientos disciplinares y pedagógicos. Sumate a acciones educativas y culturales.</p>
            </div>
         </div>
         {/* Cuarta carrera */}
         <div className="informacion_carreras__bloque">
            <img src={turismo} alt="Contador Público" />
            <div className="informacion_carreras__texto">
               <h3>LIC. EN TURISMO</h3>
               <br />
               <p>Duración 4 años.</p>
               <p>Aprendé a investigar, planificar, gestionar y promover el turismo sustentable.</p>
            </div>
         </div>
      </div>
   </section>
  );
}

export default Infocarreras;
