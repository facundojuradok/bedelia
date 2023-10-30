import { API_URL } from "../constantes"

export const filtradoPorEstudiante = async (idEstudiante) => {
  const carreras = await fetch(`${API_URL}/estudiante/${idEstudiante}/carreras`)
  const materias = await fetch(`${API_URL}/estudiante/${idEstudiante}/materias`)

  const carrerasJson = await carreras.json()
  const materiasJson = await materias.json()

  const data = {
    carreras: carrerasJson,
    materias: materiasJson,
  }

  return data
}
