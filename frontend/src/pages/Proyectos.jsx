import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import Nav from "../components/nav/Nav";

const Proyectos = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <>
      <Nav />
      <h2>Página Proyectos</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.services.join(", ")}</p>
            <img src={`./img/projects/${p.img}`} alt={p.title} width={200} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Proyectos;
