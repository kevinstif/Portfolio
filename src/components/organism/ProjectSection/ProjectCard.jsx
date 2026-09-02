import ProjectStatus from "../../atoms/ProjectStatus";
import TechnologyIcons from "../../atoms/TechnologyIcons";
import ProjectActions from "../../molecules/ProjectActions";

const ProjectCard = ({ project }) => {
  return (
    <article className="flex max-w-md flex-col rounded-xl border border-border bg-surface">
      <div className="aspect-16/10 overflow-hidden rounded-t-xl bg-primary-deep">
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

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>

          <ProjectStatus>{project.status}</ProjectStatus>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            border-t
            border-border
            pt-3
          "
        >
          <TechnologyIcons technologies={project.technologies} size="md" />

          <ProjectActions
            liveUrl={project.links.live}
            githubItems={project.links.github}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
