import { motion } from 'framer-motion';

const SkillCard = ({ darkMode, icon, title, skills, borderColor, bgColor, textColor }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 ${borderColor}`}
        >
            <div className="flex items-center mb-4">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-opacity-20' : ''} mr-3`}>
                    {icon}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                    <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm ${bgColor} ${textColor} shadow-md`}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;