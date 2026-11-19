import { useLanguage } from "../../i18n/context";
import projectList from "./list";
import Project from "./Project";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-16 h-80 w-80 rounded-full bg-emerald-400/30 dark:bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-fuchsia-400/30 dark:bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-teal-400/30 dark:bg-teal-500/20 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-8">{t.projects.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {projectList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
