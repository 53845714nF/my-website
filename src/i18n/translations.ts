export type Language = "de" | "en";

/** A string available in every supported language. */
export type Localized = Record<Language, string>;

/** Resolves a value that is either language-neutral or localized. */
export function localize(value: string | Localized, lang: Language): string {
  return typeof value === "string" ? value : value[lang];
}

const en = {
  meta: {
    title: "Sebastian Feustel | Platform, DevOps & Security Engineer",
    description:
      "Platform, DevOps & security engineer with a background in Linux, containers, CI/CD and infrastructure as code. Experience, skills and projects.",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    switchLanguage: "Auf Deutsch wechseln",
    skipToContent: "Skip to content",
  },
  hero: {
    availability: "Open to full-time roles from Jan 2027",
    greeting: "Hi, I'm Sebastian Feustel",
    role: "Platform, DevOps & Security Engineer",
    lead: "I build and secure systems with a focus on",
    words: ["Linux", "Containers", "Automation", "Isolation", "Attack & Defense"],
    viewExperience: "View Experience →",
    contact: "Get In Touch",
  },
  about: {
    title: "About",
    paragraphs: [
      "I’m a platform and security-focused software engineer with a strong background in Linux and container technologies. I design, build, and operate containerized systems with a focus on automation, isolation, traceability and security.",
      "My work spans system architecture, networking, CI/CD pipelines and secure platform operation. I trained as an IT specialist for system integration, hold a B.Sc. in Computer Science and am currently pursuing my M.Sc. I have a strong open-source affinity and prefer hands-on engineering over abstraction for its own sake.",
    ],
    portraitAlt: "Portrait of Sebastian Feustel",
  },
  experience: {
    title: "Experience & Education",
    work: "Work",
    education: "Education",
    current: "Current",
    volunteerTitle: "Community",
    publicationsTitle: "Publications & Talks",
  },
  skills: {
    title: "Skills",
    intro: "Grouped by how I use them today.",
  },
  projects: {
    title: "Projects",
    code: "Code",
    website: "Website",
  },
  footer: {
    built: "Built & deployed via GitHub Actions",
    source: "Source on GitHub",
  },
};

export type Translation = typeof en;

const de: Translation = {
  meta: {
    title: "Sebastian Feustel | Platform, DevOps & Security Engineer",
    description:
      "Platform-, DevOps- & Security-Engineer mit Schwerpunkt Linux, Container, CI/CD und Infrastructure as Code. Berufserfahrung, Skills und Projekte.",
  },
  nav: {
    home: "Start",
    about: "Über mich",
    experience: "Erfahrung",
    skills: "Skills",
    projects: "Projekte",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toDark: "Dunkles Design aktivieren",
    toLight: "Helles Design aktivieren",
    switchLanguage: "Switch to English",
    skipToContent: "Zum Inhalt springen",
  },
  hero: {
    availability: "Offen für eine Festanstellung ab Januar 2027",
    greeting: "Hi, ich bin Sebastian Feustel",
    role: "Platform, DevOps & Security Engineer",
    lead: "Ich baue und sichere Systeme mit Fokus auf",
    words: ["Linux", "Container", "Automatisierung", "Isolation", "Sicherheit"],
    viewExperience: "Zur Erfahrung →",
    contact: "Kontakt aufnehmen",
  },
  about: {
    title: "Über mich",
    paragraphs: [
      "Ich bin Software-Engineer mit Schwerpunkt Plattform und Sicherheit und habe einen starken Hintergrund in Linux- und Container-Technologien. Ich entwerfe, baue und betreibe containerisierte Systeme mit Fokus auf Automatisierung, Isolation, Nachvollziehbarkeit und Sicherheit.",
      "Meine Arbeit umfasst Systemarchitektur, Netzwerke, CI/CD-Pipelines und den sicheren Plattformbetrieb. Ich bin ausgebildeter Fachinformatiker für Systemintegration, habe einen B.Sc. in Informatik und studiere aktuell im Master. Ich habe eine große Open-Source-Affinität und ziehe praktisches Engineering der Abstraktion um ihrer selbst willen vor.",
    ],
    portraitAlt: "Portrait von Sebastian Feustel",
  },
  experience: {
    title: "Erfahrung & Ausbildung",
    work: "Beruf",
    education: "Studium",
    current: "Aktuell",
    volunteerTitle: "Engagement",
    publicationsTitle: "Publikationen & Vorträge",
  },
  skills: {
    title: "Skills",
    intro: "Gruppiert danach, wie ich sie derzeit einsetze.",
  },
  projects: {
    title: "Projekte",
    code: "Code",
    website: "Website",
  },
  footer: {
    built: "Gebaut & deployed via GitHub Actions",
    source: "Quellcode auf GitHub",
  },
};

export const translations: Record<Language, Translation> = { en, de };
