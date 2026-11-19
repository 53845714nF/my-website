import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaUsers, FaBookOpen } from "react-icons/fa";
import { useLanguage } from "../../i18n/context";
import { localize } from "../../i18n/translations";
import { experience, publications, volunteer, type ExperienceEntry } from "./data";

function Entry({ entry }: { entry: ExperienceEntry }) {
  const { lang, t } = useLanguage();
  const Icon = entry.kind === "work" ? FaBriefcase : FaGraduationCap;

  return (
    <li className="relative pl-12 md:pl-14">
      <span
        className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 ring-4 ring-white dark:ring-gray-900"
        aria-hidden="true"
      >
        <Icon size={15} />
      </span>

      <article className="card-3d p-6 text-left">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
            {entry.kind === "work" ? t.experience.work : t.experience.education}
          </span>
          {entry.period && (
            <span className="text-xs text-gray-600 dark:text-gray-400">· {localize(entry.period, lang)}</span>
          )}
          {entry.current && (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
              {t.experience.current}
            </span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold">{entry.title[lang]}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {entry.orgUrl ? (
            <a href={entry.orgUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              {entry.org[lang]}
            </a>
          ) : (
            entry.org[lang]
          )}
        </p>

        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300 marker:text-gray-400">
          {entry.highlights.map((h) => (
            <li key={h.en}>{h[lang]}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>

        {entry.links && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {entry.links.map((link) => (
              <a
                key={link.label.en}
                href={localize(link.url, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                <FaExternalLinkAlt size={11} aria-hidden="true" />
                {link.label[lang]}
              </a>
            ))}
          </div>
        )}
      </article>
    </li>
  );
}

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex flex-col items-center px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-amber-400/25 dark:bg-amber-500/15 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-72 w-72 rounded-full bg-violet-400/25 dark:bg-violet-500/15 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-cyan-400/25 dark:bg-cyan-500/15 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-10 text-center">{t.experience.title}</h2>

      <ol className="relative w-full max-w-3xl space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-gray-300 dark:before:bg-gray-700">
        {experience.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </ol>

      <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3 text-left">
        <section className="card-3d p-6 md:col-span-2" aria-labelledby="publications-heading">
          <h3 id="publications-heading" className="mb-3 flex items-center gap-2 font-semibold">
            <FaBookOpen aria-hidden="true" /> {t.experience.publicationsTitle}
          </h3>
          <ul className="space-y-2 text-sm">
            {publications.map((p) => (
              <li key={p.label.en}>
                <a href={localize(p.url, lang)} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline-offset-4 hover:underline dark:text-gray-300">
                  {p.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-3d p-6" aria-labelledby="volunteer-heading">
          <h3 id="volunteer-heading" className="mb-3 flex items-center gap-2 font-semibold">
            <FaUsers aria-hidden="true" /> {t.experience.volunteerTitle}
          </h3>
          <p className="text-sm font-medium">{volunteer.title[lang]}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <a href={volunteer.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              {volunteer.org[lang]}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
