const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../data/proyectos.json");

// Función auxiliar para leer los datos
const readProjects = () => {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

// Función auxiliar para escribir los datos
const writeProjects = (projects) => {
  fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2), "utf-8");
};

// GET /api/proyectos → obtener todos
router.get("/", (req, res) => {
  try {
    const projects = readProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error al leer proyectos" });
  }
});

// GET /api/proyectos/:id → obtener uno
router.get("/:id", (req, res) => {
  try {
    const projects = readProjects();
    const project = projects.find((p) => p.id === Number(req.params.id));
    if (!project)
      return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar proyecto" });
  }
});

// POST /api/proyectos → crear uno nuevo
router.post("/", (req, res) => {
  try {
    const projects = readProjects();
    const nuevoProyecto = req.body;
    nuevoProyecto.id = Date.now(); // ID único simple
    projects.push(nuevoProyecto);
    writeProjects(projects);
    res.status(201).json(nuevoProyecto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear proyecto" });
  }
});

// PUT /api/proyectos/:id → actualizar
router.put("/:id", (req, res) => {
  try {
    const projects = readProjects();
    const index = projects.findIndex((p) => p.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ error: "Proyecto no encontrado" });

    projects[index] = { ...projects[index], ...req.body };
    writeProjects(projects);
    res.json(projects[index]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar proyecto" });
  }
});

// DELETE /api/proyectos/:id → eliminar

router.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    let projects = readProjects();

    const projectToDelete = projects.find((p) => p.id === id);
    if (!projectToDelete) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    // Elimina la imagen del sistema de archivos
    const imagePath = path.join(
      __dirname,
      "../public/img/projects",
      projectToDelete.img
    );
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Filtra y guarda el nuevo array sin el proyecto eliminado
    projects = projects.filter((p) => p.id !== id);
    writeProjects(projects);

    res.json({ message: "Proyecto e imagen eliminados correctamente" });
  } catch (error) {
    console.error("Error al eliminar proyecto:", error);
    res.status(500).json({ error: "Error interno al eliminar el proyecto" });
  }
});

module.exports = router;
