import { API_URL } from "../constantes";

export const obtenerCarreras = async () => {
    try {
        const response = await fetch(`${API_URL}/carreras/carreras`);
        const data = await response.json();
        return data;
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