import React from 'react';

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback for home if routing was involved, but here we are SPA
            if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: "Programs", id: "programs" },
        { name: "About", id: "about" },
        { name: "Success Stories", id: "success-stories" }, // Updated ID
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="px-6 md:px-10 lg:px-40 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <div className="text-primary dark:text-purple-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <span className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight hidden sm:block">
                        Thought Leadership Business School
                    </span>
                    <span className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight sm:hidden">
                        TLBS
                    </span>
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => link.id ? scrollToSection(link.id) : null}
                                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                    <button
                        onClick={() => scrollToSection('register')}
                        className="bg-[#F59E0B] hover:bg-[#d97706] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                        Join Free Masterclass
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
