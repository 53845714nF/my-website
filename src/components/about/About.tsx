import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../i18n/context";
import { CONTACT_EMAIL, SOCIAL } from "../../config";

const iconLink =
  "group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-3d pop";
const iconClass = "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-28 h-72 w-72 rounded-full bg-indigo-400/30 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-50 left-1/3 h-80 w-80 rounded-full bg-rose-400/30 dark:bg-rose-500/20 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-10">{t.about.title}</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-8">
          <div className="flex justify-center md:justify-end md:col-start-2 md:row-start-1">
            <img
              src="me-560.webp"
              alt={t.about.portraitAlt}
              width={280}
              height={280}
              loading="lazy"
              decoding="async"
              className="w-56 h-56 md:w-70 md:h-70 rounded-full object-cover shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"
            />
          </div>

          <div className="md:col-start-1 md:row-start-1">
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 text-left">
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="md:col-start-1 md:row-start-2 flex items-center gap-4">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <FaLinkedin size={22} className={iconClass} aria-hidden="true" />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="E-Mail" className={iconLink}>
              <FaEnvelope size={22} className={iconClass} aria-hidden="true" />
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <FaGithub size={22} className={iconClass} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
