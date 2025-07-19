import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import "./Proyectos.css";
import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Testimonials from "../components/testimonials/Testimonials";
import InstagramGallery from "../components/instagramGallery/InstagramGallery";
import Footer from "../components/footer/Footer";

const Proyectos = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <>
      <Nav />
      <section className="u--red-bg">
        <Banner
          title={"Proyectos"}
          paragraph={"Aquí te enseño un poco la manera en la que trabajo"}
        />
      </section>
      {/* ALL PROJECTS */}
      <section>
        <div className="projects">
          <div className="u--grid-4">
            {projects.map((project, index) => (
              <PresentationCard
                key={index}
                item={project}
                className="projects-card"
              />
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIOS */}
      <section>{<Testimonials />}</section>
      {/* INSTAGRAM */}
      <section>
        <InstagramGallery />
      </section>
      {/* FOOTER */}
      <section className="u--black-bg">
        <Footer />
      </section>
    </>
  );
};

export default Proyectos;
