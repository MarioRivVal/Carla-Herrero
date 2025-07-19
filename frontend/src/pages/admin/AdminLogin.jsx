import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../components/button/Button";

const AdminLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        user,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("admin", "true");
        // Fecha de expiración (30 minutos)
        const expiration = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem("admin_expire", expiration.toString());
        window.dispatchEvent(new Event("storage"));
        navigate("/admin/proyectos");
      }
    } catch (err) {
      setError("Credenciales incorrectas.");
      console.error(err);
    }
  };

  return (
    <div className="admin-wrapper">
      <h2>Acceso al Panel de Administración</h2>

      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="admin-btns">
          <button type="submit" className="button u--red-bg u--white">
            Iniciar sesión
          </button>
          <Button
            text="Home"
            to=""
            className="u--white-bg u--black"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          />
        </div>

        {/* <Button
          text="Cambiar contraseña"
          to="/admin/cambiar-clave"
          className="u--black-bg u--white"
        /> */}
      </form>
    </div>
  );
};

export default AdminLogin;
