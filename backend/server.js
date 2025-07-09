const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const proyectosRoutes = require("./routes/proyectos");
const uploadRoutes = require("./routes/upload"); // ✅ NUEVO

const allowedOrigins = [
  "http://localhost:5173",
  "https://carla-herrero.netlify.app",
];

app.use(express.json());

// Servir imágenes públicas
app.use("/img", express.static(path.join(__dirname, "public/img")));

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

// Rutas
app.use("/api/proyectos", proyectosRoutes);
app.use("/api/upload", uploadRoutes); // ✅ NUEVA

app.use((req, res, next) => {
  if (req.method === "GET" && !req.url.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
