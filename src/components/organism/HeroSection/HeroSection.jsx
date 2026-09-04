import HeroContent from "../../molecules/HeroContent";
import ProfileImage from "../../atoms/ProfileImage";
import image from "../../../assets/profile.avif";

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
          gap-10
          px-4
          py-20
          sm:px-6
          md:grid-cols-2
          md:gap-12
          md:px-8
          md:py-0
        "
      >
        <HeroContent
          greeting={greeting}
          name={name}
          title={title}
        />

        <ProfileImage
          src={image}
          alt="Kevin Stif Sánchez Urbina"
        />
      </div>
    </section>
  );
};

export default HeroSection;