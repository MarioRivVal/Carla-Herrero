import "./Inicio.css";
import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import Nav from "../components/nav/Nav";
import SocialNav from "../components/socialNav/SocialNav";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import ResponsiveImage from "../components/responsiveImage/ResponsiveImage,";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Button from "../components/button/Button";
import ServiceCard from "../components/serviceCard/ServiceCard";
import Stats from "../components/stats/Stats";
import InstagramGallery from "../components/instagramGallery/InstagramGallery";
import Footer from "../components/footer/Footer";

import { services } from "../data/services";
import { stats } from "../data/stats";
import { telephoneNumber } from "../data/utils";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      const filtered = data.filter((p) => p.best);
      setProjects(filtered);
    });
  }, []);

  return (
    <>
      <Nav />
      <header>
        <main>
          <HeaderSlider />
        </main>
        <SocialNav />
      </header>
      {/* INTRODUCTION */}
      <section className="u--red-bg">
        <div className="hero">
          <div className="u--grid-2 u--max-w">
            <ResponsiveImage
              name="hero"
              ext="jpeg"
              alt="Imagen de Carla Herrero"
              className="hero__img"
            />
            <div className="hero__text">
              <h2 className="u--white">Seguramente no me necesites...</h2>
              <p>
                …Pero tu web si!. Seguramente llegues rebotado de cualquier otra
                agencia o empresa, pero soy experta en tratar tu web como si se
                tratase de mía propia.{" "}
              </p>
              <p>
                El hecho de trabajar one to one y sin intermediarios e una de
                las mayores ventajas; el mimo, el cariño y el tiempo de
                dedicación que quizás una empresa masa grande no pueda
                ofrecerte.
              </p>
              <p>
                Deja a un lado el kit digital y crea conmigo la web que de
                verdad se merece tu proyecto. Me cuentas tu idea y le damos
                forma?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section>
        <div className="projects-preview">
          <div className="title-box">
            <h2>Estas marcas ya han dado el paso</h2>
            <p>
              ¿Sabías que nunca has estado tan cerca de alcanzar la imagen ideal
              para tu negocio?
            </p>
          </div>
          <div className="u--grid-6">
            {projects.map((project, index) => (
              <PresentationCard
                key={index}
                project={project}
                className="projects-preview-card"
              />
            ))}
          </div>
          <div className="btns-box">
            <Button
              text="Envia un whatsapp"
              to={`https://wa.me/${telephoneNumber}`}
              className="u--red-bg u--white"
            />

            <Button
              text="Cotillea aquí más proyectos"
              to="/proyectos"
              className="u--white-bg u--red"
            />
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section>
        <div className="services-preview">
          <div className="title-box">
            <h2>Servicios 100% Personalizados</h2>
            <p>
              En by Carla Herrero estaremos encantados de darte la respuesta
              creativa que necesites, esto es todo lo que hacemos
            </p>
          </div>
          <div className="u--grid-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="btns-box">
            <Button
              text="Contacta con nosotros"
              to="/contacto"
              className="u--red-bg u--white"
            />

            <Button
              text="Saber más"
              to="/servicios"
              className="u--white-bg u--red"
            />
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="u--red-bg">
        <div className="stats">
          <div className="u--grid-2 u--max-w">
            <div className="stats__descripcion">
              <h2 className="u--white">¿Por qué elegirnos?</h2>
              <p className="u--white">
                Porque somos un equipo de profesionales apasionados por el
                diseño web y la comunicación digital. Nos encanta lo que hacemos
                y nos comprometemos a ofrecerte un servicio personalizado y de
                calidad.
              </p>
              <Button
                text="Envia un whatsapp"
                to={`https://wa.me/${telephoneNumber}`}
                className="u--black-bg u--white"
              />
            </div>
            <div className="stats__items">
              {stats.map((stat, index) => (
                <Stats key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>
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
export default Home;
