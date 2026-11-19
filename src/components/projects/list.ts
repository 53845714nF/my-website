import type { Localized } from "../../i18n/translations";

export interface ProjectItem {
  id: number;
  imageUrl: string;
  /** Intrinsic image size, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
  title: string;
  description: Localized;
  technologies: string[];
  githubUrl: string;
  websiteUrl?: string;
}

const projectList: ProjectItem[] = [
  {
    id: 2,
    imageUrl: "projects/img/dinofind.webp",
    width: 893,
    height: 709,
    title: "Dinofind",
    description: {
      en: "Reverse image search over 30,000 images using DINOv2 embeddings (ONNX) and a Qdrant vector database. Shrank the container image from ~10 GB to ~500 MB (−95 %), drastically cutting storage and CI build times.",
      de: "Bildersuche nach Ähnlichkeit über 30.000 Bilder mit DINOv2-Embeddings (ONNX) und einer Qdrant-Vektordatenbank. Container-Image von ca. 10 GB auf ca. 500 MB verkleinert (−95 %). Deutlich weniger Speicherbedarf und drastisch kürzere CI-Laufzeiten.",
    },
    technologies: ["Golang", "DINOv2", "ONNX", "Qdrant", "React", "Docker"],
    githubUrl: "https://github.com/53845714nF/dinofind2",
    websiteUrl: "https://www.dinofind.com/",
  },
  {
    id: 3,
    imageUrl: "projects/img/malwareuniverse.webp",
    width: 1253,
    height: 868,
    title: "Malwareuniverse",
    description: {
      en: "Tool that helps analysts identify which family a malware sample belongs to, a key step towards attribution. Malware embeddings are reduced to 2D/3D and visualized, so related samples show up as clusters.",
      de: "Tool, das Analysten hilft zu erkennen, zu welcher Familie eine Malware gehört. Ein wichtiger Schritt für die Attribution. Malware-Embeddings werden per Dimensionsreduktion in 2D/3D visualisiert, sodass verwandte Samples als Cluster sichtbar werden.",
    },
    technologies: ["FastAPI", "Python", "React", "Embeddings", "Weaviate"],
    githubUrl: "https://github.com/malwareuniverse",
    websiteUrl: "https://www.malwareuniverse.org/",
  },
  {
    id: 1,
    imageUrl: "projects/img/hackwiki.webp",
    width: 1380,
    height: 662,
    title: "Hackwiki",
    description: {
      en: "My personal knowledge base and a place to share what I learn with others. Topics: hacking, DevOps, home lab and programming.",
      de: "Mein persönlicher Wissensspeicher und ein Ort, an dem ich meine Erfahrungen mit anderen teile. Themen: Hacking, DevOps, Homelab und Programmierung.",
    },
    technologies: ["Hugo", "DevOps", "Security", "Homelab"],
    githubUrl: "https://github.com/53845714nF/hackwiki",
    websiteUrl: "https://www.hackwiki.de/",
  },
  {
    id: 5,
    imageUrl: "projects/img/jwt-hasura.webp",
    width: 918,
    height: 532,
    title: "Hasura JWT",
    description: {
      en: "Lightweight login service for the Hasura GraphQL engine: issues JWTs and offers optional email sign-up. Built because Keycloak was too heavyweight for the use case. Runs in production on Kubernetes.",
      de: "Schlanker Login-Service für die Hasura-GraphQL-Engine: stellt JWTs aus und bietet optional Registrierung per E-Mail. Entstanden, weil Keycloak für den Anwendungsfall zu schwergewichtig war. Läuft produktiv auf Kubernetes.",
    },
    technologies: ["Golang", "GraphQL", "Postgres", "Hasura", "JWT", "Kubernetes", "Helm"],
    githubUrl: "https://github.com/53845714nF/hasura-jwt",
  },
  {
    id: 4,
    imageUrl: "projects/img/packer.webp",
    width: 920,
    height: 661,
    title: "Proxmox Packer Debian",
    description: {
      en: "Builds VM images as code: reproducible and traceable, so it is always clear how and from what an image was created. A solid foundation for golden images in a company. Implemented for Debian on Proxmox at a time when there were no good alternatives.",
      de: "Baut VM-Images als Code: reproduzierbar und nachvollziehbar, sodass jederzeit klar ist, wie und woraus ein Image entstanden ist. Eine solide Grundlage für Golden Images im Unternehmen. Umgesetzt für Debian auf Proxmox, als es dafür noch keine guten Alternativen gab.",
    },
    technologies: ["Packer", "Proxmox", "Debian", "IaC", "Cloud-init", "SaltStack"],
    githubUrl: "https://github.com/53845714nF/packer-proxmox-debian",
  },
  {
    id: 6,
    imageUrl: "projects/img/vunl2pve.webp",
    width: 796,
    height: 421,
    title: "vuln2pve",
    description: {
      en: "Downloads VMs from VulnHub and converts them for Proxmox. Lets you build your own hacking lab, similar to Hack The Box or TryHackMe. Also shows how to migrate VMs from VMware & co. to Proxmox via script, back when the Proxmox GUI could not do this yet.",
      de: "Lädt VMs von VulnHub herunter und konvertiert sie für Proxmox. So lässt sich ein eigenes Hacking-Lab aufbauen, ähnlich wie Hack The Box oder TryHackMe. Zeigt außerdem, wie sich VMs von VMware & Co. per Skript zu Proxmox migrieren lassen, als das in der Proxmox-GUI noch nicht möglich war.",
    },
    technologies: ["Shell", "Proxmox", "VM Migration"],
    githubUrl: "https://github.com/53845714nF/vuln2pve",
  },
];

export default projectList;
