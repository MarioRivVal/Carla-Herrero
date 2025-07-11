import { useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";

const ChangePassword = () => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!current || !newPass || !confirm) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    if (newPass !== confirm) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/auth/change-password`, {
        current,
        newPassword: newPass,
      });

      if (res.data.success) {
        setMessage("Contraseña cambiada correctamente.");
        setCurrent("");
        setNewPass("");
        setConfirm("");
      } else {
        setMessage("No se pudo cambiar la contraseña.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error: la contraseña actual no es correcta.");
    }
  };

  return (
    <div className="admin-wrapper">
      <h2>Cambiar contraseña</h2>

      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Contraseña actual"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {message && <p style={{ color: "red" }}>{message}</p>}

        <Button
          text="Actualizar contraseña"
          type="submit"
          className="u--red-bg u--white"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
