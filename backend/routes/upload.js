const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/projects")); // Guarda en /public/img/projects
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // El nombre ya lo genera el frontend
  },
});

// Filtro de tipos de archivo
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato de imagen no permitido (solo JPEG, JPG, PNG)"));
  }
};

const upload = multer({ storage, fileFilter });

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No se subió ninguna imagen" });
  }

  res.json({
    message: "Imagen subida correctamente",
    filename: req.file.filename,
  });
});

module.exports = router;
