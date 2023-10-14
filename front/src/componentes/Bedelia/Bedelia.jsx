import React, { useEffect, useState } from 'react';
import HeaderBd from "../HeaderBd/HeaderBd";
import { Link } from 'react-router-dom';
import estudiantes from '../../img/bedelia/alumnos.jpg';
import carreras from '../../img/bedelia/estudiante-libro.jpeg';
import inscripcion from '../../img/bedelia/inscripciones.jpeg';


function Bedelia() {


    return (
        <div>
            <HeaderBd />
            <section className="alumnos_bedelia container" id="estudiantes">
                <div className="card-container">
                    <div className="card">
                        <img src={estudiantes} className="card-img-top" alt="Imagen de Alumnos" />
                        <div className="card-body">
                            <h5 className="card-title">Alumnos</h5>
                            <p className="card-text">Aquí puedes encontrar información sobre los alumnos inscritos en el sistema.</p>
                            <Link to="/estudiante" className="btn btn-primary">Ver Alumnos</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={carreras} className="card-img-top" alt="Imagen de Carreras y Materias" />
                        <div className="card-body">
                            <h5 className="card-title">Carreras y Materias</h5>
                            <p className="card-text">Administra las diferentes carreras y sus respectivas materias disponibles en la institución.</p>
                            <Link to="/carreramateria" className="btn btn-primary">Ver Carreras y Materias</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={inscripcion} className="card-img-top" alt="Imagen de Inscripciones" />
                        <div className="card-body">
                            <h5 className="card-title">Inscripciones</h5>
                            <p className="card-text">Realiza la inscripción de alumnos.</p>
                            <Link to="/matricular" className="btn btn-primary">Inscribir</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./img/bedelia/mensajes.jpg" className="card-img-top" alt="Imagen de Mensajes" />
                        <div className="card-body">
                            <h5 className="card-title">Mensajes</h5>
                            <p className="card-text">Lee los mensajes de la página de contacto.</p>
                            <Link to="mensajes.html" className="btn btn-primary">Ver Mensajes</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Bedelia;
