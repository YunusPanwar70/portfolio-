import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`py-12 ${darkMode ? 'dark bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md`}
        >
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-bold mb-4"
                >
                    <span className="text-purple-500">{"<"}</span>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Mohammad Yunus
                    </span>
                    <span className="text-purple-500">{"/>"}</span>
                </motion.div>

                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Building digital experiences that matter.
                </p>

                <div className="flex justify-center gap-4 mb-6">
                    {/* Email */}
                    <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:yunuspanwar78@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:from-red-600 hover:to-pink-600 transition duration-300`}
                        aria-label="Email"
                    >
                        <FaEnvelope className="text-xl" />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://linkedin.com/in/-yunus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300`}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-xl" />
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/YunusPanwar70"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:from-gray-800 hover:to-black transition duration-300`}
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-xl" />
                    </motion.a>
                </div>

                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    © {new Date().getFullYear()} Mohammad Yunus. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;