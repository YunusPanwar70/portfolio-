import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
    return (
        <section id="about" className="min-h-screen py-20 flex items-center">
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About</span> Me
                </motion.h2>

                <div className="md:flex items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
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
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:w-2/3 md:pl-12"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            I'm a passionate Full-Stack Developer with {new Date().getFullYear() - 2015}+ years of experience in building web applications.
                            I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express, MongoDB).
                        </p>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            My journey in web development started when I was in college and I've been in love with coding ever since.
                            I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                        </p>
                        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            When I'm not coding, you'll find me hiking, reading tech blogs, or contributing to open-source projects.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} shadow-md`}
                            >
                                <span className="font-medium">Location:</span> Jodhpur Rajasthan
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-pink-100'} shadow-md`}
                            >
                                <span className="font-medium">Education:</span> Bachelor of Computer Applications
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} shadow-md`}
                            >
                                <span className="font-medium">Experience:</span> 1 year
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;