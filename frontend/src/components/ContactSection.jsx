import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../utils/motionVariants';
import ContactForm from './ContactForm';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

const ContactSection = ({ darkMode }) => {
    return (
        <section id="contact" className="min-h-screen py-20 flex items-center">
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Get In <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
                </motion.h2>

                <div className="md:flex">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromLeft}
                        viewport={{ once: true }}
                        className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Feel free to reach out. I'm always open to discussing new ideas or freelance work.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <FaEnvelope className="text-purple-500 text-xl mr-3" />
                                <a href="mailto:yunuspanwar78@gmail.com" className={`${darkMode ? 'text-pink-400' : 'text-pink-600'} hover:underline`}>
                                    yunuspanwar78@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center">
                                <FaPhone className="text-purple-500 text-xl mr-3" />
                                <a href="tel:+918504065078" className={`${darkMode ? 'text-pink-400' : 'text-pink-600'} hover:underline`}>
                                    +91 85040 65078
                                </a>
                            </div>

                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-purple-500 text-xl mr-3" />
                                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Jodhpur, Rajasthan - 342001</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-8 flex space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
                                <FaGithub />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition">
                                <FaLinkedin />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-r from-sky-400 to-sky-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
                                <FaTwitter />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromRight}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <ContactForm darkMode={darkMode} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;