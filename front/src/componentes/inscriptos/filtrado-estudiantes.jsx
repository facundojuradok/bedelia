import React, { useEffect, useState } from "react"
import HeaderBd from "../HeaderBd/HeaderBd"
import { obtenerEstudiantes } from "../../services/estudiantes"
import { obtenerCarreras } from "../../services/carreras"
import { obtenerMaterias } from "../../services/materias"
import { filtradoPorEstudiante } from "../../services/filtrado"

function FiltradoEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([])
  const [carreras, setCarreras] = useState([])
  const [materias, setMaterias] = useState([])
  const [datosEstudiante, setDatosEstudiante] = useState({})

  const filtradoPorEstudiantes = async (e) => {
    const idEstudiante = e.target.value
    const { carreras, materias } = await filtradoPorEstudiante(idEstudiante)

    const nombreEstudiante = estudiantes.find(
      (estudiante) => estudiante.idEstudiante == idEstudiante
    )

    const nombresCarreras = carreras.carreras
      .map((carrera) => carrera)
      .map((carrera) => carrera.nombreCarrera)

    const nombresMaterias = materias.materias
      .map((materia) => materia)
      .map((materia) => materia.nombreMateria)

    setDatosEstudiante({
      nombreEstudiante,
      nombresCarreras,
      nombresMaterias,
    })
  }

  useEffect(() => {
    async function getData() {
      const { dato: estudiantes } = await obtenerEstudiantes()
      setEstudiantes(estudiantes)

      const carreras = await obtenerCarreras()
      setCarreras(carreras)

      const { dato } = await obtenerMaterias()
      setMaterias(dato)
    }
    getData()
  }, [])

  return (
    <>
      <HeaderBd />

      <section className="alumnos_bedelia container" id="estudiantes">
        <div className="container mt-5">
          <h3 className="titulo">Filtrar Estudiantes</h3>
          <br />
          <div className="form-group">
            <label htmlFor="carreraSelect">Selecciona el estudiante:</label>
            <hr />
            <select
              className="form-control"
              id="carreraSelect"
              onChange={filtradoPorEstudiantes}
            >
              <option value="" disabled selected>
                -- Selecciona un alumno --
              </option>
              {estudiantes.length > 0 &&
                estudiantes.map((estudiante) => (
                  <option
                    key={estudiante.idEstudiante}
                    value={estudiante.idEstudiante}
                  >
                    {estudiante.nombre} {estudiante.apellido}
                  </option>
                ))}
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="carreraSelect">Selecciona una Carrera:</label>
            <hr />
            <select className="form-control" id="carreraSelect">
              <option value="" selected disabled>
                -- Selecciona una carrera --
              </option>
              {carreras.length > 0 &&
                carreras.map((carrera) => (
                  <option key={carrera._id} value={carrera._id}>
                    {carrera.nombre}
                  </option>
                ))}
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="materiaSelect">Selecciona una Materia:</label>
            <select className="form-control" id="materiaSelect">
              <option value="" disabled selected>
                -- Selecciona una materia --
              </option>
              {materias.length > 0 &&
                materias.map((materia) => (
                  <option key={materia._id} value={materia._id}>
                    {materia.nombre}
                  </option>
                ))}
            </select>
            <button type="button" className="btn btn-primary filtrar-btn">
              Filtrar Estudiantes
            </button>
          </div>

          <div className="estudiantes">
            <h2>Estudiantes Inscritos:</h2>
            {datosEstudiante.nombreEstudiante && (
              <div>
                <h3>
                  Nombre: {datosEstudiante.nombreEstudiante.nombre}{" "}
                  {datosEstudiante.nombreEstudiante.apellido}
                </h3>
                <h3>
                  Carreras:{" "}
                  {datosEstudiante.nombresCarreras.map((carrera) => (
                    <p>{carrera}</p>
                  ))}
                </h3>
                <h3>
                  Materias:{" "}
                  {datosEstudiante.nombresMaterias.map((materia) => (
                    <p>{materia}</p>
                  ))}
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default FiltradoEstudiantes
