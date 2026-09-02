import HeroContent from "../../molecules/HeroContent";
import ProfileImage from "../../atoms/ProfileImage";
import image from "../../../assets/profile.jpg";

const HeroSection = () => {

  const greeting = "Hola, soy";
  const name = "Kevin Stif Sánchez Urbina";
  const title = "Bachiller en Ingeniería de Software";

  return (
    <section
      id="home"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-background
      "
    >
      <div
        className="
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-8
          px-4
          md:grid-cols-2
        "
      >
        <HeroContent greeting={greeting} name={name} title={title} />

        <ProfileImage src={image} alt="Kevin Stif Sánchez Urbina" />
      </div>
    </section>
  );
};

export default HeroSection;
