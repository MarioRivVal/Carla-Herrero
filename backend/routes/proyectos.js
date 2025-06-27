const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../data/proyectos.json");

// Obtener todos los proyectos
router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer proyectos" });
    res.json(JSON.parse(data));
  });
});

// Sobrescribir todos los proyectos (uso interno del CMS)
router.post("/", (req, res) => {
  const nuevosProyectos = req.body;

  fs.writeFile(
    dataPath,
    JSON.stringify(nuevosProyectos, null, 2),
    "utf-8",
    (err) => {
      if (err)
        return res.status(500).json({ error: "Error al guardar proyectos" });
      res.json({ message: "Proyectos actualizados correctamente" });
    }
  );
});

module.exports = router;
