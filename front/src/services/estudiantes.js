import axios from 'axios';
import { API_URL } from '../constantes';

export const obtenerEstudiantes = async () => {
  try {
    const response = await axios.get(`${API_URL}/estudiante/estudiantes`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const eliminarEstudiante = async (idEstudiante) => {
  try {
    const response = await axios.delete(`${API_URL}/estudiante/estudiantes/${idEstudiante}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const crearEstudiante = async (estudiante) => {
  try {
    const response = await axios.post(`${API_URL}/estudiante/estudiantes`, estudiante, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editarEstudiante = async (idEstudiante, estudiante) => {
  try {
    const response = await axios.put(
      `${API_URL}/estudiante/estudiantes/${idEstudiante}`,
      estudiante,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
