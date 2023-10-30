import { API_URL } from "../constantes"

export const matricularEstudiante = async (datosMatricula) => {
  try {
    const respuesta = await fetch(`${API_URL}/matricular`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosMatricula),
    })
    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.log(error)
  }
}
