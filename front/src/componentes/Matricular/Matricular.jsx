import React from 'react';
import HeaderBd from '../HeaderBd/HeaderBd';

function Matricular() {
    return (
        <>
            <HeaderBd />
            <section className="alumnos_bedelia container">
                <div>
                    <div>
                        <h2>Selecciona un estudiante:</h2>
                        <select>
                            <option value="">Selecciona un estudiante</option>
                            <option value="">Fulanito de tal</option>
                            <option value="">Juan pindonga</option>
                        </select>
                    </div>
                    <h2>Selecciona una carrera y sus materias:</h2>
                    <div className='matricular_container'>
                        
                        <div>
                            <h3>Carreras:</h3>
                            <label>
                                <input type="checkbox" value="Lic. en sistemas y programación" /> Lic. en sistemas y programación
                            </label>
                        </div>
                        <div>
                            <h3>Materias:</h3>
                            <label className='matricular-label'>
                                <input type="checkbox" value="Matematica 1" /> Matematica 1
                            </label>
                            <label className='matricular-label'>
                                <input type="checkbox" value="Programación 1" /> Programación 1
                            </label>
                            <label className='matricular-label'>
                                <input type="checkbox" value="Programación 2" /> Programación 2
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Matricular;
