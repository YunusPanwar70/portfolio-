import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialIcons = ({ darkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-6"
        >
            <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300`}
            >
                <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300`}
            >
                <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg hover:from-sky-500 hover:to-sky-600 transition duration-300`}
            >
                <FaTwitter className="text-xl" />
            </motion.a>
            <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:from-red-600 hover:to-pink-600 transition duration-300`}
            >
                <FaEnvelope className="text-xl" />
            </motion.a>
        </motion.div>
    );
};

export default SocialIcons;