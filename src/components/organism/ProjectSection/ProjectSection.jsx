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
        <SectionTitle>Proyectos</SectionTitle>

        <div className="grid grid-cols-1 gap-6">
          {/* FEATURED PROJECT */}

          <FeaturedProject project={mainProject} />

          {/* PROJECTS */}

          <div
            className="
              grid
              grid-cols-1
              justify-items-center
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {projectsList.map((project, key) => (
              <ProjectCard key={key} project={project} />
            ))}
          </div>

          {/* OLD PROJECTS */}

          <div className="flex flex-col gap-4">
            {oldProjects.slice(0, 3).map((project, key) => (
              <CompactProjectCard key={key} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
