import "./Inicio.css";
import Nav from "../components/nav/Nav";
import SocialNav from "../components/socialNav/SocialNav";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import ResponsiveImage from "../components/responsiveImage/ResponsiveImage,";

const Home = () => {
  return (
    <>
      <Nav />
      <header>
        <main>
          <HeaderSlider />
        </main>
        <SocialNav />
      </header>
      <section className="u--red-bg">
        <div className="hero">
          <h2 className="u--white">Seguramente no me necesites...</h2>
          <div className="u--grid-2">
            <ResponsiveImage
              name="hero"
              ext="jpeg"
              alt="Imagen de Carla Herrero"
              className="hero__img"
            />
            <div className="hero__text">
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
    </>
  );
};
export default Home;
