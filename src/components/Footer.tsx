import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../i18n/context";
import { SOCIAL } from "../config";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center">
        <p>© {new Date().getFullYear()} Sebastian Feustel</p>
        <p>{t.footer.built}</p>
        <a
          href={SOCIAL.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white"
        >
          <FaGithub aria-hidden="true" /> {t.footer.source}
        </a>
      </div>
    </footer>
  );
}
