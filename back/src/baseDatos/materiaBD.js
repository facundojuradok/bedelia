const conexion = require("./conexionBD")

const buscarMateriaPorId = async (idMateria) => {
  const consulta = `
        SELECT idMateria, horasSemanales, nombre, tipoMateria
        FROM materia
        WHERE idMateria = ?`

  const [materia] = await conexion.query(consulta, idMateria)
  return materia
}

const buscarTodasMaterias = async () => {
  const consulta = `
        SELECT idMateria, horasSemanales, nombre, tipoMateria
        FROM materia`

  const [materias] = await conexion.query(consulta)
  return materias
}

const eliminarMateria = async (idMateria) => {
  const consulta = `UPDATE materia SET activo = 0 WHERE idMateria = ?`
  const [materia] = await conexion.query(consulta, [idMateria])
  return materia
}

const actualizarMateria = async (idMateria, datosActualizados) => {
  const { horasSemanales, nombre, tipoMateria } = datosActualizados

  const consulta = `
        UPDATE materia
        SET
            horasSemanales = ?,
            nombre = ?,
            tipoMateria = ?
        WHERE idMateria = ?
    `

  const [resultado] = await conexion.query(consulta, [
    horasSemanales,
    nombre,
    tipoMateria,
    idMateria,
  ])

  return resultado
}

const nuevaMateria = async (materia) => {
  const consulta = "INSERT INTO materia SET ?"
  const [materiaNueva] = await conexion.query(consulta, materia)
  return materiaNueva
}

const obtenerEstudiantesMateria = async (idMateria) => {
  const consulta = `
        SELECT idEstudiante, dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto
        FROM estudiante
        WHERE activo = 1 AND idEstudiante IN (
            SELECT estudiante FROM estudiantemateria WHERE materia = ?
        )
        `

  const [resultados] = await conexion.query(consulta, idMateria)

  console.log(resultados)
  return resultados
}

module.exports = {
  buscarMateriaPorId,
  buscarTodasMaterias,
  eliminarMateria,
  actualizarMateria,
  nuevaMateria,
  obtenerEstudiantesMateria,
}
