import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import ProjectCard from '../common/ProjectCard';
import DecoreSystem from "../assets/decor.png";
import ChatApp from "../assets/chat-app.png";
import portfolio from '../assets/portfolio.png';

const Projects = ({ darkMode, scrollToSection }) => {
    const projects = [
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
            image: ChatApp
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
            title: "Food Recipes",
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
            image: portfolio
        },
        {
            title: "Weather Forecast App",
            description: "Real-time weather forecasting application with 5-day predictions.",
            technologies: ["Vue.js", "OpenWeather API", "Geolocation"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 flex items-center">
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >My<span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            darkMode={darkMode}
                        />
                    ))}
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`border-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-gray-800' : 'border-purple-500 text-purple-600 hover:bg-purple-50'} px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg`}
                    >
                        View All Projects
                    </motion.button>
                </motion.div> */}
            </div>
        </section>
    );
};
export default Projects;