import "./Contacto.css";
import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import ResponsiveImage from "../components/responsiveImage/ResponsiveImage,";
import SocialNav from "../components/socialNav/SocialNav";
import Button from "../components/button/Button";
import InstagramGallery from "../components/instagramGallery/InstagramGallery";
import Footer from "../components/footer/Footer";

const Contacto = () => {
  return (
    <>
      <Nav />
      <section className="u--red-bg">
        <Banner
          title={"Contacto"}
          paragraph={"Prometo contestarte lo antes posible"}
        />
      </section>
      <section>
        <div className="hero">
          <div className="u--grid-2 u--max-w-95">
            <ResponsiveImage
              name="carla"
              ext="png"
              alt="Imagen de Carla Herrero"
              className="hero__img"
            />
            <div className="hero__text u--black">
              <h2>Quien soy...</h2>
              <p>
                Soy Carla, de by Carla Herrero y llevo gestionando redes
                sociales y creando contenido para ellas más de 4 años
              </p>
              <p>
                Además, creo identidades para marcas nuevas o les doy un aire
                nuevo a marcas que ya existen y quieren darles ese punch a su
                imagen
              </p>
              <p>
                Diseño también tu web, y te ayudo que tu proyecto tenga la
                presencia online que se merece
              </p>
              <p>
                Si sientes que no tienes tiempo, que crear contenido no es lo
                tuyo, o que simplemente no te apetece, ¡soy la solución a tus
                problemas!
              </p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact__items-box">
            <div className="contact__title">
              <h5>Contáctame</h5>
            </div>

            <div className="contact__items">
              <a className="u--black" href="mailto:carlaherreroworks@gmail.com">
                carlaherreroworks@gmail.com
              </a>
              <a className="u--black" href="tel:+34677129329">
                +34 677 129 329
              </a>
              <SocialNav />
            </div>
          </div>

          <div className="contact__items-box">
            <div className="contact__title">
              <h5>Encuéntrame</h5>
            </div>

            <div className="contact__items">
              <p>Siempre con cita previa</p>
              <div className="contact__address">
                <p>Centro de Empresas La Curtidora</p>
                <p>Avilés</p>
              </div>

              <Button
                text="Abre en Maps"
                to="https://maps.app.goo.gl/qVdUbBZYessdxBTo7"
                className="u--red-bg u--white"
              />
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
export default Contacto;
