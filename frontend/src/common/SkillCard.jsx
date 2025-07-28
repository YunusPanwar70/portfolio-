import { motion } from 'framer-motion';

const SkillCard = ({
    darkMode,
    icon,
    title,
    skills,
    borderColor,
    bgColor,
    textColor,
    showIcons = false
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-6 rounded-xl ${bgColor} shadow-lg border-t-4 ${borderColor}`}
        >
            <div className="flex items-center mb-4 gap-3">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-opacity-20' : ''}`}>
                    {icon}
                </div>
                <h3 className={`text-xl font-semibold ${textColor}`}>{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <motion.span
                        key={showIcons ? skill.name : skill}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm ${bgColor} ${textColor} shadow-md flex items-center gap-2`}
                    >
                        {showIcons && skill.icon}
                        {showIcons ? skill.name : skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;