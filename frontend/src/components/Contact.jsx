import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = ({ darkMode }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/contact', data);

            if (response.status === 201) {
                toast.success("Message sent successfully!");
                reset();
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                toast.error(error.response.data.error || "Failed to send message");
            } else if (error.request) {
                toast.error("No response from server. Is the backend running?");
            } else {
                toast.error("Error setting up request");
            }
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 flex items-center">
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Get In <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
                </motion.h2>

                <div className="md:flex">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Feel free to reach out to me for any questions or opportunities.
                        </p>

                        <div className="space-y-6">
                            <motion.div whileHover={{ x: 5 }} className="flex items-start">
                                <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:yunuspanwar78@gmail.com" className={`${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-800'}`}>
                                        yunuspanwar78@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} className="flex items-start">
                                <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:+918504065078" className={`${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-800'}`}>
                                        +918504065078
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} className="flex items-start">
                                <div className={`p-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Jodhpur, Rajasthan-342001</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://github.com/YunusPanwar70"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:from-gray-800 hover:to-black transition duration-300`}
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="text-xl" />
                                </motion.a>

                                <motion.a
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://linkedin.com/in/-yunus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300`}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="text-xl" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <form
                            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t-4 border-purple-500`}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Send Me a Message</h3>

                            <div className="mb-6">
                                <label htmlFor="name" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 text-white' : 'bg-white border-gray-300 focus:border-purple-500 text-gray-800'} focus:ring-2 focus:ring-purple-200 transition duration-300`}
                                    placeholder="John Doe"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 text-white' : 'bg-white border-gray-300 focus:border-purple-500 text-gray-800'} focus:ring-2 focus:ring-purple-200 transition duration-300`}
                                    placeholder="john@example.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="phone" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Phone No</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 text-white' : 'bg-white border-gray-300 focus:border-purple-500 text-gray-800'} focus:ring-2 focus:ring-purple-200 transition duration-300`}
                                    placeholder="+91 1234567890"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9+]{10,15}$/,
                                            message: "Please enter a valid phone number"
                                        }
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 text-white' : 'bg-white border-gray-300 focus:border-purple-500 text-gray-800'} focus:ring-2 focus:ring-purple-200 transition duration-300`}
                                    placeholder="Project Inquiry"
                                    {...register("subject", { required: "Subject is required" })}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 text-white' : 'bg-white border-gray-300 focus:border-purple-500 text-gray-800'} focus:ring-2 focus:ring-purple-200 transition duration-300`}
                                    placeholder="Your message here..."
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: {
                                            value: 10,
                                            message: "Message must be at least 10 characters"
                                        }
                                    })}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;