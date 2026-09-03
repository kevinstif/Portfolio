import ProjectStatus from "../../atoms/ProjectStatus";
import TechnologyIcons from "../../atoms/TechnologyIcons";
import ProjectActions from "../../molecules/ProjectActions";

const FeaturedProject = ({ project }) => {
  if (!project) return null;

  return (
    <article
      className="
        grid
        grid-cols-1
        items-stretch
        rounded-xl
        border
        border-border
        bg-surface
        md:grid-cols-2
      "
    >
      <div className="order-2 flex flex-col gap-4 p-5 md:order-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-text">{project.title}</h3>

          <ProjectStatus>{project.status}</ProjectStatus>
        </div>

        <p className="line-clamp-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-3
            border-t
            border-border
            pt-3
          "
        >
          <TechnologyIcons technologies={project.technologies} size="lg" />

          <ProjectActions
            liveUrl={project.links.live}
            githubItems={project.links.github}
          />
        </div>
      </div>

      <div className="order-1 aspect-16/10 overflow-hidden bg-primary-deep md:order-2">
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
    </article>
  );
};

export default FeaturedProject;
