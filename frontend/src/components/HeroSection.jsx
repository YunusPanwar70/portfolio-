// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ darkMode }) => {
    return (
        <section className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className={`text-lg md:text-xl max-w-xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    I build beautiful and responsive web applications using modern JavaScript frameworks.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="mt-8"
                >
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;