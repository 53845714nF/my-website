import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../i18n/context";
import type { ProjectItem } from "./list";

export default function Project({ project }: { project: ProjectItem }) {
  const { lang, t } = useLanguage();
  const { imageUrl, width, height, title, description, technologies, githubUrl, websiteUrl } = project;

  return (
    <article className="card-3d flex flex-col overflow-hidden text-left">
      <div className="w-full h-48 overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <img
          src={imageUrl}
          alt={`Screenshot: ${title}`}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{description[lang]}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <li key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-xs">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}: ${t.projects.code} (GitHub)`}
            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm"
          >
            <FaGithub className="w-4 h-4 mr-2" aria-hidden="true" />
            {t.projects.code}
          </a>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${t.projects.website}`}
              className="flex items-center px-4 py-2 bg-gray-900 dark:bg-white rounded-lg dark:text-gray-900 transition-colors duration-300 text-sm text-white"
            >
              <FaExternalLinkAlt className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.projects.website}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
