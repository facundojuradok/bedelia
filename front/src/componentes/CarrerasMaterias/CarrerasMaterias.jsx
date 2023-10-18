import React, { useState, useEffect, useRef } from "react"
import {
  obtenerCarreras,
  crearCarrera,
  eliminarCarrera,
  editarCarrera,
} from "../../services/carreras"
import { obtenerMaterias } from "../../services/materias"
import HeaderBedelia from "../HeaderBd/HeaderBd"


function CarreraMateria() {
  const [carreras, setCarreras] = useState([])
  const [materias, setMaterias] = useState([])
  const [estaEditando, setEstaEditando] = useState({})
  const formRef = useRef(null)

  const agregarCarrera = async (e) => {
    e.preventDefault()

    const nuevaCarrera = {
      nombre: e.target.nombre.value,
      modadlida: e.target.modadlida.value,
    }

    try {
      const data = await crearCarrera(nuevaCarrera)
      const carreras = await obtenerCarreras()
      setCarreras(carreras.dato)
    } catch (error) {
      console.error(error)
    }
    document.getElementById("carreraForm").reset()
  }

  const handleeliminarCarrera = (id) => {
    eliminarCarrera(id)
      .then((res) => {
        const nuevasCarreras = carreras.filter(
          (carrera) => carrera.idCarrera !== id
        )
        setCarreras(nuevasCarreras)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleeditarCarrera = async (e) => {
    if (!estaEditando.status) {
      return
    }

    e.preventDefault()

    const carreraEditada = {
      nombre: formRef.current.nombre.value,
      modadlida: formRef.current.modadlida.value,
    }

    try {
      await editarCarrera(estaEditando.id, carreraEditada)
      const carreras = await obtenerCarreras()
      setCarreras(carreras.dato)

      formRef.current.reset()
      setEstaEditando({})
    } catch (error) {
      console.error(error)
    }
  }

  const manejarEditar = async (e, carrera) => {
    console.log("Click al boton editar")
    console.log("Ejecutamos la funcion manejarEditar")
    console.log("Nos llega por paramtros la carrera a editar")
    console.log("Seteamos el estado de estaEditando con la carrera a editar")
    console.log(
      "Seteamos el valor del input con el nombre de la carrera usando la referencia al formulario con el hook useRef"
    )
    setEstaEditando({
      status: true,
      id: carrera.idCarrera,
    })
    formRef.current.nombre.value = carrera.nombre
  }

  useEffect(() => {
    // Obtener carreras
    obtenerCarreras().then((carrerasObtenidas) => {
      console.log(carrerasObtenidas)
      setCarreras(carrerasObtenidas.dato)
    })

    // Obtener materias
    obtenerMaterias().then((materiasObtenidas) => {
      console.log(materiasObtenidas)
      setMaterias(materiasObtenidas.dato)
    })
  }, [])

  return (
    <>
      <HeaderBedelia />
      <section className="alumnos_bedelia container">
        <div className="container">
          <h1>Registrar Carreras y Materias</h1>
          {/* Formulario Carreras*/}
          <div className="mt-4">
            <h2>Formulario de Carreras</h2>
            <form
              id="carreraForm"
              onSubmit={(e) => {
                if (estaEditando.status) {
                  handleeditarCarrera(e)
                } else {
                  agregarCarrera(e)
                }
              }}
              ref={formRef}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la carrera"
                  name="nombre"
                  required
                />
                <select
                  className="form-control"
                  id="descripcion"
                  name="modadlida"
                  required
                >
                  <option value="" disabled selected>
                    Elegí la modalidad
                  </option>
                  <option value="1">Presencial</option>
                  <option value="2">Virtual</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar Carrera
              </button>
            </form>
            &nbsp;
          </div>

          <div className="mt-4">
            <h2>Formulario de Materias</h2>
            <form id="materiaForm">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  required
                />
                <label htmlFor="carreraPerteneciente">
                  Seleccione la Carrera:
                </label>
                <select
                  className="form-control"
                  id="carreraPerteneciente"
                  required
                >
                  {carreras.map((carrera) => (
                    <option key={carrera.idCarrera} value={carrera.idCarrera}>
                      {carrera.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Horas semanales"
                  name="horasSemanales"
                  required
                />
                <select
                  className="form-control"
                  id="descripcion"
                  name="tipoMateria"
                  required
                >
                  <option value="" disabled selected>
                    Elegí la modalidad
                  </option>
                  <option value="1">Cuatrimestral</option>
                  <option value="2">Anual</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Guardar Materia
              </button>
            </form>
          </div>

          <div>
            <h1>Carreras y Materias</h1>

            {/* Acá imprimimos materias y carreras */}

            <div className="carreras-obtenidas">
              {carreras.map((carrera) => (
                <div className="carreras-bedel" key={carrera.idCarrera}>
                  <div className="carreras-loop">
                    <div className="carreras-loop-data">
                      <h2 className="titulo-carrera">{carrera.nombre}</h2>
                      <p>
                        <span>Modalidad:</span> {carrera.modalidad}
                      </p>
                    </div>
                    <div className="carreras-loop-acciones">
                      <button
                        style={{ backgroundColor: "blue", marginLeft: "4px" }}
                        onClick={(e) => manejarEditar(e, carrera)}
                      >
                        Editar
                      </button>
                      <button
                        style={{ backgroundColor: "red", margin: "4px" }}
                        onClick={() => {
                          handleeliminarCarrera(carrera.idCarrera)
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <h4 className="materias-titulo">
                    Materias de {carrera.nombre}
                  </h4>
                  <ul>
                    {materias.map((materia) => (
                      <li key={materia.idMateria}> - {materia.nombre}</li>
                    ))}
                  </ul>
                  <br />
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarreraMateria