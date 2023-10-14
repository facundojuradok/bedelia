import React from 'react';
import HeaderBd from '../HeaderBd/HeaderBd';

function Matricular() {
    return (
        <>
        <HeaderBd />
        <section className="alumnos_bedelia container">
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Inscripcion Estudiantes a Materias</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="buscador"
                                className="form-control"
                                placeholder="Buscar estudiante"
                            />
                        </div>
                        <ul id="resultadoBusqueda" className="list-unstyled"></ul>

                        <div id="divCarreras" style={{ display: 'none' }}>
                            <label htmlFor="selectCarreras">Seleccionar Carrera:</label>
                            <select id="selectCarreras" className="form-control"></select>
                        </div>

                        <div id="materiasCarrera" style={{ display: 'none' }}></div>

                        <button id="inscribirBtn" className="btn btn-primary mt-3"> Inscribir Estudiantes </button>

                        <div id="errorEstudiantes" className="mt-3" style={{ display: 'none', color: 'red' }}>Por favor, seleccione un estudiante para continuar.</div>

                        <div id="errorMaterias" className="mt-3" style={{ display: 'none', color: 'red' }}>Por favor, seleccione una materia para continuar.</div>

                        <div id="inscripcionInfo" className="mt-3"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Matricular;
