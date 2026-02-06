import React from 'react';

const AudienceGrid: React.FC = () => {
    const audienceCards = [
        {
            icon: "schedule",
            title: "The Corporate Veteran",
            description: "You are stuck trading time for money. You want to scale your impact beyond the boardroom and stop billing by the hour."
        },
        {
            icon: "lightbulb",
            title: "The Industry Expert",
            description: "You have deep knowledge and respect in your field, but lack the digital platform to reach a wider, global audience effectively."
        },
        {
            icon: "auto_stories",
            title: "The Aspiring Author",
            description: "You have a book in you. You need a proven strategy to monetize your expertise before, during, and after you publish."
        },
        {
            icon: "mic",
            title: "The Keynote Speaker",
            description: "You are already on stages but rely on event organizers. You want to build your own audience and own the relationship."
        }
    ];

    return (
        <section className="px-6 md:px-10 lg:px-40 py-20 bg-white dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Section Header */}
                    <div className="md:w-1/3 sticky top-24">
                        <h2 className="text-primary dark:text-purple-400 text-sm font-bold tracking-widest uppercase mb-3">
                            Audience
                        </h2>
                        <h3 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Is This For You?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
                            Our curriculum is exclusively designed for senior experts who have outgrown traditional consulting models.
                        </p>
                        <a className="inline-flex items-center text-primary dark:text-purple-400 font-bold hover:underline decoration-2 underline-offset-4" href="#">
                            Read full criteria
                            <span className="material-symbols-outlined text-lg ml-1">arrow_right_alt</span>
                        </a>
                    </div>
                    {/* Cards Grid */}
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {audienceCards.map((card, index) => (
                            <div key={index} className="group p-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-off-white dark:bg-white/5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-primary dark:text-purple-300 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{card.icon}</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudienceGrid;
