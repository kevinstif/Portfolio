import Logo from "../atoms/Logo";
import BrandName from "../atoms/BrandName";

const Brand = ({ src = "/logo.svg", alt = "alt-logo", name = "name" }) => {
  return (
    <a href="/Portfolio/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Logo src={src} alt={alt} />

      <BrandName>{name}</BrandName>
    </a>
  );
};

export default Brand;
