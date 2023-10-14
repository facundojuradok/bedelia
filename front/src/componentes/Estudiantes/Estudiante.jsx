import React, { useState, useEffect, useRef } from 'react';
import { obtenerEstudiantes, eliminarEstudiante, crearEstudiante, editarEstudiante } from '../../services/estudiantes';
import HeaderBd from '../HeaderBd/HeaderBd';

function Estudiante() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEdicion, setIdEdicion] = useState(null);
  const formRef = useRef(null);

  const manejarEliminar = async (id) => {
    try {
      await eliminarEstudiante(id);
      const nuevosEstudiantes = estudiantes.filter((estudiante) => estudiante.idEstudiante !== id);
      setEstudiantes(nuevosEstudiantes);
    } catch (error) {
      console.error(error);
    }
  };

  const manejarCrearAlumno = async (e) => {
    e.preventDefault();

    const nuevoEstudiante = {
      nombre: formRef.current.nombre.value,
      apellido: formRef.current.apellido.value,
      dni: formRef.current.dni.value,
      celular: formRef.current.celular.value,
      fechaNacimiento: formRef.current.fechaNacimiento.value,
      nacionalidad: formRef.current.nacionalidad.value,
      correoElectronico: formRef.current.correoElectronico.value,
    };
  
    // Validar que el DNI no sea negativo
    if (nuevoEstudiante.dni < 0) {
      alert('El DNI no puede ser negativo.');
      return;
    }

    try {
      const data = await crearEstudiante(nuevoEstudiante);
      console.log(data);

      const estudiantesActualizados = await obtenerEstudiantes();
      setEstudiantes(estudiantesActualizados.dato);

      formRef.current.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditarEstudiante = async (e) => {
    e.preventDefault();
  
    if (idEdicion === null) {
      console.error('ID de estudiante no especificado para la edición.');
      return;
    }
  
    const estudianteEditado = {
      nombre: formRef.current.nombre.value,
      apellido: formRef.current.apellido.value,
      dni: formRef.current.dni.value.toString(),
      celular: formRef.current.celular.value,
      fechaNacimiento: formRef.current.fechaNacimiento.value,
      nacionalidad: formRef.current.nacionalidad.value,
      correoElectronico: formRef.current.correoElectronico.value,
    };
  
    try {
      await editarEstudiante(idEdicion, estudianteEditado);
      console.log('Estudiante actualizado con éxito.');
  
      const estudiantesActualizados = await obtenerEstudiantes();
      setEstudiantes(estudiantesActualizados.dato);
  
      formRef.current.reset();
      setModoEdicion(false);
      setIdEdicion(null);
    } catch (error) {
      console.error('Error al editar estudiante:', error);
    }
  };

  const manejarEditarEstudiante = (e, estudiante) => {
    setModoEdicion(true);
    setIdEdicion(estudiante.idEstudiante);
    formRef.current.nombre.value = estudiante.nombre;
    formRef.current.apellido.value = estudiante.apellido;
    formRef.current.dni.value = estudiante.dni;
    formRef.current.celular.value = estudiante.celular;

    const fechaNacimientoISO = new Date(estudiante.fechaNacimiento).toISOString().split('T')[0];
    formRef.current.fechaNacimiento.value = fechaNacimientoISO;

    formRef.current.nacionalidad.value = estudiante.nacionalidad;
    formRef.current.correoElectronico.value = estudiante.correoElectronico;
  };

  const busqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    const busqueda = estudiantes.filter((estudiante) => {
      const nombre = estudiante.nombre.toLowerCase();
      const apellido = estudiante.apellido.toLowerCase();
      const dni = estudiante.dni;
      return nombre.includes(texto) || apellido.includes(texto) || dni.toString().includes(texto);
    });

    setResultadosBusqueda(busqueda);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const estudiantesObtenidos = await obtenerEstudiantes();
        setEstudiantes(estudiantesObtenidos.dato);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderBd />

      <section className="alumnos_bedelia container" id="estudiantes">
        <div className="container" id="body">
          <br />
          <h2>Completa el formulario para agregar nuevos alumnos</h2>
          <br />
          <div className="form_alumnos">
            <form
              id="estudiantesForm"
              onSubmit={(e) => {
                if (modoEdicion) {
                  handleEditarEstudiante(e);
                } else {
                  manejarCrearAlumno(e);
                }
              }}
              ref={formRef}
            >
              <div className="form-group">
                <input type="text" id="inputNombre" className="form-control" placeholder="Nombre" name="nombre" />
                <input type="text" id="inputApellido" className="form-control" placeholder="Apellido" name="apellido" />
              </div>

              <div className="form-group">
                <input type="number" id="inputDni" className="form-control" placeholder="DNI" name="dni" />
                <input type="tel" id="inputCelular" className="form-control" placeholder="Celular" name="celular" />
                <input
                  type="date"
                  id="inputFecheNacimiento"
                  className="form-control"
                  placeholder="Fecha de nacimiento"
                  name="fechaNacimiento"
                />
              </div>

              <div className="form-group">
                <select
                  id="selectNacionalidad"
                  className="form-control"
                  placeholder="Seleccionar nacionalidad"
                  name="nacionalidad"
                >
                  <option value="">Seleccionar nacionalidad</option>
                  <option value="Argentino">Argentina</option>
                  <option value="Uruguayo">Uruguay</option>
                  <option value="Chileno">Chileno</option>
                  <option value="Paraguayo">Paraguayo</option>
                  <option value="Brasilero">Brasilero</option>
                  <option value="Boliviano">Boliviano</option>
                </select>
                <input type="email" id="inputMail" className="form-control" placeholder="Email" name="correoElectronico" />
              </div>

              <button type="submit" className="btn btn-primary" id="btnSubir">
                {' '}
                {modoEdicion ? 'Editar alumno' : 'Cargar alumno'}{' '}
              </button>
            </form>
          </div>
          <div className="input-group mt-4">
            <h2>Buscar alumnos</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar alumnos"
              id="buscarInput"
              aria-label="Buscar alumnos"
              aria-describedby="btnBuscar"
              onChange={busqueda}
            />
          </div>
        </div>

        <div className="tabla_estudiantes mt-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Fecha de nacimiento</th>
                <th>Nacionalidad</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="tablaEstudiantes">
              {(resultadosBusqueda.length > 0 ? resultadosBusqueda : estudiantes).map((estudiante) => (
                <tr key={estudiante.idEstudiante}>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.apellido}</td>
                  <td>{estudiante.dni}</td>
                  <td>{estudiante.fechaNacimiento && new Date(estudiante.fechaNacimiento).toLocaleDateString() || " "}</td>
                  <td>{estudiante.nacionalidad}</td>
                  <td>{estudiante.correoElectronico}</td>
                  <td>{estudiante.celular}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#fbbc05", marginLeft: "4px" }}
                      onClick={(e) => manejarEditarEstudiante(e, estudiante)}
                      disabled={modoEdicion}
                    >
                      Editar
                    </button>
                    <button
                      style={{ backgroundColor: "red", marginLeft: "4px" }}
                      onClick={() => manejarEliminar(estudiante.idEstudiante)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Estudiante;