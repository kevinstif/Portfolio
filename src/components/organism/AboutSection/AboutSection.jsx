import ProfileImage from "../../atoms/ProfileImage";
import image from "../../../assets/profile.avif";
import SectionTitle from "../../atoms/SectionTitle";
import AboutCard from "../../molecules/AboutCard";
import { description } from "../../../data/about";

const AboutSection = () => {

  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/Portfolio/Kevin_Stif_CV.pdf";
    link.download = "Kevin_Stif_CV.pdf";

    console.log("Descargando CV desde:", link.href);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-20
          sm:px-6
          md:px-8
        "
      >
        <SectionTitle>Sobre mí</SectionTitle>

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            md:grid-cols-4
            md:gap-12
          "
        >
          <div className="md:col-span-1">
            <ProfileImage
              src={image}
              alt="Kevin Stif Sánchez Urbina"
            />
          </div>

          <div className="md:col-span-3">
            <AboutCard
              description={description}
              onDownloadCV={handleDownloadCV}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;