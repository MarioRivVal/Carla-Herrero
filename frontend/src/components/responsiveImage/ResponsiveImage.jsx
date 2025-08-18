const ResponsiveImage = ({ name, ext = "jpg", alt, className }) => {
  return (
    <picture className={className}>
      <source srcSet={`/img/${name}.webp`} type="image/webp" />
      <img src={`/img/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
