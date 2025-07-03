import "./Banner.css";
export const Banner = ({ title, paragraph }) => {
  return (
    <div className="banner u--white">
      <div className="banner__box">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Banner;
