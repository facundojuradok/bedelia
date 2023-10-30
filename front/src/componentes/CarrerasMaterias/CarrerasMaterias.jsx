import React, { useState, useEffect, useRef } from "react"
import {
  obtenerCarreras,
  crearCarrera,
  eliminarCarrera,
  editarCarrera,
} from "../../services/carreras"
import HeaderBedelia from "../HeaderBd/HeaderBd"
import { obtenerMaterias } from "../../services/materias"
import { obtenerMateriasDeCarrera, asignarMateriaACarrera } from "../../services/carreraMateria"


function CarreraMateria() {
  const [carreras, setCarreras] = useState([])
  const [materias, setMaterias] = useState([])
  const [estaEditando, setEstaEditando] = useState({})
  const formRef = useRef(null)

  const agregarMateriaCarrera = async (e) => {
    e.preventDefault();

    const idMateria = e.target.nombreMateria.value;
    const idCarrera = e.target.carreraPerteneciente.value;

    try {
      await asignarMateriaACarrera(idMateria, idCarrera);
      console.log("Materia asignada");

      obtenerCarreras().then(async (carreras) => {
        setCarreras(carreras);
      });
    } catch (error) {
      console.error(error);
    }
  };


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

    setEstaEditando({
      status: true,
      id: carrera.idCarrera,
    })
    formRef.current.nombre.value = carrera.nombre
  }


  useEffect(() => {
    // Obtener carreras
    obtenerCarreras().then(async (carreras) => {
      setCarreras(carreras)
    })

    obtenerMaterias().then((res) => {
      const { dato: materias } = res
      setMaterias(materias)
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
                  placeholder="Nombre de la materia"
                />

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

          <div className="mt-4">
            <h2>Asignar materias a carreras</h2>
            <form id="materiaForm" onSubmit={agregarMateriaCarrera}>
              <div className="form-group">
                <select name="nombreMateria" id="nombreMateria">
                  <option value="" disabled selected />
                  {
                    materias.map((materia) => (
                      <option key={materia.idMateria} value={materia.idMateria}>
                        {materia.nombre}
                      </option>
                    ))}
                </select>
                <label htmlFor="carreraPerteneciente">
                  Seleccione la Carrera:
                </label>
                <select
                  className="form-control"
                  id="carreraPerteneciente"
                  name="carreraPerteneciente"
                  required
                >
                  {carreras.map((carrera) => (
                    <option key={carrera.idCarrera} value={carrera.idCarrera}>
                      {carrera.nombre}
                    </option>
                  ))}
                </select>
              </div>


              <button type="submit" className="btn btn-primary">
                Guardar Cambios
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
                    {carrera.materias && Array.isArray(carrera.materias) && carrera.materias.length > 0 ?
                      carrera.materias.map((materia) => (
                        <li key={materia.idMateria}>{materia}</li>
                      )) : (<p>No hay materias asignadas</p>)}


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