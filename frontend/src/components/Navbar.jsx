import { motion } from 'framer-motion';
import { HiOutlineLightBulb } from 'react-icons/hi';
import DarkModeToggle from '../common/DarkModeToggle.jsx';

const Navbar = ({ darkMode, toggleDarkMode, activeSection, scrollToSection, menuOpen, setMenuOpen }) => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 ${darkMode ? 'dark bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} shadow-md`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
                        <span className="text-purple-500">{"<"}</span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MY</span>
                        <span className="text-purple-500">{"/>"}</span>
                    </motion.div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize relative ${activeSection === item ? 'text-purple-500 font-medium' : ''}`}
                            >
                                {item}
                                {activeSection === item && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} mobile={true} />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`md:hidden ${darkMode ? 'dark bg-gray-800' : 'bg-white'} px-6 py-4 shadow-lg`}
                    >
                        <div className="flex flex-col space-y-4">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-left py-2 ${activeSection === item ? 'text-purple-500 font-medium' : ''}`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;