import type { Skill } from "./categories";

const SkillBar: React.FC<Skill> = ({ name, percent }) => {
    return (
        <div className="mb-2">
            <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                <span>{name}</span>
                <span>{percent}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-2">
                <div
                    className="h-2 rounded bg-gray-900 dark:bg-white transform-gpu will-change-transform group-hover:scale-x-105 transition-transform duration-300"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    )
};

export default SkillBar;