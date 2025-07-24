import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'dark' : ''} transition-all duration-500`}>
            <main className={`bg-${darkMode ? 'gray-900' : 'white'} text-${darkMode ? 'white' : 'black'} transition-all duration-300`}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HeroSection darkMode={darkMode} />
                <AboutSection darkMode={darkMode} />
                <ProjectsSection darkMode={darkMode} />
                <ContactSection darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </div>
    );
};
export default Portfolio;