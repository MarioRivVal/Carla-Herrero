const express = require("express");
const cors = require("cors");
const app = express();
const proyectosRoutes = require("./routes/proyectos");

app.use(cors());
app.use(express.json());

app.use("/api/proyectos", proyectosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
