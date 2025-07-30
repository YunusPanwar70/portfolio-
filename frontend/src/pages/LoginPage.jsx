import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = ({ darkMode, onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Login failed');
            }

            const data = await response.json();

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            toast.success(data.msg);
            onLogin();
            navigate('/');
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-md p-8 rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
                <div className="text-center mb-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-bold mb-2"
                    >
                        <span className="text-purple-500">{"<"}</span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Login
                        </span>
                        <span className="text-purple-500">{"/>"}</span>
                    </motion.div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Enter your details to continue
                    </p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`p-3 mb-4 rounded-lg ${darkMode ? 'bg-red-900/50' : 'bg-red-100'} text-red-600 dark:text-red-300`}
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Name
                        </label>
                        <div className={`flex items-center p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus-within:border-purple-500' : 'bg-white border-gray-300 focus-within:border-purple-500'}`}>
                            <FaUser className={`mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full bg-transparent focus:outline-none ${darkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                                placeholder="Your name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Email
                        </label>
                        <div className={`flex items-center p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus-within:border-purple-500' : 'bg-white border-gray-300 focus-within:border-purple-500'}`}>
                            <FaEnvelope className={`mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full bg-transparent focus:outline-none ${darkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300 shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin" />
                                Logging in...
                            </>
                        ) : 'Login'}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginPage;