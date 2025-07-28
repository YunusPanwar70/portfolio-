import { motion } from 'framer-motion';
import { HiOutlineLightBulb } from 'react-icons/hi';

const DarkModeToggle = ({ darkMode, toggleDarkMode, mobile = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className={`p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg ${mobile ? 'mr-4' : ''}`}
    >
      <HiOutlineLightBulb className="w-5 h-5" />
    </motion.button>
  );
};

export default DarkModeToggle;