import { API_URL } from "../constantes";
import { obtenerMateriasDeCarrera } from "./carreraMateria";

export const obtenerCarreras = async () => {
    try {
        const response = await fetch(`${API_URL}/carreras/carreras`);
        const data = await response.json();

        const carreras = data.dato

        const carrerasParseadas = await Promise.all(
            carreras.map(async (carrera) => {
                const carrerasConMaterias = await obtenerMateriasDeCarrera(carrera.idCarrera)

                carrerasConMaterias.find((carreraConMaterias) => {
                    if (carreraConMaterias.nombre === carrera.nombre) {
                        carrera.materias = carreraConMaterias.materias
                    }
                
                })
                return carrera
            })
        )
            return carrerasParseadas
    } catch (error) {
        console.error(error)
    }
}

export const eliminarCarrera = async (idCarrera) => {
    try {
        const response = await fetch(`${API_URL}/carreras/carreras/${idCarrera}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const crearCarrera = async (carrera) => {
    try {
        const response = await fetch(`${API_URL}/carreras/carreras`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carrera)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const editarCarrera = async (idCarrera, carrera) => {
    try {
        const response = await fetch(`${API_URL}/carreras/carreras/${idCarrera}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carrera)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}