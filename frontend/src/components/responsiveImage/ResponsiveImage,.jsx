const ResponsiveImage = ({ name, ext = "jpg", alt, className = "" }) => {
  return (
    <picture className={className}>
      {/* WebP si el navegador lo soporta */}
      <source srcSet={`/img/${name}.webp`} type="image/webp" />

      {/* Fallback (JPG o PNG) */}
      <img src={`/img/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
