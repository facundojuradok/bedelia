import { API_URL } from "../constantes";

export const obtenerMaterias = async () => {
    try {
        const response = await fetch(`${API_URL}/materias/materias`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const crearMateria = async (nuevaMateria) => {
    try {
        const response = await fetch(`${API_URL}/materias/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevaMateria),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

