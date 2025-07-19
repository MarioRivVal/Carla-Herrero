import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import ScrollButtonsGroup from "./components/scrollButtonsGroup/ScrollButtonsGroup";

import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import Politicas from "./pages/Politicas";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProjects from "./pages/admin/AdminProjects";
import ChangePassword from "./pages/admin/ChangePassword";

const isAdminValid = () => {
  const isAdmin = localStorage.getItem("admin") === "true";
  const expiration = parseInt(localStorage.getItem("admin_expire"), 10);
  const now = new Date().getTime();

  if (!isAdmin || !expiration || now > expiration) {
    localStorage.removeItem("admin");
    localStorage.removeItem("admin_expire");
    return false;
  }
  return true;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminValid());

  // ✅ Escucha los cambios de almacenamiento para actualizar login
  useEffect(() => {
    const syncLogin = () => {
      setIsLoggedIn(isAdminValid());
    };

    window.addEventListener("storage", syncLogin);
    return () => window.removeEventListener("storage", syncLogin);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/politicas" element={<Politicas />} />

        {/* Página de login */}
        <Route
          path="/admin"
          element={isLoggedIn ? <AdminProjects /> : <AdminLogin />}
        />

        <Route
          path="/admin/proyectos"
          element={
            isLoggedIn ? <AdminProjects /> : <Navigate to="/admin" replace />
          }
        />
        <Route
          path="/admin/cambiar-clave"
          element={
            isLoggedIn ? <ChangePassword /> : <Navigate to="/admin" replace />
          }
        />
      </Routes>

      <ScrollButtonsGroup />
    </BrowserRouter>
  );
}

export default App;
