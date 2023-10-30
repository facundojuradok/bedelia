import React, { useEffect, useState } from 'react';
import HeaderBd from '../HeaderBd/HeaderBd';
import { obtenerEstudiantes } from '../../services/estudiantes';
import { obtenerCarreras } from '../../services/carreras';
import { obtenerMateriasDeCarrera } from '../../services/carreraMateria';

function Matricular() {

    const [estudiantes, setEstudiantes] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        async function getData() {
            const { dato: estudiantes } = await obtenerEstudiantes();
            setEstudiantes(estudiantes);

            const carreras = await obtenerCarreras();
            setCarreras(carreras);

            const materias  = await obtenerMateriasDeCarrera("1");
            setMaterias(materias);

        }
        getData()
    }, []);


    return (
        <>
            <HeaderBd />
            <section className="alumnos_bedelia container">
                <h1>Matricular un estudiante</h1>
                <h2>Seleccioná el alumno, la carrera y materias</h2>
                <div className="matricular-carrera">

                    <div className="select-alumno">
                        <label htmlFor="alumno">Alumno: </label>
                        <select name="alumno" id="alumno" value="">
                            <option value="" disabled>Seleccioná un estudiante</option>
                            {estudiantes.length > 0 && estudiantes.map((estudiante) => (
                                <option key={estudiante.idEstudiante} value={estudiante.idEstudiante}>
                                    {estudiante.nombre} {estudiante.apellido}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="select-carrera">
                        <label htmlFor="carrera">Carrera: </label>
                        <select className="form-control" name="carrera" id="carrera">
                        <option value="" disabled>Seleccioná una Carrera</option>
                            {carreras.length > 0 && carreras.map((carrera) => (
                                <option key={carrera.idCarrera} value={carrera.idCarrera}>
                                    {carrera.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="checkbox-materias">
                    <div class="control-group">


                        {
                            materias.length > 0 && materias.map((materia) => (
                                <label class="control control-checkbox">
                                    {materia.nombre}
                                    <input type="checkbox" />
                                    <div class="control_indicator"></div>
                                </label>
                            ))
                        }

                    </div>
                </div>
                <button>Inscribir alumno</button>
            </section>
        </>
    );
}

export default Matricular;

