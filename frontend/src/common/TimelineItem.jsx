import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, darkMode }) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative pl-10 md:pl-0 ${item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
        >
            <div className={`absolute top-0 ${item.side === 'left' ? 'left-0 md:left-auto md:right-0' : 'left-0'} w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg`}>
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border-l-4 ${item.side === 'left' ? 'md:border-l-0 md:border-r-4' : ''} border-purple-500`}
            >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className={`font-medium ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    {item.company} • {item.period}
                </p>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default TimelineItem;