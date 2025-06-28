import axios from "axios";

const API_URL = "https://backend-carla-herrero.onrender.com";

export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    return [];
  }
};
