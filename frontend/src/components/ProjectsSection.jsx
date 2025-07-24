import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '../utils/motionVariants';
import ProjectCard from './ProjectCard';
import projects from '../data/projects'; // Make sure you create this file or import the array

const ProjectsSection = ({ darkMode }) => {
    return (
        <section id="projects" className="py-20 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
            >
                My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} darkMode={darkMode} />
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-gray-800' : 'border-purple-500 text-purple-600 hover:bg-purple-50'} px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg`}
                >
                    View All Projects
                </motion.button>
            </motion.div>
        </section>
    );
};
export default ProjectsSection;