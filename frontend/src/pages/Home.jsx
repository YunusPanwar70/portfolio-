import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceTimeline />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
