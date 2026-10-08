import SectionTitle from "../../atoms/SectionTitle";

import ExperienceTimeline from "../../molecules/ExperienceTimeline";

import {
  companyExperiences,
  freelanceExperiences,
} from "../../../data/experiences";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
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
          py-16
          sm:px-6
          lg:px-8
        "
      >
        <SectionTitle>
          Experiencia
        </SectionTitle>

        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
          "
        >
          <ExperienceTimeline
            title="Experiencia en Compañía"
            experiences={companyExperiences}
          />

          <ExperienceTimeline
            title="Experiencia Freelance"
            experiences={freelanceExperiences}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;