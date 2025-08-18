import "./Servicios.css";
import { useState } from "react";

import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Stats from "../components/stats/Stats";
import Button from "../components/button/Button";
import InstagramGallery from "../components/instagramGallery/InstagramGallery";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import ResponsiveImage from "../components/responsiveImage/ResponsiveImage";

import { services } from "../data/services.jsx";
import { telephoneNumber } from "../data/utils";

const Servicios = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => setSelectedService(service);
  const handleCloseModal = () => setSelectedService(null);

  return (
    <>
      <Nav />
      <section className="u--red-bg">
        <Banner
          title={"Servicios"}
          paragraph={
            <>
              Hacemos (casi) todo,{" "}
              <span className="u--strong-text">
                lo que puede hacerse con un ordenador
              </span>
            </>
          }
        />
      </section>

      <section>
        <div className="services">
          <div className="u--grid-6">
            {services.map((service, index) => (
              <PresentationCard
                key={index}
                item={service}
                className="service-fullcard"
                type="service"
                onClick={() => handleOpenModal(service)}
              />
            ))}
          </div>

          <Stats className="u--black" />
          <Button
            text="Envía un whatsapp"
            to={`https://wa.me/${telephoneNumber}`}
            className="u--red-bg u--white"
          />
        </div>
      </section>

      <section>
        <InstagramGallery />
      </section>

      <section className="u--black-bg">
        <Footer />
      </section>

      {/* MODAL CON DETALLES */}
      <Modal isActive={!!selectedService} onClose={handleCloseModal}>
        {selectedService && (
          <>
            <h2>{selectedService.name}</h2>

            <div className="u--grid-2">
              <div className="modal-service__description">
                <p>{selectedService.description}</p>
                <Button
                  text="Lo quiero"
                  to={`https://wa.me/${telephoneNumber}`}
                  className="u--red-bg u--white"
                />
                <div>
                  <ResponsiveImage
                    name={`services/${selectedService.img}-3`}
                    ext="png"
                    alt={`imagen de servicio - ${selectedService.name}`}
                    className="modal-service__img"
                  />
                  <ResponsiveImage
                    name={`services/${selectedService.img}-4`}
                    ext="png"
                    alt={`imagen de servicio - ${selectedService.name}`}
                    className="modal-service__img"
                  />
                </div>
              </div>
              <ResponsiveImage
                name={`services/${selectedService.img}-2`}
                ext="png"
                alt={`imagen de servicio - ${selectedService.name}`}
                className="modal-service__img"
              />
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Servicios;
