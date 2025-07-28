import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import DecoreSystem from "../assets/decor.png";

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
            setMenuOpen(false);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/data', data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // json-server usually returns 201 for successful POST
            if (response.status !== 201) {
                toast.error("Failed to store data");
                return;
            }

            toast.success("Data processed successfully.");
        } catch (error) {
            console.error("[Error]: Failed to submit data", error);
            toast.error("An error occurred while submitting the data.");
        }
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const slideInFromLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const slideInFromRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'}`}>
            <ToastContainer position="top-right" autoClose={2000} pauseOnHover={true} />
            {/* Navigation */}
            <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed w-full z-50 ${darkMode ? 'dark bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} shadow-md`}            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold" >
                            <span className="text-purple-500">{"<"}</span>
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                            <span className="text-purple-500">{"/>"}</span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <motion.button key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection(item)} className={`capitalize relative ${activeSection === item ? 'text-purple-500 font-medium' : ''}`}   >
                                    {item}
                                    {activeSection === item && (
                                        <motion.span layoutId="nav-underline" className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500" transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />
                                    )}
                                </motion.button>
                            ))}
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleDarkMode} className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                                <HiOutlineLightBulb className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleDarkMode} className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg mr-4">
                                <HiOutlineLightBulb className="w-5 h-5" />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
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
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`md:hidden ${darkMode ? 'dark bg-gray-800' : 'bg-white'} px-6 py-4 shadow-lg`}   >
                        <div className="flex flex-col space-y-4">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <motion.button key={item} whileHover={{ x: 5 }} onClick={() => scrollToSection(item)} className={`capitalize text-left py-2 ${activeSection === item ? 'text-purple-500 font-medium' : ''}`}>{item}</motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 pt-24 pb-12">
                {/* Home Section */}
                <section id="home" className="min-h-screen flex items-center">
                    <div className="w-full">
                        <div className="md:flex items-center justify-between">
                            <motion.div initial="hidden" animate="visible" variants={container} className="md:w-1/2 mb-12 md:mb-0" >
                                <motion.div variants={item}>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                        Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                                    </h1>
                                </motion.div>
                                <motion.div variants={item}>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                                        <TypeAnimation sequence={[
                                            'Full Stack Developer',
                                            1000,
                                            'Frontend Specialist',
                                            1000,
                                            'Backend Engineer',
                                            1000,
                                        ]} wrapper="span" speed={50} repeat={Infinity} /></h2>
                                </motion.div>
                                <motion.div variants={item}>
                                    <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        I build exceptional digital experiences with modern technologies.
                                        Passionate about solving problems through clean, efficient code.
                                    </p>
                                </motion.div>
                                <motion.div variants={item} className="flex space-x-4">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg">View My Work</motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className={`border-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-gray-800' : 'border-purple-500 text-purple-600 hover:bg-purple-50'} px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg`}>Contact Me</motion.button>
                                </motion.div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="md:w-1/2 flex justify-center"                >
                                <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-purple-500' : 'border-purple-300'} shadow-xl`}>
                                    {/* Replace with your image */}
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

                {/* About Section */}
                <section id="about" className="min-h-screen py-20 flex items-center">
                    <div className="w-full">
                        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center"   >
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About</span> Me
                        </motion.h2>
                        <div className="md:flex items-center">
                            <motion.div initial="hidden" whileInView="visible" variants={slideInFromLeft} viewport={{ once: true }} className="md:w-1/3 mb-8 md:mb-0 flex justify-center"   >
                                <div className={`relative w-64 h-64 rounded-lg overflow-hidden border-2 ${darkMode ? 'border-purple-500' : 'border-purple-300'} shadow-lg`}>
                                    {/* Replace with your image */}
                                    <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                                        <span className="text-6xl">🧑‍💻</span>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pink-400/20 blur-xl"></div>
                                </div>
                            </motion.div>
                            <motion.div initial="hidden" whileInView="visible" variants={slideInFromRight} viewport={{ once: true }} className="md:w-2/3 md:pl-12"   >
                                <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    I'm a passionate Full Stack Developer with {new Date().getFullYear() - 2015}+ years of experience in building web applications.
                                    I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express, MongoDB).
                                </p>
                                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    My journey in web development started when I was in college and I've been in love with coding ever since.
                                    I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                                </p>
                                <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    When I'm not coding, you'll find me hiking, reading tech blogs, or contributing to open-source projects.
                                </p>
                                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-4" >
                                    <motion.div variants={item} whileHover={{ y: -5 }} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} shadow-md`}   >
                                        <span className="font-medium">Location:</span> Jodhpur Rajasthan
                                    </motion.div>
                                    <motion.div variants={item} whileHover={{ y: -5 }} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-pink-100'} shadow-md`}     >
                                        <span className="font-medium">Education:</span> Bachelor of Computer Applications
                                    </motion.div>
                                    <motion.div variants={item} whileHover={{ y: -5 }} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} shadow-md`} >
                                        <span className="font-medium">Experience:</span> 1 year
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="min-h-screen py-20 flex items-center">
                    <div className="w-full">
                        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center"  >
                            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
                        </motion.h2>

                        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-12"  >
                            {/* Frontend Skills */}
                            <motion.div variants={item} whileHover={{ y: -10 }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-purple-500`}       >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                                        <FaCode className="text-purple-500 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Frontend Development</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'].map(skill => (
                                        <motion.span key={skill} whileHover={{ scale: 1.1 }} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 shadow-md`}   >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Backend Skills */}
                            <motion.div variants={item} whileHover={{ y: -10 }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-pink-500`}    >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-pink-500/20 mr-3"><FaServer className="text-pink-500 text-xl" /> </div>
                                    <h3 className="text-xl font-semibold">Backend Development</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['Node.js', 'Express', 'NestJS', 'Docker'].map(skill => (
                                        <motion.span key={skill} whileHover={{ scale: 1.1 }} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-pink-100'} text-pink-600 shadow-md`}>{skill}</motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Database Skills */}
                            <motion.div variants={item} whileHover={{ y: -10 }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-blue-500`}  >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-blue-500/20 mr-3">
                                        <FaDatabase className="text-blue-500 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Database & DevOps</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['MongoDB', 'PostgreSQL', 'MySQL', 'Database Optimization'].map(skill => (
                                        <motion.span key={skill} whileHover={{ scale: 1.1 }} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} text-blue-600 shadow-md`}  >{skill}</motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Other Skills */}
                            <motion.div variants={item} whileHover={{ y: -10 }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-green-500`}>
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-green-500/20 mr-3">
                                        <FaMobile className="text-green-500 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Other Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['Problem Solving', 'OOP', 'WebSockets', 'WebRTC', 'JWT', 'Authentication'].map(skill => (
                                        <motion.span key={skill} whileHover={{ scale: 1.1 }} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-green-100'} text-green-600 shadow-md`}>{skill}</motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience Timeline */}
                        <div className="mt-12">
                            <motion.h3 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-2xl font-semibold mb-6 text-center" >
                                My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
                            </motion.h3>
                            <div className="relative">
                                {/* Timeline line */}
                                <div className={`absolute left-4 md:left-1/2 h-full w-1 ${darkMode ? 'bg-gray-600' : 'bg-gradient-to-b from-purple-500 to-pink-500'} transform -translate-x-1/2`}></div>

                                {/* Timeline items */}
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: "Frontend Developer",
                                            company: "Freelancer Italy Based Client Project.",
                                            period: "July 2024 - August 2024 ",
                                            description: "Led a team of 5 developers to build scalable web applications. Implemented CI/CD pipelines reducing deployment time by 40%.",
                                            side: "right"
                                        },
                                        {
                                            title: "Full Stack Developer",
                                            company: "FeliTech Solutions",
                                            period: "2018 - 2021",
                                            description: "Developed a free and open-source resume builder focused on user privacy and customization.",
                                            side: "left"
                                        },
                                        {
                                            title: "Full Stack Developer",
                                            company: "FeliTech Solutions",
                                            period: "2016 - 2018",
                                            description: "Designed and developed a responsive UI and user-friendly event management interface using React.",
                                            side: "right"
                                        },
                                        {
                                            title: "Bachelor of Computer Applications",
                                            company: "Lucky Institute of Professional Studies (Affiliated with JNVU)",
                                            period: "2023 - 2026",
                                            description: "Graduated with honors. Specialized in software engineering and database systems.",
                                            side: "left"
                                        }].map((item, index) => (
                                            <motion.div key={index} initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className={`relative pl-10 md:pl-0 ${item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}    >
                                                <div className={`absolute top-0 ${item.side === 'left' ? 'left-0 md:left-auto md:right-0' : 'left-0'} w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg`}>
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                </div>
                                                <motion.div whileHover={{ scale: 1.02 }} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border-l-4 ${item.side === 'left' ? 'md:border-l-0 md:border-r-4' : ''} border-purple-500`}                                            >
                                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                                    <p className={`font-medium ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{item.company} • {item.period}</p>
                                                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-screen py-20 flex items-center">
                    <div className="w-full">
                        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center"    >
                            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                        </motion.h2>
                        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Decore System",
                                    description: "Multi-page product-based web app with GSAP animations, jQuery logic, restricted access, and responsive cart functionality.",
                                    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "GSAP"],
                                    link: "https://decoresystem.netlify.app/",
                                    image: DecoreSystem
                                },
                                {
                                    title: "Chat App",
                                    description: "Collaborative task management application with real-time updates and team features.",
                                    technologies: ["React", "Node", "Express", "Tailwind"],
                                    link: "#",
                                    github: "#",
                                    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                },
                                {
                                    title: "Streamify",
                                    description: "Analytics dashboard for social media managers with data visualization.",
                                    technologies: ["Next.js", "Chart.js", "Tailwind CSS"],
                                    link: "#",
                                    github: "#",
                                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                },
                                {
                                    title: "Function Generator Tool",
                                    description: "Application to search recipes by ingredients with nutritional information.",
                                    technologies: ["HTML5", "CSS5", "JavaScript"],
                                    link: "#",
                                    github: "#",
                                    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                },
                                {
                                    title: "Portfolio Website",
                                    description: "Custom portfolio website with blog functionality and contact form.",
                                    technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
                                    link: "#",
                                    github: "#",
                                    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                },
                                {
                                    title: "Weather Forecast App",
                                    description: "Real-time weather forecasting application with 5-day predictions.",
                                    technologies: ["Vue.js", "OpenWeather API", "Geolocation"],
                                    link: "#",
                                    github: "#",
                                    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                }].map((project, index) => (
                                    <motion.div key={index} variants={item} whileHover={{ y: -10 }} className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}     >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{project.title}</h3>
                                        </div>
                                        <div className="p-6">
                                            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, i) => (
                                                    <motion.span key={i} whileHover={{ scale: 1.1 }} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 shadow-md`}      >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                            <div className="flex space-x-4">
                                                <motion.a whileHover={{ x: 5 }} href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-800'}`}    >
                                                    <FiExternalLink className="mr-1" /> Live Demo
                                                </motion.a>
                                                {/* <motion.a whileHover={{ x: 5 }} href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}  >
                                                    <FaGithub className="mr-1" /> Code
                                                </motion.a> */}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mt-12 text-center"    >
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`border-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-gray-800' : 'border-purple-500 text-purple-600 hover:bg-purple-50'} px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg`}       >
                                View All Projects
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen py-20 flex items-center">
                    <div className="w-full">
                        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center"    >
                            Get In <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
                        </motion.h2>

                        <div className="md:flex">
                            <motion.div initial="hidden" whileInView="visible" variants={slideInFromLeft} viewport={{ once: true }} className="md:w-1/2 mb-12 md:mb-0 md:pr-8" >
                                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

                                <div className="space-y-6">
                                    <motion.div whileHover={{ x: 5 }} className="flex items-start">
                                        <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                            <FaEnvelope className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <a href="mailto:dev@example.com" className={`${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-800'}`}  >yunuspanwar78@gmail.com</a>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ x: 5 }} className="flex items-start"   >
                                        <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <a href="tel:+1234567890" className={`${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-800'}`}  >+918504065078</a>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ x: 5 }} className="flex items-start"  >
                                        <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Location</h4>
                                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Johdpur Rajasthan-342001</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold mb-4">Follow Me</h4>
                                    <div className="flex space-x-4">
                                        <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300`} >
                                            <FaGithub className="text-xl" />
                                        </motion.a>
                                        <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300`} >
                                            <FaLinkedin className="text-xl" />
                                        </motion.a>
                                        <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg hover:from-sky-500 hover:to-sky-600 transition duration-300`} >
                                            <FaTwitter className="text-xl" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" variants={slideInFromRight} viewport={{ once: true }} className="md:w-1/2"    >
                                <form className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-purple-500`} onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

                                    <div className="mb-6">
                                        <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                                        <input type="text" id="name" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'} focus:ring-2 focus:ring-purple-200 transition duration-300`} placeholder="John Doe"  {...register("name", { required: "name is required." })} />
                                        {errors && errors.name && (
                                            <div>{errors?.name?.message}</div>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block font-medium mb-2">Your Email</label>
                                        <input type="email" id="email" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'} focus:ring-2 focus:ring-purple-200 transition duration-300`} placeholder="john@example.com" {...register("email", { required: "email is required." })} />
                                        {errors && errors.email && (
                                            <div>{errors?.email?.message}</div>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block font-medium mb-2">Your Phone No</label>
                                        <input type="text" id="phone" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'} focus:ring-2 focus:ring-purple-200 transition duration-300`} placeholder="+91 1234567890" {...register("email", { required: "email is required." })} />
                                        {errors && errors.email && (
                                            <div>{errors?.email?.message}</div>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                                        <input type="text" id="subject" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'} focus:ring-2 focus:ring-purple-200 transition duration-300`} placeholder="Project Inquiry" {...register("subject", { required: "subject is required." })} />
                                        {errors && errors.subject && (
                                            <div>{errors?.subject?.message}</div>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block font-medium mb-2">Message</label>
                                        <textarea id="message" rows="5" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'} focus:ring-2 focus:ring-purple-200 transition duration-300`} placeholder="Your message here..."      {...register("textarea", { required: "text area is required." })}></textarea>
                                        {errors && errors.textarea && (
                                            <div>{errors?.textarea?.message}</div>
                                        )}
                                    </div>
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg"  >Send Message</motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`py-12 ${darkMode ? 'dark bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md`} >
                <div className="container mx-auto px-6 text-center">
                    <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-4" >
                        <span className="text-purple-500">{"<"}</span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mohammad Yunus</span>
                        <span className="text-purple-500">{"/>"}</span>
                    </motion.div>
                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Building digital experiences that matter.</p>
                    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center space-x-6 mb-6"  >
                        <motion.a variants={item} whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300`}   >
                            <FaGithub className="text-xl" />
                        </motion.a>
                        <motion.a variants={item} whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300`}   >
                            <FaLinkedin className="text-xl" />
                        </motion.a>
                        <motion.a variants={item} whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg hover:from-sky-500 hover:to-sky-600 transition duration-300`} >
                            <FaTwitter className="text-xl" />
                        </motion.a>
                        <motion.a variants={item} whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:from-red-600 hover:to-pink-600 transition duration-300`} >
                            <FaEnvelope className="text-xl" />
                        </motion.a>
                    </motion.div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>© {new Date().getFullYear()}Mohammad Yunus. All rights reserved.</p>
                </div>
            </motion.footer>
        </div>
    );
};
export default Portfolio;