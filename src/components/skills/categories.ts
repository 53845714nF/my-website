export interface Skill {
  name: string;
  percent: number;
}

export interface Category {
    title: string;
    skills: Skill[];
}

export const categories: Category[] = [
  {
    title: "Development",
    skills: [
      { name: "Backend", percent: 80 },
      { name: "Relational database", percent: 80},
      { name: "Frontend", percent: 70 },
      { name: "GraphQL", percent: 60 },
      { name: "Vector Databases", percent: 60 },
    ],
  },
  {
    title: "Administration & DevOps",
    skills: [
      { name: "Container", percent: 90 },
      { name: "Linux/vServer", percent: 90 },
      { name: "Git/GitHub", percent: 90 },
      { name: "IaC", percent: 80 },
      { name: "CI/CD", percent: 70 },
      { name: "Cloud", percent: 60 },
      { name: "Kubernetes", percent: 60 },
    ],
  },
  {
    title: "Interests",
    skills: [
      { name: "Security", percent: 90 },
      { name: "Project management", percent: 80 },
      { name: "Clean Code", percent: 60 },
      { name: "Data Science", percent: 40 },
    ],
  },
];