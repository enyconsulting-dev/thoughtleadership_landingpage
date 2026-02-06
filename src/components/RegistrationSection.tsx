import React from 'react';

const RegistrationSection: React.FC = () => {
    return (
        <section id="register" className="w-full px-6 md:px-10 lg:px-40 py-12 lg:py-20 z-10 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="flex flex-col gap-8 lg:pr-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 w-fit">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-purple-300">Live Masterclass</span>
                        </div>
                        <h1 className="text-primary dark:text-purple-400 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                            Master the Art of Monetizing Your Expertise
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                            Join our exclusive session designed for senior professionals ready to stop trading time for money and start building a legacy.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-6 pt-4">
                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-primary dark:text-purple-300 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Authority</h3>
                                <p className="text-gray-600 dark:text-gray-400">Establish yourself as the undisputed industry standard and go-to leader in your niche.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-primary dark:text-purple-300 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">campaign</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Influence</h3>
                                <p className="text-gray-600 dark:text-gray-400">Command attention, build a loyal community, and drive meaningful change.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-primary dark:text-purple-300 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Scalable Income</h3>
                                <p className="text-gray-600 dark:text-gray-400">Unlock high-ticket revenue streams that grow without requiring more of your time.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 pt-6 opacity-80">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZLvRCXnRXsWjrFC-AZ7zZNgVQFtGPkvTiIBH1D9R0I-dXLVnlxXHDeimsbyElvpTZny9iNTEgjPaDHTz3UkoMiRINNn7PRhTV-EAaxFYH-8ELzlBU4eZLJhGW_DXrJH1wWpmdZwJCXSO6BvtLmmjhyUc5zSFu3WkCMyFTJM_tgUVDIGLzrOSQbvBJOiHHMM5ZLnucwSG9W5T6TSp8lGrjZ2QX6PiCn_tyq8ZFPwGTM_7qmF6dMoF0W63JenHXsr02eJaEw03pIk')" }}></div>
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRADS5KVGqVV86n1FYwqjlR5k4myEZkGvJiDA3-E-oufTXcflK1bwfiMpUmsIyA_lE4X6LokCr4oJgXjmCizaRejHw6VtVfJT0ANhihBMXtNSOlg53kRD-TvHY6E6XViGfl7DHmi-4g3f5ofCa69rBV-Un9WSxfxCg6xVKXmwU2CXttRCLs42XPsiRgkdxs4DWMJrVy03HUsOviMROYhM9olL9EUI7zt8C7JF2X8YNzFA64Im4urCH6a9sK8e89ja9KWahUFCQW14')" }}></div>
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtdfM9u1IOzq0TuNN9_9anDDtQpAuv3IBEnQKdOAYaeZeVIWXp8-vMRp538JP0qw66WSgflDXN6SNaBDiefZnBbMxvnIIRbeJ8_L4CebPe7nqIOBSEne14rwBVV9ssJVfAJ4Xiv9_yX3CFumuwRWlEKVJHNLTcggFbvTRWlW00FLEuRBmX2-rWh3_BKf5s83UxE1aO9r-dEKfr3QinjNs8eyznBpIL4R_TQxIY7ULVU7o1KooQjWspF6MEX1XL5AYY3cUzXK1grf0')" }}></div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Join 2,000+ experts inside</p>
                    </div>
                </div>
                <div className="relative w-full max-w-lg mx-auto lg:mr-0">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl z-0"></div>
                    <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-800 relative z-10 transform transition-all hover:-translate-y-1 duration-500">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Reserve Your Spot</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">Enter your details below to access the live training.</p>
                        </div>
                        <form className="flex flex-col gap-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-xl">person</span>
                                    </div>
                                    <input className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white placeholder-gray-400 font-medium" id="name" placeholder="John Doe" required type="text" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                                    Work Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-xl">mail</span>
                                    </div>
                                    <input className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white placeholder-gray-400 font-medium" id="email" placeholder="john@company.com" required type="email" />
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-lg font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 group" type="submit">
                                Secure My Free Seat
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                                <span className="material-symbols-outlined text-sm text-green-500">lock</span>
                                <p>Your information is 100% secure. We hate spam.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
