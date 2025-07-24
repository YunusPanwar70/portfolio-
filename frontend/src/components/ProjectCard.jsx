import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, darkMode }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
        <div className="h-48 overflow-hidden relative">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <div className="p-6">
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                    <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 shadow-md`}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
            <div className="flex space-x-4">
                <motion.a whileHover={{ x: 5 }} href={project.link} className="flex items-center text-pink-600">
                    <FiExternalLink className="mr-1" /> Live Demo
                </motion.a>
                <motion.a whileHover={{ x: 5 }} href={project.github} className="flex items-center text-gray-600">
                    <FaGithub className="mr-1" /> Code
                </motion.a>
            </div>
        </div>
    </motion.div>
);
export default ProjectCard;