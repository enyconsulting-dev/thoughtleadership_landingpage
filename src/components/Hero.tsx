import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative px-6 md:px-10 lg:px-40 py-12 lg:py-20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto w-full">
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Hero Text */}
                    <div className="flex-1 flex flex-col gap-8 w-full lg:max-w-[60%] z-10">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-primary dark:text-purple-400 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                Turn Your Knowledge Into Influence, Impact, and Income
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                                The premier accelerator for senior professionals ready to productize their expertise and leave a legacy.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-purple-900 text-white text-base font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                            >
                                Start Your Journey
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                            <button
                                onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium px-6 py-4 flex items-center gap-2 transition-colors"
                            >
                                <span className="material-symbols-outlined">play_circle</span>
                                Watch Success Stories
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZLvRCXnRXsWjrFC-AZ7zZNgVQFtGPkvTiIBH1D9R0I-dXLVnlxXHDeimsbyElvpTZny9iNTEgjPaDHTz3UkoMiRINNn7PRhTV-EAaxFYH-8ELzlBU4eZLJhGW_DXrJH1wWpmdZwJCXSO6BvtLmmjhyUc5zSFu3WkCMyFTJM_tgUVDIGLzrOSQbvBJOiHHMM5ZLnucwSG9W5T6TSp8lGrjZ2QX6PiCn_tyq8ZFPwGTM_7qmF6dMoF0W63JenHXsr02eJaEw03pIk')" }}></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRADS5KVGqVV86n1FYwqjlR5k4myEZkGvJiDA3-E-oufTXcflK1bwfiMpUmsIyA_lE4X6LokCr4oJgXjmCizaRejHw6VtVfJT0ANhihBMXtNSOlg53kRD-TvHY6E6XViGfl7DHmi-4g3f5ofCa69rBV-Un9WSxfxCg6xVKXmwU2CXttRCLs42XPsiRgkdxs4DWMJrVy03HUsOviMROYhM9olL9EUI7zt8C7JF2X8YNzFA64Im4urCH6a9sK8e89ja9KWahUFCQW14')" }}></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtdfM9u1IOzq0TuNN9_9anDDtQpAuv3IBEnQKdOAYaeZeVIWXp8-vMRp538JP0qw66WSgflDXN6SNaBDiefZnBbMxvnIIRbeJ8_L4CebPe7nqIOBSEne14rwBVV9ssJVfAJ4Xiv9_yX3CFumuwRWlEKVJHNLTcggFbvTRWlW00FLEuRBmX2-rWh3_BKf5s83UxE1aO9r-dEKfr3QinjNs8eyznBpIL4R_TQxIY7ULVU7o1KooQjWspF6MEX1XL5AYY3cUzXK1grf0')" }}></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+2k</div>
                            </div>
                            <p>Join 2,000+ experts</p>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-[40%] aspect-[4/5] lg:aspect-square relative rounded-2xl overflow-hidden shadow-2xl group">
                        {/* Decorative bg blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS5-m1ZkAsNa-TJcl4R14QZ_4goJc1jkkm-HaomFBUj4WrUZmBF817Kmze_quFm-r-fJNTrKEK63HHfB3FWfwVSROUqzwnRzVdhaKp1aJtOEEis1N4KGoikQ2b-Ww0MBRfnxq3HjLt0iK-DYiQC0N5TZczilewOUpkLfFHB78QFEMm2u-kZWIYWY6RgAD8xUGZxvvOnntTDieyDvI_mPv6kOw-4Sirqs5BQ9vbNL5kQSBDCh3rBVG3kVxwWS0hs1wBhJo7nfVF_Ds')" }}>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined text-xl">trending_up</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Average Result</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">3x Revenue within 6 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
