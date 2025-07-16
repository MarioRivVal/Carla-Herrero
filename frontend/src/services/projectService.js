import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE}/proyectos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    return [];
  }
};

export const createProject = async (projectData) => {
  return axios.post(`${API_BASE}/proyectos`, projectData);
};

export const updateProject = async (id, projectData) => {
  return axios.put(`${API_BASE}/proyectos/${id}`, projectData);
};

export const deleteProject = async (id) => {
  return axios.delete(`${API_BASE}/proyectos/${id}`);
};
