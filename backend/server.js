const express = require("express");
const cors = require("cors");
const app = express();
const proyectosRoutes = require("./routes/proyectos");

const allowedOrigins = [
  "http://localhost:5173",
  "https://carla-herrero.netlify.app",
];

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      // Permite requests sin origen (como Postman) o desde los orígenes permitidos
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/api/proyectos", proyectosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
