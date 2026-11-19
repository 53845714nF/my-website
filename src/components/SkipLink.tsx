import { useLanguage } from "../i18n/context";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-gray-900"
    >
      {t.nav.skipToContent}
    </a>
  );
}
