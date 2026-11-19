import { useLanguage } from "../../i18n/context";
import { skillTiers } from "./categories";

const tierStyle: Record<string, string> = {
  core: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  experienced: "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100",
  familiar: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
};

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-30 left-1/3 h-80 w-80 rounded-full bg-rose-400/30 dark:bg-rose-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-sky-400/30 dark:bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-16 h-80 w-80 rounded-full bg-emerald-400/30 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-3">{t.skills.title}</h2>
      <p className="mb-10 text-gray-600 dark:text-gray-300">{t.skills.intro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full text-left">
        {skillTiers.map((tier) => (
          <section key={tier.id} className="card-3d p-6 md:p-8" aria-labelledby={`tier-${tier.id}`}>
            <h3 id={`tier-${tier.id}`} className="text-lg font-semibold">{tier.title[lang]}</h3>
            <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">{tier.description[lang]}</p>

            <div className="space-y-4">
              {tier.groups.map((group) => (
                <div key={group.area.en}>
                  <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    {group.area[lang]}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={typeof skill === "string" ? skill : skill.en}
                        className={`rounded-md px-2.5 py-1 text-sm ${tierStyle[tier.id]}`}
                      >
                        {typeof skill === "string" ? skill : skill[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
