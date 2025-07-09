const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const authPath = path.join(__dirname, "../data/auth.json");

// Leer credenciales actuales
const getAuthData = () => {
  if (!fs.existsSync(authPath)) {
    return { user: "admin", hash: "" };
  }
  const data = fs.readFileSync(authPath, "utf-8");
  return JSON.parse(data);
};

// Guardar nuevas credenciales
const saveAuthData = (user, hash) => {
  fs.writeFileSync(authPath, JSON.stringify({ user, hash }, null, 2), "utf-8");
};

// ✅ Ruta: Login
router.post("/login", (req, res) => {
  const { user, password } = req.body;
  const auth = getAuthData();

  if (user !== auth.user) {
    return res.status(401).json({ error: "Usuario incorrecto" });
  }

  const valid = bcrypt.compareSync(password, auth.hash);
  if (!valid) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }

  res.json({ success: true });
});

// ✅ Ruta: Cambiar contraseña
router.post("/reset", (req, res) => {
  const { user, oldPassword, newPassword } = req.body;
  const auth = getAuthData();

  if (user !== auth.user) {
    return res.status(401).json({ error: "Usuario incorrecto" });
  }

  const valid = bcrypt.compareSync(oldPassword, auth.hash);
  if (!valid) {
    return res.status(401).json({ error: "Contraseña actual incorrecta" });
  }

  const newHash = bcrypt.hashSync(newPassword, 10);
  saveAuthData(user, newHash);

  res.json({ success: true });
});

module.exports = router;
