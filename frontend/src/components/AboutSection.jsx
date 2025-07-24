import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight, container, item } from '../utils/motionVariants';

const AboutSection = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2015;

    return (
        <section>
            <section id="about" className="min-h-screen py-20 flex items-center">
                <div className="w-full md:flex">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
                    >
                        <div className={`relative w-64 h-64 rounded-lg overflow-hidden border-2 ${darkMode ? 'border-purple-500' : 'border-purple-300'} shadow-lg`}>
                            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                                <span className="text-6xl">🧑‍💻</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pink-400/20 blur-xl"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromRight}
                        viewport={{ once: true }}
                        className="md:w-2/3 md:pl-12"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            I'm a passionate Full-Stack Developer with {experience}+ years of experience in building web applications.
                        </p>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                        </p>
                        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            When I'm not coding, you'll find me hiking, reading tech blogs, or contributing to open-source projects.
                        </p>
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default AboutSection;
