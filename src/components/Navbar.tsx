import { useEffect, useRef, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useLanguage } from "../i18n/context";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
  ];

  const controls = (
    <>
      <button
        type="button"
        onClick={() => setLang(lang === "de" ? "en" : "de")}
        aria-label={t.nav.switchLanguage}
        title={t.nav.switchLanguage}
        className="px-2.5 py-1.5 text-sm font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {lang === "de" ? "EN" : "DE"}
      </button>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? t.nav.toLight : t.nav.toDark}
        title={darkMode ? t.nav.toLight : t.nav.toDark}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      </button>
    </>
  );

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50" aria-label="Main">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="font-bold text-lg">Sebastian Feustel</a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1">{controls}</div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          {controls}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <ul id="mobile-menu" className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 pb-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
