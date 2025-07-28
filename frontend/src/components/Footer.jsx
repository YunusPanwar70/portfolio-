import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SocialIcons from '../common/SocialIcons';

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
                <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-4">
                    <span className="text-purple-500">{"<"}</span>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                    <span className="text-purple-500">{"/>"}</span>
                </motion.div>

                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Building digital experiences that matter.</p>

                <SocialIcons darkMode={darkMode} />

                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    © {new Date().getFullYear()}Mohammad Yunus. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;