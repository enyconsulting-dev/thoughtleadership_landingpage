import React from 'react';

const SuccessStoriesSection: React.FC = () => {
    return (
        <section id="success-stories" className="w-full">
            <section className="px-6 md:px-10 lg:px-40 pt-16 pb-12 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-primary dark:text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Real Results
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                        From Expert to <span className="text-primary dark:text-purple-400 relative inline-block">Icon<span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 -z-10"></span></span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Discover how senior professionals transformed their decades of experience into thriving thought leadership businesses.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-40 pb-20 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            role: "Was: Senior Director of HR",
                            now: "Now: Global Culture Consultant",
                            quote: "\"I stopped trading hours for dollars. My methodology is now licensed by Fortune 500s.\"",
                            metric: "3x Revenue Increase",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZLvRCXnRXsWjrFC-AZ7zZNgVQFtGPkvTiIBH1D9R0I-dXLVnlxXHDeimsbyElvpTZny9iNTEgjPaDHTz3UkoMiRINNn7PRhTV-EAaxFYH-8ELzlBU4eZLJhGW_DXrJH1wWpmdZwJCXSO6BvtLmmjhyUc5zSFu3WkCMyFTJM_tgUVDIGLzrOSQbvBJOiHHMM5ZLnucwSG9W5T6TSp8lGrjZ2QX6PiCn_tyq8ZFPwGTM_7qmF6dMoF0W63JenHXsr02eJaEw03pIk"
                        },
                        {
                            role: "Was: VP of Marketing",
                            now: "Now: Best-Selling Author",
                            quote: "\"The framework gave me the clarity to write my book, which became an instant bestseller.\"",
                            metric: "Wall Street Journal List",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRADS5KVGqVV86n1FYwqjlR5k4myEZkGvJiDA3-E-oufTXcflK1bwfiMpUmsIyA_lE4X6LokCr4oJgXjmCizaRejHw6VtVfJT0ANhihBMXtNSOlg53kRD-TvHY6E6XViGfl7DHmi-4g3f5ofCa69rBV-Un9WSxfxCg6xVKXmwU2CXttRCLs42XPsiRgkdxs4DWMJrVy03HUsOviMROYhM9olL9EUI7zt8C7JF2X8YNzFA64Im4urCH6a9sK8e89ja9KWahUFCQW14"
                        },
                        {
                            role: "Was: Tech Consultant",
                            now: "Now: Keynote Speaker",
                            quote: "\"I went from free webinars to commanding $25k keynotes within 8 months.\"",
                            metric: "50+ Global Stages",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdfM9u1IOzq0TuNN9_9anDDtQpAuv3IBEnQKdOAYaeZeVIWXp8-vMRp538JP0qw66WSgflDXN6SNaBDiefZnBbMxvnIIRbeJ8_L4CebPe7nqIOBSEne14rwBVV9ssJVfAJ4Xiv9_yX3CFumuwRWlEKVJHNLTcggFbvTRWlW00FLEuRBmX2-rWh3_BKf5s83UxE1aO9r-dEKfr3QinjNs8eyznBpIL4R_TQxIY7ULVU7o1KooQjWspF6MEX1XL5AYY3cUzXK1grf0"
                        },
                        {
                            role: "Was: Chief Strategy Officer",
                            now: "Now: Strategic Advisor",
                            quote: "\"TLBS helped me package my IP into a high-ticket advisory offer that sells itself.\"",
                            metric: "$1M+ Annual Run Rate",
                            icon: "person"
                        },
                        {
                            role: "Was: University Professor",
                            now: "Now: Thought Leader",
                            quote: "\"Finally, a business model that values deep expertise over shallow trends.\"",
                            metric: "Featured in HBR",
                            icon: "person_3"
                        },
                        {
                            role: "Was: Sales Director",
                            now: "Now: Sales Trainer & Coach",
                            quote: "\"I built a scalable training program that runs without me needing to be in the room.\"",
                            metric: "400+ Students Enrolled",
                            icon: "person_4"
                        }
                    ].map((story, index) => (
                        <div key={index} className="group bg-white dark:bg-[#1f1a24] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                            <div className="relative h-64 overflow-hidden">
                                {story.image ? (
                                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${story.image}')` }}></div>
                                ) : (
                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                        <span className="material-symbols-outlined text-6xl text-gray-400">{story.icon}</span>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="text-white">
                                        <p className="text-xs font-medium opacity-80 uppercase tracking-wide mb-1">{story.role}</p>
                                        <p className="text-lg font-bold">{story.now}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/20 dark:text-purple-400/20 mb-2">format_quote</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium italic leading-relaxed">
                                        {story.quote}
                                    </p>
                                </div>
                                <div className="mt-auto space-y-6">
                                    <div className="pl-4 border-l-4 border-accent">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Success Metric</p>
                                        <p className="text-xl font-black text-gray-900 dark:text-white">{story.metric}</p>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <a className="inline-flex items-center text-primary dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors group-hover:translate-x-2 duration-300" href="#">
                                            Read Full Story
                                            <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-off-white dark:bg-[#1f1a24] py-20 px-6 md:px-10 lg:px-40 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Join Their Ranks?</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                            Your expertise is valuable. It's time to package it, productize it, and present it to the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="bg-[#F59E0B] hover:bg-[#d97706] text-white text-lg font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95">
                                Join Free Masterclass
                            </button>
                            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-bold px-10 py-4 rounded-xl transition-all active:scale-95">
                                Talk to an Advisor
                            </button>
                        </div>
                        <p className="mt-6 text-sm text-white/60">Limited spots available for the next cohort.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SuccessStoriesSection;
