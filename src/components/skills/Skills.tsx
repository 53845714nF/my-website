import React from "react";

// Own Components
import CategoryCard from "./CategoryCard";

// Own Data
import { categories } from "./categories";


const Skills: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-white dark:bg-gray-900 tilt">

      {/* Hintergrund-Schatten / Glow-Effekte */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-30 left-1/3 h-80 w-80 rounded-full bg-rose-400/30 dark:bg-rose-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-sky-400/30 dark:bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-16 h-80 w-80 rounded-full bg-emerald-400/30 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      <h2 className="text-3xl font-bold mb-8 z-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white max-w-6xl mx-auto w-full">
        {categories.map((category) => (
          <CategoryCard title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
