import React, { useEffect, useState } from "react"
import HeaderBd from "../HeaderBd/HeaderBd"
import { obtenerEstudiantes } from "../../services/estudiantes"
import { obtenerCarreras } from "../../services/carreras"
import { obtenerMateriasDeCarrera } from "../../services/carreraMateria"
import { matricularEstudiante } from "../../services/matricular"
import { obtenerMaterias } from "../../services/materias"

function Matricular() {
  const [estudiantes, setEstudiantes] = useState([])
  const [carreras, setCarreras] = useState([])
  const [materias, setMaterias] = useState([])

  const manejarCambioCarrera = async (e) => {
    const idCarrera = e.target.value
    const { dato } = await obtenerMaterias()
    setMaterias(dato)
    // setMaterias(dato[0]?.materias || [])
    // console.log(dato[0]?.materias || [])
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()
    const datos = new FormData(e.target)
    const estudiante = datos.get("alumno")
    const carrera = datos.get("carrera")
    const materias = datos.getAll("materias")

    const datosMatricula = {
      estudiante,
      carrera,
      materias,
    }

    const matricula = await matricularEstudiante(datosMatricula)

    e.target.reset()
  }

  useEffect(() => {
    async function getData() {
      const { dato: estudiantes } = await obtenerEstudiantes()
      setEstudiantes(estudiantes)

      const carreras = await obtenerCarreras()
      setCarreras(carreras)
    }
    getData()
  }, [])

  return (
    <>
      <HeaderBd />
      <section className="alumnos_bedelia container">
        <h1>Matricular un estudiante</h1>
        <h2>Seleccioná el alumno, la carrera y materias</h2>
        <form onSubmit={manejarSubmit}>
          <div className="matricular-carrera">
            <div className="select-alumno">
              <label htmlFor="alumno">Alumno: </label>
              <select name="alumno" id="alumno">
                <option value="" disabled selected>
                  Seleccioná un estudiante
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
            </div>
            <div className="select-carrera">
              <label htmlFor="carrera">Carrera: </label>
              <select
                className="form-control"
                name="carrera"
                id="carrera"
                onChange={manejarCambioCarrera}
              >
                <option value="" disabled selected>
                  Seleccioná una Carrera
                </option>
                {carreras.length > 0 &&
                  carreras.map((carrera) => (
                    <option key={carrera.idCarrera} value={carrera.idCarrera}>
                      {carrera.nombre}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="checkbox-materias">
            <div class="control-group">
              {materias &&
                materias.length > 0 &&
                materias.map((materia) => (
                  <label
                    class="control control-checkbox"
                    key={materia.idMateria}
                  >
                    {materia.nombre}
                    <input
                      type="checkbox"
                      name="materias"
                      value={materia.idMateria}
                    />
                    <div class="control_indicator"></div>
                  </label>
                ))}
            </div>
          </div>
          <button>Inscribir alumno</button>
        </form>
      </section>
    </>
  )
}

export default Matricular
