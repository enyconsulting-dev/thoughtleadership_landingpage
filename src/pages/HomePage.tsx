import React from 'react';
import Hero from '../components/Hero';
import ProgramsGrid from '../components/ProgramsGrid';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import AboutSection from '../components/AboutSection';
import RegistrationSection from '../components/RegistrationSection';
import CredibilityStrip from '../components/CredibilityStrip';
import AudienceGrid from '../components/AudienceGrid';
import MonetizationRoadmap from '../components/MonetizationRoadmap';
import MasterclassTimer from '../components/MasterclassTimer';
import SiteFooter from '../components/SiteFooter';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <CredibilityStrip />
            <AudienceGrid />

            {/* Wrapper for Programs to include the ID and spacing/header if needed */}
            <div id="programs" className="w-full">
                <section className="bg-off-white dark:bg-[#1f1a24] py-16 md:py-24 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                    <div className="px-6 md:px-10 lg:px-40 max-w-[1400px] mx-auto relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 bg-accent/10 px-3 py-1 rounded-full">
                                Our Curriculum
                            </span>
                            <h1 className="text-primary dark:text-purple-400 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                                High-Impact Programs for Future Thought Leaders
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                                Discover comprehensive educational pathways exclusively designed to help you monetize your expertise, scale your global influence, and build a lasting legacy.
                            </p>
                        </div>
                    </div>
                </section>
                <ProgramsGrid />
            </div>

            <SuccessStoriesSection />
            <AboutSection />
            <MonetizationRoadmap />
            <RegistrationSection />
            <MasterclassTimer />
            <SiteFooter />
        </div>
    );
};

export default HomePage;
