import ExperienceItem from "./ExperienceItem";

const ExperienceTimeline = ({ title, experiences }) => {
  return (
    <div className="flex flex-col gap-0">
      {title && (
        <h2 className="text-xl font-bold text-text mb-4">
          {title}
        </h2>
      )}
      {experiences.map((experience) => (
        <ExperienceItem
          key={`${experience.company}-${experience.title}-${experience.period}`}
          {...experience}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
