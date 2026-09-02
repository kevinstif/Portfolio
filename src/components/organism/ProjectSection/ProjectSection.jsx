import SectionTitle from "../../atoms/SectionTitle";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import CompactProjectCard from "./CompactProjectCard";

import { main, projects, olds } from "../../../data/projects";

const mapProjectToDropdownItems = (project) => {
  return project.links.github
    ? Object.entries(project.links.github).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),

        value,
      }))
    : [];
};

const mapDataToProject = (data) => ({
  ...data,

  links: {
    ...data.links,

    github: mapProjectToDropdownItems(data),
  },
});

const ProjectSection = () => {
  const mainProject = mapDataToProject(main);

  const projectsList = projects.map(mapDataToProject);

  const oldProjects = olds.map(mapDataToProject);

  return (
    <section
      id="projects"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-base
      "
    >
      <div className="mx-auto w-full max-w-md md:max-w-7xl px-4 py-16">
        <SectionTitle>Proyectos</SectionTitle>

        <div className="grid grid-cols-1 gap-6">
          {/* FEATURED PROJECT */}

          <FeaturedProject project={mainProject} />

          {/* PROJECTS */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              justify-items-center
              gap-6
            "
          >
            {projectsList.map((project, key) => (
              <ProjectCard key={key} project={project} />
            ))}
          </div>

          {/* OLD PROJECTS */}

          <div
            className="
              flex
              max-h-64
              flex-col
              gap-4
              overflow-y-auto
            "
          >
            {oldProjects.map((project, key) => (
              <CompactProjectCard key={key} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
