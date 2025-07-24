import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ darkMode }) => {
    return (
        <form
            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-purple-500`}
        >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <div className="mb-6">
                <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-300 transition duration-300`}
                    placeholder="John Doe"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block font-medium mb-2">Your Email</label>
                <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-300 transition duration-300`}
                    placeholder="john@example.com"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-300 transition duration-300`}
                    placeholder="Freelance Opportunity"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-2">Message</label>
                <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-300 transition duration-300`}
                    placeholder="Write your message..."
                ></textarea>
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg hover:from-purple-600 hover:to-pink-600"
            >
                Send Message
            </motion.button>
        </form>
    );
};

export default ContactForm;