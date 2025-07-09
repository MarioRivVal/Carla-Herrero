import "./AdminProjects.css";
import { useEffect, useState, useRef } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";
import axios from "axios";

import Button from "../../components/button/Button";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    img: "",
    services: [""],
    best: false,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const MAX_PROJECTS = 12;
  const MAX_SERVICES = 5;
  const MAX_BEST = 6;

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  const handleNewProjectChange = (field, value) => {
    setNewProject((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index, value) => {
    const updated = [...newProject.services];
    updated[index] = value;
    setNewProject((prev) => ({ ...prev, services: updated }));
  };

  const addServiceField = () => {
    if (newProject.services.length < MAX_SERVICES) {
      setNewProject((prev) => ({
        ...prev,
        services: [...prev.services, ""],
      }));
    }
  };

  const generateImageName = (originalName) => {
    const ext = originalName.split(".").pop();
    const timestamp = Date.now();
    return `project_${timestamp}.${ext}`;
  };

  const handleAddOrUpdateProject = async () => {
    const currentBestCount = projects.filter((p) => p.best).length;
    if (projects.length >= MAX_PROJECTS && !editingProjectId) return;
    if (newProject.best && currentBestCount >= MAX_BEST && !editingProjectId) {
      alert("Máximo de 6 proyectos destacados alcanzado");
      return;
    }

    const cleanedServices = newProject.services
      .map((s) => s.trim())
      .filter((s) => s !== "");

    if (!newProject.title.trim()) {
      alert("Por favor, añade un título para el proyecto.");
      return;
    }

    if (cleanedServices.length === 0) {
      alert("Debes añadir al menos un servicio.");
      return;
    }

    let imageName = newProject.img;
    if (selectedFile) {
      imageName = generateImageName(selectedFile.name);
      const formData = new FormData();
      formData.append("image", selectedFile, imageName);

      try {
        await axios.post(`${API_URL}/api/upload`, formData);
      } catch (error) {
        alert("Error al subir imagen");
        console.error(error);
        return;
      }
    }

    const payload = {
      ...newProject,
      services: cleanedServices,
      img: imageName,
    };

    try {
      if (editingProjectId) {
        const response = await updateProject(editingProjectId, payload);
        setProjects((prev) =>
          prev.map((p) => (p.id === editingProjectId ? response.data : p))
        );
      } else {
        const response = await createProject(payload);
        setProjects((prev) => [...prev, response.data]);
      }
    } catch (error) {
      alert("Error al guardar el proyecto");
      console.error(error);
      return;
    }

    setNewProject({ title: "", img: "", services: [""], best: false });
    setSelectedFile(null);
    setEditingProjectId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de que quieres eliminar este proyecto?"
    );
    if (!confirmar) return;

    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      alert("Ocurrió un error al eliminar el proyecto.");
      console.error("Error al eliminar:", error);
    }
  };

  const handleEdit = (project) => {
    setNewProject({
      title: project.title,
      img: project.img,
      services: project.services,
      best: project.best,
    });
    setEditingProjectId(project.id);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const fileInputRef = useRef(null);
  const currentBestCount = projects.filter((p) => p.best).length;
  const canAddBest = currentBestCount < MAX_BEST || newProject.best;

  return (
    <div className="admin-wrapper">
      <h2>Panel de Administración de Proyectos</h2>

      {projects.length < MAX_PROJECTS || editingProjectId ? (
        <div className="project-form">
          <div className="input-group">
            <label htmlFor="name">Nombre Proyecto</label>
            <input
              id="name"
              type="text"
              value={newProject.title}
              onChange={(e) => handleNewProjectChange("title", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="file">Agregar imagen</label>
            <input
              id="file"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              ref={fileInputRef}
            />
            {(selectedFile || newProject.img) && (
              <div className="image-preview">
                <p>Vista previa:</p>
                <img
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : `${API_URL}/img/projects/${newProject.img}`
                  }
                  alt="Vista previa"
                  className="thumbnail"
                />
              </div>
            )}
          </div>

          <div className="input-group">
            {newProject.services.map((service, i) => (
              <div key={i}>
                <label>{`Servicio ${i + 1}`}</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => handleServiceChange(i, e.target.value)}
                />
              </div>
            ))}
            {newProject.services.length < MAX_SERVICES && (
              <Button
                text="+ Añadir servicio"
                className="u--white-bg u-red"
                onClick={addServiceField}
              />
            )}
          </div>

          <div className="input-group destacado-group">
            <label htmlFor="best">
              Destacado {currentBestCount}/{MAX_BEST}
            </label>

            {canAddBest || newProject.best ? (
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="best"
                  checked={newProject.best}
                  onChange={(e) =>
                    handleNewProjectChange("best", e.target.checked)
                  }
                />
                <span className="custom-checkbox" />
              </label>
            ) : (
              <p className="disabled-message">Límite de destacados alcanzado</p>
            )}
          </div>

          <Button
            text={editingProjectId ? "Actualizar proyecto" : "Guardar proyecto"}
            className="u--red-bg u--white"
            onClick={handleAddOrUpdateProject}
          />
        </div>
      ) : (
        <p>Has alcanzado el máximo de 12 proyectos.</p>
      )}

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            {project.img && (
              <img
                src={`${API_URL}/img/projects/${project.img}`}
                alt={project.title}
                className="thumbnail"
              />
            )}
            <p>
              <span>Proyecto:</span> {project.title}
            </p>
            <p>
              <span>Servicios:</span> {(project.services || []).join(", ")}
            </p>
            <p>
              <span>Destacado:</span> {project.best ? "Sí" : "No"}
            </p>
            <Button
              text="Editar"
              className="u--white-bg u--red"
              onClick={() => handleEdit(project)}
            />
            <Button
              text="Eliminar"
              className="u--red-bg u--white"
              onClick={() => handleDelete(project.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;
