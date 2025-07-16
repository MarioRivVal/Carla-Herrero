const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const proyectosRoutes = require("./routes/proyectos");
const uploadRoutes = require("./routes/upload");
const authRoutes = require("./routes/auth");

const allowedOrigins = [
  "http://localhost:5173",
  "https://bycarlaherrero.com",
  "https://www.bycarlaherrero.com",
];

app.use(express.json());

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Servir imágenes públicas (subidas)
app.use("/img", express.static(path.join(__dirname, "public", "img")));

// Servir el build del frontend (Vite) ubicado en /public/dist
app.use(express.static(path.join(__dirname, "public", "dist")));

// Rutas API
app.use("/api/proyectos", proyectosRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);

// Fallback SPA: cualquier GET que no sea /api sirve index.html del build
app.use((req, res, next) => {
  if (req.method === "GET" && !req.url.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo", PORT);
});
