import { motion } from 'framer-motion';
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaMobileAlt,
    FaGitAlt,
    FaLinux,
    FaLaptopCode,
    FaTools
} from 'react-icons/fa';
import { SiDocker, SiPostgresql, SiMongodb, SiMysql } from 'react-icons/si';
import SkillCard from '../common/SkillCard';
import TimelineItem from '../common/TimelineItem';

const Skills = ({ darkMode }) => {
    const frontendSkills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'];
    const backendSkills = ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Docker'];
    const databaseSkills = ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Optimization'];
    const versionControl = ['Git', 'GitHub'];
    const coreConcepts = ['OOP', 'WebSockets', 'WebRTC', 'JWT', 'Authentication', 'API Integration'];
    const otherSkills = ['Problem Solving', 'Linux'];

    const experienceItems = [
        {
            title: "Frontend Developer",
            company: "Freelancer Italy Based Client Project",
            period: "Jul 2024 - Aug 2024",
            description: "Led a team of 5 developers to build scalable web applications. Implemented CI/CD pipelines reducing deployment time by 40%.",
            side: "right"
        },
        {
            title: "Full Stack Developer",
            company: "FeliTech Solutions",
            period: "Sep 2024 - Jan 2025",
            description: "Developed a free and open-source resume builder focused on user privacy and customization.",
            side: "left"
        },
        {
            title: "Full Stack Developer",
            company: "FeliTech Solutions",
            period: "Feb 2024 - Jul 2024",
            description: "Designed and developed a responsive UI and user-friendly event management interface using React.",
            side: "right"
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 flex items-center">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaCode className="text-purple-500 text-2xl" />}
                        title="Frontend Development"
                        skills={frontendSkills}
                        borderColor="border-purple-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-purple-50'}
                        textColor="text-purple-600"
                    />

                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaServer className="text-pink-500 text-2xl" />}
                        title="Backend Development"
                        skills={backendSkills}
                        borderColor="border-pink-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-pink-50'}
                        textColor="text-pink-600"
                    />

                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaDatabase className="text-blue-500 text-2xl" />}
                        title="Database"
                        skills={databaseSkills}
                        borderColor="border-blue-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-blue-50'}
                        textColor="text-blue-600"
                    />

                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaGitAlt className="text-orange-500 text-2xl" />}
                        title="Version Control"
                        skills={versionControl}
                        borderColor="border-orange-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-orange-50'}
                        textColor="text-orange-600"
                    />

                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaLaptopCode className="text-green-500 text-2xl" />}
                        title="Core Concepts"
                        skills={coreConcepts}
                        borderColor="border-green-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-green-50'}
                        textColor="text-green-600"
                    />

                    <SkillCard
                        darkMode={darkMode}
                        icon={<FaLinux className="text-yellow-500 text-2xl" />}
                        title="Other Skills"
                        skills={otherSkills}
                        borderColor="border-yellow-500"
                        bgColor={darkMode ? 'bg-gray-800' : 'bg-yellow-50'}
                        textColor="text-yellow-600"
                    />
                </motion.div>

                <div className="mt-12">
                    <motion.h3
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-semibold mb-8 text-center"
                    >
                        My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
                    </motion.h3>

                    <div className="relative">
                        <div className={`absolute left-4 md:left-1/2 h-full w-1 ${darkMode ? 'bg-gray-600' : 'bg-gradient-to-b from-purple-500 to-pink-500'} transform -translate-x-1/2`}></div>

                        <div className="space-y-8">
                            {experienceItems.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    darkMode={darkMode}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;