import { useEffect, useState } from "react";
import { getProyectos } from "../services/projectService";
import Nav from "../components/nav/Nav";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    getProyectos().then((data) => setProyectos(data));
  }, []);

  return (
    <>
      <Nav />
      <h2>Página Proyectos</h2>
      <ul>
        {proyectos.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.services.join(", ")}</p>
            <img src={`./img/${p.img}`} alt={p.title} width={200} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Proyectos;
