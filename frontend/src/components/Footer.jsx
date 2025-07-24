import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { container, item } from '../utils/motionVariants';

const Footer = ({ darkMode }) => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`py-12 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md`}
        >
            <div className="container mx-auto px-6 text-center">
                <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-4">
                    <span className="text-purple-500">&lt;</span>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                    <span className="text-purple-500">/&gt;</span>
                </motion.div>

                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Building digital experiences that matter.
                </p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center space-x-6 mb-6"
                >
                    <motion.a
                        variants={item}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    >
                        <FaGithub className="text-xl" />
                    </motion.a>

                    <motion.a
                        variants={item}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    >
                        <FaLinkedin className="text-xl" />
                    </motion.a>

                    <motion.a
                        variants={item}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg"
                    >
                        <FaTwitter className="text-xl" />
                    </motion.a>

                    <motion.a
                        variants={item}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    >
                        <FaEnvelope className="text-xl" />
                    </motion.a>
                </motion.div>

                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    © {new Date().getFullYear()} Mohammad Yunus. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};
export default Footer;