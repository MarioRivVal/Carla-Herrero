import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";

import AdminProjects from "./pages/admin/AdminProjects";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import Politicas from "./pages/Politicas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/admin/proyectos" element={<AdminProjects />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
