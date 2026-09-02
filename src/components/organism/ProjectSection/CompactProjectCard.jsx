import ProjectStatus from "../../atoms/ProjectStatus";
import TechnologyIcons from "../../atoms/TechnologyIcons";
import ProjectActions from "../../molecules/ProjectActions";

const CompactProjectCard = ({ project }) => {
  return (
    <article
      className="
        flex
        items-center
        gap-4
        rounded-xl
        border
        border-border
        bg-surface
        p-4
      "
    >
      <div
        className="
          aspect-16/10
          w-28
          shrink-0
          overflow-hidden
          rounded-lg
          bg-primary-deep
        "
      >
        <img
          src={project.image}
          alt={`Captura del sitio de ${project.title}`}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            object-top
          "
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-base font-semibold text-text">
            {project.title}
          </h3>

          <ProjectStatus compact>{project.status}</ProjectStatus>
        </div>

        <p className="truncate text-xs leading-relaxed text-muted">
          {project.description}
        </p>

        <TechnologyIcons technologies={project.technologies} size="sm" />
      </div>

      {/* ACTIONS */}

      <div className="flex shrink-0 items-center gap-2">
        <ProjectActions
          liveUrl={project.links.live}
          githubItems={project.links.github}
        />
      </div>
    </article>
  );
};

export default CompactProjectCard;
