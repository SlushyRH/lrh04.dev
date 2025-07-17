import { useLocation } from "react-router";
import { projects } from "../projects/Index";

function Project() {
  const location = useLocation();
  const slug = location.pathname.replace(new RegExp(`^/projects/`), "").replace(/\\$/, "");

  const rawProject = projects[slug];

  if (!rawProject) {
    return <div>404 - Not found</div>; // do 404 page here instead
  }

  const project = rawProject.data;
  const { Content } = project;

  return (
    <div className="h-screen flex items-center justify-center text-2xl">
      <h1>{project.title}</h1>
      <Content />
    </div>
  );
}

export default Project;
