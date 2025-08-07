import { Link, useLocation } from "react-router";
import { projects } from "../projects/Index";

import { FaClock, FaUsers, FaDownload, FaEye, FaStar } from "react-icons/fa";
import type { IconType } from "react-icons";

function ProjectList({ showOnlyPinned = false }) {
  const projectsArray = Object.values(projects).map(({ data }) => data);
  const filteredProjects = showOnlyPinned
    ? projectsArray.filter((project) => project.pin).reverse()
    : projectsArray.sort((a, b) => (b.pin === a.pin ? 0 : b.pin ? 1 : -1)).reverse();

  return (
    <div>
      <p className="text-4xl font-bold text-text">Projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 justify-items-center">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  const location = useLocation();
  const slug = location.pathname === "/" ? `projects/${project.slug}` : project.slug;

  const cover = project.cover;
  const year = new Date(project.releaseDate).getFullYear();

  return (
    <Link to={{ pathname: `${slug}` }} className="w-full">
      <div className="rounded-md overflow-hidden relative flex flex-col bg-secondary hover:cursor-pointer">
        <div className="w-full h-64">
          {cover.mediaType !== "video" ? (
            <img src={cover.url} className="w-full h-full object-cover object-center" />
          ) : (
            <video src={cover.url} className="w-full h-full object-cover object-center" autoPlay muted loop playsInline />
          )}
        </div>

        <div className="h-38 p-4 space-y-2 flex flex-col">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-y-2">
              <h2 className="text-lg font-semibold text-accent">{project.title} ({year})</h2>

              <div className="flex items-center gap-2 ml-auto">
                {project.techStack.map((tech: any, index: number) => (
                  <div key={index} title={tech.title}>
                    <tech.icon className="w-5 h-5 text-text" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 text-sm text-texxt mt-1">
              {project.teamSize && <InfoItem Icon={FaUsers} title="Team Size" text={project.teamSize} />}
              {project.timeFrame && <InfoItem Icon={FaClock} title="Time Frame" text={project.timeFrame} />}
              {project.metrics.views && <InfoItem Icon={FaEye} title="Downloads" text={project.metrics.views} />}
              {project.metrics.downloads && <InfoItem Icon={FaDownload} title="Downloads" text={project.metrics.downloads} />}
              {project.metrics.stars && <InfoItem Icon={FaStar} title="Downloads" text={project.metrics.stars} />}
            </div>
          </div>

          <p className="text-text text-sm line-clamp-3 overflow-hidden">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function InfoItem({ Icon, title, text }: { Icon: IconType; title: string; text: any }) {
  return (
    <div className="flex items-center gap-1" title={`${title}: ${text}`}>
      <Icon />
      <span>{text}</span>
    </div>
  );
}

export default ProjectList;