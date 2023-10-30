import axios from "axios";
import { API_URL } from "../constantes";

axios.defaults.withCredentials = true;

export const obtenerMateriasDeCarrera = async (idCarrera) => {
    try {
        const {data} = await axios.get(`${API_URL}/carrerasMaterias/${idCarrera}`);
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const asignarMateriaACarrera = async (idMateria, idCarrera) => {
    try{
        const {data} = await axios.post(`${API_URL}/carrerasMaterias`, {idMateria, idCarrera});
        return data;
    }
    catch(error){
        console.error(error);
    }
}