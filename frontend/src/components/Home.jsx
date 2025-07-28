import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = ({ darkMode, scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center">
            <div className="w-full">
                <div className="md:flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ staggerChildren: 0.2 }}
                        className="md:w-1/2 mb-12 md:mb-0"
                    >
                        <motion.div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span></h1>
                        </motion.div>
                        <motion.div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        1000,
                                        'Frontend Developer',
                                        1000,
                                        'Backend Developer',
                                        1000,
                                        'MERN Developer',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h2>
                        </motion.div>
                        <motion.div>
                            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                I build exceptional digital experiences with modern technologies.
                                Passionate about solving problems through clean, efficient code.
                            </p>
                        </motion.div>
                        <motion.div className="flex space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('projects')}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className={`border-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-gray-800' : 'border-purple-500 text-purple-600 hover:bg-purple-50'} px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg`}
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-purple-500' : 'border-purple-300'} shadow-xl`}>
                            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-pink-400/20 blur-xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-400/20 blur-xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;