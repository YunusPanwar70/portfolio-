import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '../utils/motionVariants';

const experiences = [
    {
        year: "2021 - Present",
        role: "Full Stack Developer",
        company: "ABC Tech",
        description: "Built scalable web apps using React and Node.js."
    },
    {
        year: "2019 - 2021",
        role: "Frontend Developer",
        company: "XYZ Corp",
        description: "Worked on responsive UI and optimized performance."
    },
    // Add more as needed
];

const ExperienceTimeline = ({ darkMode }) => {
    return (
        <section id="experience" className="py-20 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
            >
                Work <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-l-2 border-purple-400 pl-6 ml-4"
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="mb-10"
                    >
                        <div className="text-sm text-purple-500 font-medium mb-1">{exp.year}</div>
                        <h4 className="text-xl font-semibold mb-1">{exp.role} at {exp.company}</h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
export default ExperienceTimeline;