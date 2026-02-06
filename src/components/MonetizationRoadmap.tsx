import React from 'react';

const MonetizationRoadmap: React.FC = () => {
    return (
        <section className="w-full bg-background-light dark:bg-background-dark py-16 lg:py-24">
            <div className="max-w-[1024px] mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-gold-roadmap text-sm font-bold uppercase tracking-widest mb-2">The Roadmap</span>
                    <h2 className="text-[#141018] dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">The Monetization Path</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
                        A structured journey from expertise to scalable revenue.
                    </p>
                </div>
                {/* Horizontal Timeline */}
                <div className="relative w-full py-10">
                    {/* Gold Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700 z-0">
                        <div className="h-full w-full bg-gradient-to-r from-gold-roadmap/20 via-gold-roadmap to-gold-roadmap/20"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {/* Step 1 */}
                        <div className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-6 group">
                            {/* Icon Circle */}
                            <div className="flex-shrink-0 size-14 rounded-full bg-white dark:bg-surface-dark border-2 border-gold-roadmap shadow-glow flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                                <span className="material-symbols-outlined text-gold-roadmap text-3xl">search</span>
                            </div>
                            {/* Content */}
                            <div className="text-left md:text-center">
                                <h3 className="text-lg font-bold text-[#141018] dark:text-white mb-1">Authority Audit</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Identify your unique value proposition and market gap.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-6 group">
                            {/* Vertical Line for Mobile */}
                            <div className="md:hidden absolute left-[27px] -mt-10 h-10 w-[2px] bg-gold-roadmap/50"></div>
                            <div className="flex-shrink-0 size-14 rounded-full bg-white dark:bg-surface-dark border-2 border-gold-roadmap shadow-glow flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                                <span className="material-symbols-outlined text-gold-roadmap text-3xl">package_2</span>
                            </div>
                            <div className="text-left md:text-center">
                                <h3 className="text-lg font-bold text-[#141018] dark:text-white mb-1">IP Packaging</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Turn your years of expertise into proprietary assets.</p>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-6 group">
                            {/* Vertical Line for Mobile */}
                            <div className="md:hidden absolute left-[27px] -mt-10 h-10 w-[2px] bg-gold-roadmap/50"></div>
                            <div className="flex-shrink-0 size-14 rounded-full bg-white dark:bg-surface-dark border-2 border-gold-roadmap shadow-glow flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                                <span className="material-symbols-outlined text-gold-roadmap text-3xl">trending_up</span>
                            </div>
                            <div className="text-left md:text-center">
                                <h3 className="text-lg font-bold text-[#141018] dark:text-white mb-1">Audience Growth</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Build a loyal following of high-value prospects.</p>
                            </div>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-6 group">
                            {/* Vertical Line for Mobile */}
                            <div className="md:hidden absolute left-[27px] -mt-10 h-10 w-[2px] bg-gold-roadmap/50"></div>
                            <div className="flex-shrink-0 size-14 rounded-full bg-primary text-white border-2 border-primary shadow-premium flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                                <span className="material-symbols-outlined text-3xl">monetization_on</span>
                            </div>
                            <div className="text-left md:text-center">
                                <h3 className="text-lg font-bold text-[#141018] dark:text-white mb-1">Monetization</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Scale your revenue through high-ticket offers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonetizationRoadmap;
