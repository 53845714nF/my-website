import type { Localized } from "../../i18n/translations";

export interface Link {
  label: Localized;
  /** Localized when the target exists in both languages. */
  url: string | Localized;
}

export interface ExperienceEntry {
  id: string;
  kind: "work" | "education";
  title: Localized;
  org: Localized;
  orgUrl?: string;
  /** e.g. "2021-2024"; shown when set. Use Localized when it contains words. */
  period?: string | Localized;
  current?: boolean;
  highlights: Localized[];
  tags: string[];
  links?: Link[];
}

/** Reverse-chronological. */
export const experience: ExperienceEntry[] = [
  {
    id: "msc",
    period: "2023-2026",
    kind: "education",
    current: true,
    title: { en: "M.Sc. Computer Science", de: "M.Sc. Informatik" },
    org: { en: "Brandenburg University of Applied Sciences", de: "Technische Hochschule Brandenburg" },
    orgUrl: "https://www.th-brandenburg.de/",
    highlights: [
      {
        en: "Co-author of the paper “Attributierung von Stego-Malware Vorfällen mittels Open Source Intelligence” (Sicherheit 2026).",
        de: "Mitautor des Papers „Attributierung von Stego-Malware Vorfällen mittels Open Source Intelligence“ (Sicherheit 2026).",
      },
      {
        en: "Clustered malware families by embedding opcodes with a language model and storing them in Weaviate, the basis of Malwareuniverse.",
        de: "Clustering von Malware-Familien: Opcodes per Sprachmodell eingebettet und in Weaviate gespeichert, als Grundlage für Malwareuniverse.",
      },
      {
        en: "Built a full-stack app (FastAPI, Vue) and deployed it to AWS with Terraform and GitHub Actions.",
        de: "Full-Stack-App (FastAPI, Vue) entwickelt und mit Terraform und GitHub Actions auf AWS deployed.",
      },
      {
        en: "Focus on IT & media forensics, cryptography and network security; talk on C2 frameworks.",
        de: "Schwerpunkte IT- & Medienforensik, Kryptographie und Netzwerksicherheit; Vortrag zu C2-Frameworks.",
      },
    ],
    tags: ["Terraform", "AWS", "GitHub Actions", "FastAPI", "Weaviate", "Forensics"],
  },
  {
    id: "kdab",
    period: { en: "2024 · 3 months", de: "2024 · 3 Monate" },
    kind: "work",
    title: { en: "Software Engineering Intern", de: "Praktikum Softwareentwicklung" },
    org: { en: "KDAB", de: "KDAB" },
    orgUrl: "https://www.kdab.com/",
    highlights: [
      {
        en: "Contributed to Spix, an open-source GUI testing framework for Qt applications.",
        de: "Mitarbeit an Spix, einem Open-Source-Framework für GUI-Tests von Qt-Anwendungen.",
      },
      {
        en: "Gained in-depth experience in automated software testing in a C++/Qt consultancy.",
        de: "Vertiefte Erfahrung im automatisierten Software-Testing bei einem C++/Qt-Beratungsunternehmen.",
      },
    ],
    tags: ["C++", "Qt", "Testing"],
    links: [{ label: { en: "Spix on GitHub", de: "Spix auf GitHub" }, url: "https://github.com/faaxm/spix" }],
  },
  {
    id: "bsc",
    period: "2021-2024",
    kind: "education",
    title: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik" },
    org: { en: "Brandenburg University of Applied Sciences", de: "Technische Hochschule Brandenburg" },
    orgUrl: "https://www.th-brandenburg.de/",
    highlights: [
      {
        en: "Thesis: comparison of 10 static vulnerability scanners for OCI container images (Trivy, Grype, Clair, Snyk, Docker Scout …) using a self-built Flask/React platform.",
        de: "Abschlussarbeit: Vergleich von 10 statischen Schwachstellenscannern für OCI-Container-Images (Trivy, Grype, Clair, Snyk, Docker Scout …) mit einer selbst entwickelten Flask/React-Plattform.",
      },
      {
        en: "Network security: hands-on attacks and defense with Snort (IDS), Wazuh (SIEM), RADIUS and firewalls.",
        de: "Netzwerksicherheit: praktische Angriffe und Abwehr mit Snort (IDS), Wazuh (SIEM), RADIUS und Firewalls.",
      },
      {
        en: "Many team projects (Spring, React, Go, Django) shipped with Docker and GitHub Actions.",
        de: "Zahlreiche Teamprojekte (Spring, React, Go, Django) mit Docker und GitHub Actions umgesetzt.",
      },
    ],
    tags: ["Container Security", "Docker", "Python", "React", "Snort", "Wazuh"],
    links: [
      { label: { en: "Thesis", de: "Abschlussarbeit" }, url: "https://doi.org/10.25933/opus4-3202" }
    ],
  },
  {
    id: "aei",
    period: "2018-2021",
    kind: "work",
    title: {
      en: "Apprenticeship as IT Specialist for System Integration",
      de: "Ausbildung zum Fachinformatiker für Systemintegration",
    },
    org: { en: "Max Planck Institute for Gravitational Physics (AEI)", de: "Max-Planck-Institut für Gravitationsphysik (AEI)" },
    orgUrl: "https://www.aei.mpg.de/",
    highlights: [
      {
        en: "Final project: migration of the virtualization platform from VMware to Proxmox VE.",
        de: "Abschlussprojekt: Migration der Virtualisierungsplattform von VMware zu Proxmox VE.",
      },
      {
        en: "Introduced configuration management with SaltStack: states versioned in Git and tested in a GitLab CI pipeline.",
        de: "Konfigurationsmanagement mit SaltStack eingeführt: States in Git versioniert und per GitLab-CI-Pipeline getestet.",
      },
      {
        en: "High availability: HAProxy load balancing for Apache and MySQL clustering with Corosync/Pacemaker; evaluated NFS, iSCSI, Fibre Channel, ZFS and Btrfs.",
        de: "Hochverfügbarkeit: HAProxy-Loadbalancing für Apache und MySQL-Cluster mit Corosync/Pacemaker; Evaluierung von NFS, iSCSI, Fibre Channel, ZFS und Btrfs.",
      },
      {
        en: "Rolled out Greenbone vulnerability management; operated networks (VLAN, LAG), LDAP and DNS; automation with Bash and Python.",
        de: "Greenbone-Schwachstellenmanagement eingeführt; Betrieb von Netzwerk (VLAN, LAG), LDAP und DNS; Automatisierung mit Bash und Python.",
      },
      {
        en: "Built Arduino-based server-room monitoring feeding Zabbix; gave talks including a lightning talk on Bcachefs.",
        de: "Arduino-basiertes Serverraum-Monitoring mit Zabbix-Anbindung gebaut; Vorträge, u. a. Lightning Talk zu Bcachefs.",
      },
    ],
    tags: ["Linux", "Proxmox VE", "SaltStack", "GitLab CI", "HAProxy", "Greenbone", "Zabbix"],
  },
];

export const volunteer = {
  title: { en: "Volunteer Press Spokesperson", de: "Ehrenamtlicher Pressesprecher" },
  org: { en: "Brandenburg Linux User Group (BraLUG)", de: "Brandenburger Linux User Group (BraLUG)" },
  url: "https://www.bralug.de/",
};

export const publications: Link[] = [
  {
    label: {
      en: "Attributierung von Stego-Malware Vorfällen mittels OSINT (Sicherheit 2026)",
      de: "Attributierung von Stego-Malware Vorfällen mittels OSINT (Sicherheit 2026)",
    },
    url: "https://doi.org/10.18420/sicherheit2026_11",
  },
  {
    label: {
      en: "Bachelor's thesis: static vulnerability scanners for OCI container images",
      de: "Bachelorarbeit: Statische Schwachstellenscanner für OCI-Container-Images",
    },
    url: "https://doi.org/10.25933/opus4-3202",
  },
  {
    label: {
      en: "Talk at BraLUG: Introduction to Vector Databases (embeddings, RAG & practice)",
      de: "Vortrag bei der BraLUG: Einführung in Vektordatenbanken (Embeddings, RAG & Praxis)",
    },
    url: {
      en: "https://www.hackwiki.de/en/blog/vektordatenbanken/",
      de: "https://www.hackwiki.de/blog/vektordatenbanken/",
    },
  },
  {
    label: { en: "Talk: C2 Frameworks", de: "Vortrag: C2-Frameworks" },
    url: "https://www.hackwiki.de/blog/c2-frameworks/",
  },
  {
    label: { en: "Talk: Format String Attacks", de: "Vortrag: Format-String-Angriffe" },
    url: "https://fsv.hackwiki.de/",
  },
];
