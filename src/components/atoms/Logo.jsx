const Logo = ({ src, alt = "Logo" }) => {
  return (
    <img
      src={src}
      className="h-11 rounded-full"
      alt={alt}
    />
  );
};

export default Logo;