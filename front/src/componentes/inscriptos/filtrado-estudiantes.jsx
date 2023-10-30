import React from 'react';
import HeaderBd from '../HeaderBd/HeaderBd';


function FiltradoEstudiantes() {
  return (

    <>
      <HeaderBd />

      <section className="alumnos_bedelia container" id="estudiantes">
        <div className="container mt-5">
          <h3 className="titulo">Filtrar Estudiantes</h3>
          <br />
          <div className="form-group">
            <label htmlFor="carreraSelect">Selecciona el estudiante:</label>
            < hr />
            <select className="form-control" id="carreraSelect">
              <option value="">-- Selecciona un alumno --</option>
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="carreraSelect">Selecciona una Carrera:</label>
            < hr />
            <select className="form-control" id="carreraSelect">
              <option value="">-- Selecciona una carrera --</option>
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="materiaSelect">Selecciona una Materia:</label>
            <select className="form-control" id="materiaSelect">
              <option value="">-- Selecciona una materia --</option>
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>


          <div className="estudiantes">
            <h2>Estudiantes Inscritos:</h2>
            <p>Acá va el loop</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FiltradoEstudiantes;