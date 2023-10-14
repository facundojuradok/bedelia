import React from 'react';
import HeaderBd from '../HeaderBd/HeaderBd';


function FiltradoEstudiantes() {
  return (

    <>
      <HeaderBd />

      <section className="alumnos_bedelia container" id="estudiantes">
        <div className="container mt-5">
          <h3 className="titulo">Filtrar Estudiantes por Materia</h3>
          <br />
          <div className="form-group">
            <label htmlFor="carreraSelect">Selecciona una Carrera:</label>
            < hr />
            <select className="form-control" id="carreraSelect">
              <option value="">-- Selecciona una carrera --</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="materiaSelect">Selecciona una Materia:</label>
            <select className="form-control" id="materiaSelect">
              <option value="">-- Selecciona una materia --</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary filtrar-btn">
            Filtrar Estudiantes
          </button>
          <hr className="separador" />
          <h5>Estudiantes Inscritos:</h5>
          <p id="totalEstudiantes"></p>
          <ul id="resultadoEstudiantes"></ul>
        </div>
      </section>
    </>
  );
}

export default FiltradoEstudiantes;