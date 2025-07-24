// src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 px-6 py-4 shadow-md transition backdrop-blur-md ${darkMode ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-900"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold">
                    <span className="text-purple-500">{"<"}</span>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Yunus
                    </span>
                    <span className="text-purple-500">{"/>"}</span>
                </a>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex gap-6 font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`hover:text-pink-500 transition ${darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleDarkMode}
                        className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
