const projectList = [
  {
    id: 1,
    imageUrl: "projects/img/hackwiki.webp",
    title: "Hackwiki",
    description: "📝 My personal blog about hacking, DevOps, Home Lab and programming. ",
    technologies: ["Hugo", "DevOps", "Security", "Homelab", "Programming"],
    githubUrl: "https://github.com/53845714nF/hackwiki",
    websiteUrl: "https://www.hackwiki.de/"
  },
  {
    id: 2,
    imageUrl: "projects/img/dinofind.webp",
    title: "Dinofind",
    description: "🦕 Dinofind is a Website for finding visually similar images.",
    technologies: ["Flask", "Dinov2", "Minio", "Qdrant-vector-database", "Tailwindcss"],
    githubUrl: "https://github.com/53845714nF/dinofind",
    websiteUrl: "https://www.dinofind.com/"
  },
  {
    id: 3,
    imageUrl: "projects/img/malwareuniverse.webp",
    title: "Malwareuniverse",
    description: "📊 Analysis and visualization of malware vector embeddings using advanced dimension reduction techniques, displayed in 2D or 3D space.",
    technologies: ["FastAPI", "Python", "Nextjs"],
    githubUrl: "https://github.com/malwareuniverse",
    websiteUrl: "https://www.malwareuniverse.org/"
  },
  {
    id: 4,
    imageUrl: "projects/img/packer.webp",
    title: "Proxmox Packer Debian",
    description: "🖥️ Packer to build a basic image of Debian for use on a Proxmox system. Use it as is or as a starting point for a more fully customized image.",
    technologies: ["Packer", "Proxmox", "Debian"],
    githubUrl: "https://github.com/53845714nF/packer-proxmox-debian"
  },
  
  {
    id: 5,
    imageUrl: "projects/img/jwt-hasura.webp",
    title: "Hasura JWT",
    description: "🔑 This service allows you to create JWTs for hasura-graphql-engine. And can have a signup process via email.",
    technologies: ["Golang", "GraphQL", "Postgres", "Hasura", "JWT", "Kubernetes"],
    githubUrl: "https://github.com/53845714nF/hasura-jwt"
  },

  {
    id: 6,
    imageUrl: "projects/img/vunl2pve.webp",
    title: "vuln2pve",
    description: "☣️ Vuln2pve download VM's from Vulnhub and convert this to the Proxmox format. Can be used by CTF players who prefer Proxmox.",
    technologies: ["Shell", "Proxmox"],
    githubUrl: "https://github.com/53845714nF/vuln2pve"
  }
];

export default projectList;