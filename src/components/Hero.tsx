import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../i18n/context";
import { CONTACT_EMAIL } from "../config";
import Typing from "./Typing";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 h-64 w-64 rounded-full bg-pink-400/40 dark:bg-pink-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-purple-400/30 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-3xl" />
      </div>

      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {t.hero.availability}
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.greeting}</h1>
      <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 mb-3">{t.hero.role}</p>
      <Typing />

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#experience" className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2.5 btn-3d pop">
          {t.hero.viewExperience}
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="gap-2 border border-gray-400 dark:border-gray-600 px-5 py-2.5 btn-3d pop hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaEnvelope aria-hidden="true" /> {t.hero.contact}
        </a>
      </div>
    </div>
  );
}
