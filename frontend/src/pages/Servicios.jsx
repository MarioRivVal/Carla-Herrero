import "./Servicios.css";
import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Stats from "../components/stats/Stats";
import Button from "../components/button/Button";
import InstagramGallery from "../components/instagramGallery/InstagramGallery";
import Footer from "../components/footer/Footer";

import { services } from "../data/services";
import { telephoneNumber } from "../data/utils";

const Servicios = () => {
  return (
    <>
      <Nav />
      <section className="u--red-bg">
        <Banner
          title={"Servicios"}
          paragraph={
            "Hacemos (casi) todo, lo que puede hacerse con un ordenador"
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
              />
            ))}
          </div>
          {/* STATS */}
          <Stats className="u--black" />
          <Button
            text="Envia un whatsapp"
            to={`https://wa.me/${telephoneNumber}`}
            className="u--red-bg u--white"
          />
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
export default Servicios;
