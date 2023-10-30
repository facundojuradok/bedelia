const conexion = require("./conexionBD")

const matricularEstudiante = async (estudiante, carrera, materias) => {
  //Agregamos la carrera
  const consulta = "INSERT INTO estudiantecarrera SET ?"
  await conexion.query(consulta, { estudiante, carrera, fechaAlta: new Date() })

  //Luego agregamos las materias
  for (const materia of materias) {
    const consulta2 = "INSERT INTO estudiantemateria SET ?"
    await conexion.query(consulta2, { estudiante, materia, fecha: new Date() })
  }

  return { mensaje: "Estudiante matriculado correctamente" }
}

module.exports = {
  matricularEstudiante,
}
