import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageProvider";
import SkipLink from "./components/SkipLink";

function App() {
  // The inline script in index.html already applied the stored / system theme
  // before first paint, so the class on <html> is the source of truth.
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", darkMode ? "#111827" : "#ffffff");
  }, [darkMode]);

  const toggleDarkMode = (value: boolean) => {
    setDarkMode(value);
    try {
      localStorage.setItem("theme", value ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LanguageProvider>
      <div className="relative overflow-clip bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <SkipLink />
        <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
