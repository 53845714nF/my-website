import React from "react";

// own Components
import SkillBar from "./SkillBar";

// Own types
import type { Category, Skill } from "./categories";

const CategoryCard: React.FC<Category> = ({ title, skills}) => {
    return (
        <div className="card-3d pop group p-8 shrink-0 min-w-[320px] md:min-w-[360px]">
            <h3 className="flex items-center font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>

            {skills.map((skill: Skill) => (
                <SkillBar name={skill.name} percent={skill.percent} />
            ))}
        </div>
    )
};

export default CategoryCard;