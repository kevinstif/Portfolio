import SectionTitle from "../../atoms/SectionTitle";
import SkillCategory from "../../molecules/SkillCategory";
import SkillItem from "../../molecules/SkillItem";
import LanguageItem from "../../molecules/LanguageItem";

import { skillCategories, languages } from "../../../data/skills";

const SkillsSection = () => {
  return (
    <section
      id="skills"
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
        <SectionTitle>Habilidades Técnicas</SectionTitle>

        {/* TECHNICAL SKILLS */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
            >
              <div className="grid gap-3">
                {category.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    {...skill}
                  />
                ))}
              </div>
            </SkillCategory>
          ))}
        </div>

        {/* LANGUAGES */}

        <div className="mt-6">
          <SkillCategory
            title="Idiomas"
            description="Nivel de comunicación en idiomas utilizados en entornos profesionales."
            icon="🌐"
          >
            <div
              className="
                grid
                grid-cols-1
                gap-3
                md:grid-cols-2
              "
            >
              {languages.map((language) => (
                <LanguageItem
                  key={language.name}
                  {...language}
                />
              ))}
            </div>
          </SkillCategory>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;