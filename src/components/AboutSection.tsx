import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <div id="about" className="w-full">
            <section className="pt-24 pb-16 px-6 md:px-10 lg:px-40 text-center max-w-[1280px] mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary dark:text-purple-300 dark:bg-primary/20 text-xs font-bold tracking-widest uppercase mb-8">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    About Us
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary dark:text-purple-400 mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
                    Empowering the Next Generation of Global Authorities
                </h1>
            </section>
            <section className="px-6 md:px-10 lg:px-40 pb-20 lg:pb-32">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="relative group order-2 lg:order-1">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] transform transition-transform duration-700 hover:scale-[1.01]">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS5-m1ZkAsNa-TJcl4R14QZ_4goJc1jkkm-HaomFBUj4WrUZmBF817Kmze_quFm-r-fJNTrKEK63HHfB3FWfwVSROUqzwnRzVdhaKp1aJtOEEis1N4KGoikQ2b-Ww0MBRfnxq3HjLt0iK-DYiQC0N5TZczilewOUpkLfFHB78QFEMm2u-kZWIYWY6RgAD8xUGZxvvOnntTDieyDvI_mPv6kOw-4Sirqs5BQ9vbNL5kQSBDCh3rBVG3kVxwWS0hs1wBhJo7nfVF_Ds')" }}></div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white font-medium text-sm border-l-2 border-accent pl-3">Founder & CEO delivering the annual 'State of Influence' keynote.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 order-1 lg:order-2">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">A Mission Born from Necessity</h2>
                                <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
                            </div>
                            <div className="prose prose-lg prose-gray dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                                <p className="text-xl font-medium text-primary dark:text-purple-300">
                                    It started with a simple observation: true expertise is rare, but the noise in the marketplace is deafening.
                                </p>
                                <p>
                                    Thought Leadership Business School was founded to bridge the critical gap between deep subject matter expertise and widespread market influence. We realized that the world's most brilliant minds—doctors, engineers, veteran executives—were often the quietest, while charismatic novices dominated the conversation.
                                </p>
                                <p>
                                    We decided to change that equation. We built a curriculum designed not just for marketing, but for <strong>legacy</strong>. Our approach combines rigorous academic frameworks with cutting-edge digital strategy, allowing senior professionals to productize their life's work.
                                </p>
                                <p>
                                    Today, we are more than a school; we are a movement of 2,000+ global authorities reshaping their industries through integrity, impact, and intelligence.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZLvRCXnRXsWjrFC-AZ7zZNgVQFtGPkvTiIBH1D9R0I-dXLVnlxXHDeimsbyElvpTZny9iNTEgjPaDHTz3UkoMiRINNn7PRhTV-EAaxFYH-8ELzlBU4eZLJhGW_DXrJH1wWpmdZwJCXSO6BvtLmmjhyUc5zSFu3WkCMyFTJM_tgUVDIGLzrOSQbvBJOiHHMM5ZLnucwSG9W5T6TSp8lGrjZ2QX6PiCn_tyq8ZFPwGTM_7qmF6dMoF0W63JenHXsr02eJaEw03pIk')" }}></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRADS5KVGqVV86n1FYwqjlR5k4myEZkGvJiDA3-E-oufTXcflK1bwfiMpUmsIyA_lE4X6LokCr4oJgXjmCizaRejHw6VtVfJT0ANhihBMXtNSOlg53kRD-TvHY6E6XViGfl7DHmi-4g3f5ofCa69rBV-Un9WSxfxCg6xVKXmwU2CXttRCLs42XPsiRgkdxs4DWMJrVy03HUsOviMROYhM9olL9EUI7zt8C7JF2X8YNzFA64Im4urCH6a9sK8e89ja9KWahUFCQW14')" }}></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtdfM9u1IOzq0TuNN9_9anDDtQpAuv3IBEnQKdOAYaeZeVIWXp8-vMRp538JP0qw66WSgflDXN6SNaBDiefZnBbMxvnIIRbeJ8_L4CebPe7nqIOBSEne14rwBVV9ssJVfAJ4Xiv9_yX3CFumuwRWlEKVJHNLTcggFbvTRWlW00FLEuRBmX2-rWh3_BKf5s83UxE1aO9r-dEKfr3QinjNs8eyznBpIL4R_TQxIY7ULVU7o1KooQjWspF6MEX1XL5AYY3cUzXK1grf0')" }}></div>
                                </div>
                                <p className="text-sm font-medium text-gray-500">Led by a faculty of industry veterans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-off-white dark:bg-[#1f1a24] px-6 md:px-10 lg:px-40 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary dark:text-purple-400 font-bold tracking-widest uppercase text-xs mb-3 block">Our Values</span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 dark:text-white mb-6">"Influence is a Responsibility."</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            We believe that those who possess the knowledge to solve the world's most pressing problems have a moral duty to share it effectively.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-purple-900/20 dark:text-purple-300">
                                <span className="material-symbols-outlined text-2xl">diamond</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Substance Over Style</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We reject empty platitudes. We prioritize deep, actionable insights and evidence-based methodologies. Quality is our non-negotiable metric for success.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-purple-900/20 dark:text-purple-300">
                                <span className="material-symbols-outlined text-2xl">handshake</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Radical Generosity</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We teach our students to give away their best ideas. We know that in the expertise economy, generosity builds unshakeable trust and authority.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-8 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-purple-900/20 dark:text-purple-300">
                                <span className="material-symbols-outlined text-2xl">public</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Perspective</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Thought leadership knows no borders. We build authorities that resonate across cultures, time zones, and markets to create global impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-primary dark:bg-[#4a2475] px-6 md:px-10 lg:px-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Define Your Category?</h2>
                    <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join the ranks of elite professionals turning their expertise into a global enterprise. The world is waiting for your contribution.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-accent hover:bg-[#d97706] text-white text-lg font-bold px-10 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
                        >
                            Explore Our Programs
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-medium px-10 py-4 rounded-lg transition-all flex items-center justify-center">
                            Contact Admissions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
