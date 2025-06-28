import axios from "axios";
const API_URL = import.meta.env.PROD
  ? `${import.meta.env.VITE_API_URL}/api/proyectos`
  : "http://localhost:3000/api/proyectos";

export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    return [];
  }
};
