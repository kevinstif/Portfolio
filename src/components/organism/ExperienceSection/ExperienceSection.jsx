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
          max-w-md
          px-4
          py-16
          md:max-w-7xl
        "
      >
        <SectionTitle>
          Experiencia
        </SectionTitle>

        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
          "
        >
          {/* COMPANY EXPERIENCE */}

          <ExperienceTimeline
            title="Experiencia en Compañía"
            experiences={companyExperiences}
          />

          {/* FREELANCE EXPERIENCE */}

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