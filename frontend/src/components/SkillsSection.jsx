import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '../utils/motionVariants';

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Vue.js",
    "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"
];

const SkillsSection = ({ darkMode }) => {
    return (
        <section id="skills" className="py-20 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
            >
                Technical <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-purple-100 text-purple-700'}`}
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
export default SkillsSection;