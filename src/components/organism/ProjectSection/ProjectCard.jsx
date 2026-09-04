import ProjectStatus from "../../atoms/ProjectStatus";
import TechnologyIcons from "../../atoms/TechnologyIcons";
import ProjectActions from "../../molecules/ProjectActions";

const ProjectCard = ({ project }) => {
  return (
    <article
      className="
        flex
        w-full
        max-w-md
        flex-col
        rounded-xl
        border
        border-border
        bg-surface
      "
    >
      <div
        className="
          aspect-16/10
          overflow-hidden
          rounded-t-xl
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

      <div
        className="
          flex
          flex-col
          gap-3
          p-4
          sm:p-5
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            gap-2
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-3
          "
        >
          <h3 className="text-lg font-semibold text-text">
            {project.title}
          </h3>

          <ProjectStatus>
            {project.status}
          </ProjectStatus>
        </div>

        <p
          className="
            line-clamp-3
            text-sm
            leading-relaxed
            text-muted
          "
        >
          {project.description}
        </p>

        <div
          className="
            mt-auto
            flex
            flex-col
            items-stretch
            gap-3
            border-t
            border-border
            pt-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <TechnologyIcons
            technologies={project.technologies}
            size="md"
          />

          <div className="self-end sm:self-auto">
            <ProjectActions
              liveUrl={project.links.live}
              githubItems={project.links.github}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;