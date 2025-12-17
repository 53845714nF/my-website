import React from "react";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectProps {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    websiteUrl: string | undefined;
}

const ProjectComponent: React.FC<ProjectProps> = ({ id, imageUrl, title, description, technologies, githubUrl, websiteUrl }) => {
    return (
        <div key={id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden text-gray-900 dark:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" >

            <div className="w-full h-48 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover object-top" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-left">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed text-left">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-xs">{tech}</span>
                    ))}
                </div>

                <div className="flex space-x-3">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm"
                    >
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                    </a>
                    {websiteUrl &&
                        <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-900 dark:bg-white rounded-lg dark:text-gray-900 transition-colors duration-300 text-sm text-white"
                        >
                            <FaExternalLinkAlt className="w-4 h-4 mr-2" />Website
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;