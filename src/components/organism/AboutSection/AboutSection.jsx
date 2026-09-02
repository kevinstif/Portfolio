import ProfileImage from "../../atoms/ProfileImage";
import image from "../../../assets/profile.jpg";
import SectionTitle from "../../atoms/SectionTitle";
import AboutCard from "../../molecules/AboutCard";

const AboutSection = () => {
  const description =
    "Soy Bachiller en Ingeniería de Software y desarrollador especializado en Backend, con más de 2 años de experiencia construyendo APIs y soluciones escalables. He trabajado en el diseño y desarrollo de aplicaciones bajo diferentes enfoques arquitectónicos, incluyendo monolitos, monolitos modulares, microservicios y soluciones multi-tenant. Mi experiencia principal se centra en el ecosistema .NET y ASP.NET Core, complementada con más de un año de experiencia en desarrollo Frontend, lo que me permite comprender el desarrollo de aplicaciones de forma integral y aportar una visión más completa en la construcción de soluciones.";
    
  const handleDownloadCV = () => {
    // Implement download CV functionality here
  };

  return (
    <section
      id="about"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-base
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle>Sobre mí</SectionTitle>

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-16
            md:grid-cols-4
          "
        >
          <ProfileImage src={image} alt="Kevin Stif Sánchez Urbina" />

          <AboutCard
            description={description}
            onDownloadCV={handleDownloadCV}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
