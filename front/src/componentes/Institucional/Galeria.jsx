import React from 'react';
import aula from '../../img/facultad-imagenes/aula.jfif';
import laboratorio from '../../img/facultad-imagenes/aula_informatica.jfif';
import magna from '../../img/facultad-imagenes/aula_magna.jfif';
import comedor from '../../img/facultad-imagenes/comedor.jfif';
import pasillo from '../../img/facultad-imagenes/pasillo.jfif';
import conferencia from '../../img/facultad-imagenes/sala_conferencias.jfif';
import gimnasio from '../../img/facultad-imagenes/gimnasio.jfif';
import cancha from '../../img/facultad-imagenes/cancha_futbol.jfif';
import entrada from '../../img/facultad-imagenes/entrada.jfif';

function Galeria() {
    return (
        <section className="galeria_box">
            <h2 className="nuestra_facultad">CONOCÉ LA UNER</h2>
            <div className="galeria">
                <div className="contenedor-imagenes">
                    <div className="imagen">
                        <img src={aula} alt="aula_facultad" />
                        <div className="overlay">
                            <h2>Aula</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={laboratorio} alt="laboratorio_informatico" />
                        <div className="overlay">
                            <h2>Laboratorio Informatica</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={magna} alt="aula_magna" />
                        <div className="overlay">
                            <h2>Aula Magna</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={comedor} alt="comedor_facultad" />
                        <div className="overlay">
                            <h2>Comedor Universitario</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={pasillo} alt="pasillo_facultad" />
                        <div className="overlay">
                            <h2>Pasillo</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={conferencia} alt="sala_conferencias_facultad" />
                        <div className="overlay">
                            <h2>Sala de Conferencias</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={gimnasio} alt="gimnasio_facultad" />
                        <div className="overlay">
                            <h2>Gimnasio</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={cancha} alt="cancha_futbol" />
                        <div className="overlay">
                            <h2>Cancha de Futbol</h2>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={entrada} alt="entrada_facultad" />
                        <div className="overlay">
                            <h2>Entrada</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Galeria;
