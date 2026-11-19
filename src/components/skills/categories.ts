import type { Localized } from "../../i18n/translations";

export interface SkillGroup {
  area: Localized;
  /** Plain strings for tech names; Localized for terms that need translating. */
  skills: (string | Localized)[];
}

export interface SkillTier {
  id: string;
  title: Localized;
  description: Localized;
  groups: SkillGroup[];
}

const area = {
  platform: { en: "Platform & Ops", de: "Plattform & Betrieb" },
  automation: { en: "Automation & CI/CD", de: "Automatisierung & CI/CD" },
  dev: { en: "Development", de: "Entwicklung" },
  security: { en: "Security", de: "Security" },
  data: { en: "Data", de: "Daten" },
  cloud: { en: "Cloud & Orchestration", de: "Cloud & Orchestrierung" },
} satisfies Record<string, Localized>;


export const skillTiers: SkillTier[] = [
  {
    id: "core",
    title: { en: "Core", de: "Kernkompetenzen" },
    description: {
      en: "Used daily, years of hands-on experience.",
      de: "Täglich im Einsatz, mehrjährige Praxiserfahrung.",
    },
    groups: [
      { area: area.platform, skills: ["Linux", "Docker / Containers", "Proxmox VE", "Networking (VLAN, DNS, LDAP)"] },
      { area: area.automation, skills: ["Git", "GitHub Actions", "Bash"] },
      { area: area.security, skills: ["Container Security", "Vulnerability Scanning"] },
    ],
  },
  {
    id: "experienced",
    title: { en: "Experienced", de: "Erfahren" },
    description: {
      en: "Used productively in projects.",
      de: "Produktiv in Projekten eingesetzt.",
    },
    groups: [
      { area: area.automation, skills: ["Terraform", "Packer", "SaltStack", "GitLab CI"] },
      {
        area: area.cloud,
        skills: ["Kubernetes", { en: "High Availability & Clustering", de: "Hochverfügbarkeit & Clustering" }],
      },
      { area: area.dev, skills: ["Python", "Go", "TypeScript / React", "FastAPI", "GraphQL / Hasura"] },
      { area: area.data, skills: ["PostgreSQL", "MySQL", "Vector DBs (Qdrant, Weaviate)"] },
      { area: area.security, skills: ["Greenbone"] },
    ],
  },
  {
    id: "familiar",
    title: { en: "Familiar", de: "Grundkenntnisse" },
    description: {
      en: "Solid foundation, growing experience.",
      de: "Solide Basis, wachsende Erfahrung.",
    },
    groups: [
      { area: area.cloud, skills: ["AWS", "Azure"] },
      {
        area: area.dev,
        skills: [{ en: "AI-assisted development (LLMs)", de: "KI-gestützte Entwicklung (LLMs)" }, "C++ / Qt"],
      },
      { area: area.data, skills: ["RAG", "Data Science"] },
      { area: area.security, skills: ["Snort", "Wazuh", "Forensics (Wireshark, Volatility)"] },
    ],
  },
];
