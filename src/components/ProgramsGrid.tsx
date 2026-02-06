import React from 'react';

const ProgramsGrid: React.FC = () => {
    const programs = [
        {
            title: "Thought Leadership Coaching",
            description: "Our flagship mentorship program for senior executives looking to transition into full-time thought leadership and advisory roles.",
            duration: "12 Months",
            features: ["1-on-1 Strategic Guidance & Accountability", "Personalized Monetization Roadmap", "Direct Access to Industry Mentors"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS5-m1ZkAsNa-TJcl4R14QZ_4goJc1jkkm-HaomFBUj4WrUZmBF817Kmze_quFm-r-fJNTrKEK63HHfB3FWfwVSROUqzwnRzVdhaKp1aJtOEEis1N4KGoikQ2b-Ww0MBRfnxq3HjLt0iK-DYiQC0N5TZczilewOUpkLfFHB78QFEMm2u-kZWIYWY6RgAD8xUGZxvvOnntTDieyDvI_mPv6kOw-4Sirqs5BQ9vbNL5kQSBDCh3rBVG3kVxwWS0hs1wBhJo7nfVF_Ds",
            featured: true
        },
        {
            title: "Speaker & Author Program",
            description: "Master the art of public speaking on global stages and get your book proposal accepted by a major publishing house.",
            duration: "6 Months",
            features: ["Craft Your Signature Keynote Speech", "Professional Book Proposal Development", "Complete Speaker Marketing Kit"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZLvRCXnRXsWjrFC-AZ7zZNgVQFtGPkvTiIBH1D9R0I-dXLVnlxXHDeimsbyElvpTZny9iNTEgjPaDHTz3UkoMiRINNn7PRhTV-EAaxFYH-8ELzlBU4eZLJhGW_DXrJH1wWpmdZwJCXSO6BvtLmmjhyUc5zSFu3WkCMyFTJM_tgUVDIGLzrOSQbvBJOiHHMM5ZLnucwSG9W5T6TSp8lGrjZ2QX6PiCn_tyq8ZFPwGTM_7qmF6dMoF0W63JenHXsr02eJaEw03pIk"
        },
        {
            title: "Digital Product Creation",
            description: "Transform your unique expertise into scalable digital assets, online courses, and high-ticket membership sites.",
            duration: "12 Weeks",
            features: ["Course Curriculum Design Framework", "Launch Strategy & Sales Funnels", "Automated Passive Income Systems"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRADS5KVGqVV86n1FYwqjlR5k4myEZkGvJiDA3-E-oufTXcflK1bwfiMpUmsIyA_lE4X6LokCr4oJgXjmCizaRejHw6VtVfJT0ANhihBMXtNSOlg53kRD-TvHY6E6XViGfl7DHmi-4g3f5ofCa69rBV-Un9WSxfxCg6xVKXmwU2CXttRCLs42XPsiRgkdxs4DWMJrVy03HUsOviMROYhM9olL9EUI7zt8C7JF2X8YNzFA64Im4urCH6a9sK8e89ja9KWahUFCQW14"
        },
        {
            title: "Brand & Influence Accelerator",
            description: "Build an undeniable personal brand that attracts high-ticket opportunities, media attention, and premium clients.",
            duration: "8 Weeks",
            features: ["LinkedIn Authority Building", "Omni-channel Content Strategy", "PR & Media Outreach Playbook"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdfM9u1IOzq0TuNN9_9anDDtQpAuv3IBEnQKdOAYaeZeVIWXp8-vMRp538JP0qw66WSgflDXN6SNaBDiefZnBbMxvnIIRbeJ8_L4CebPe7nqIOBSEne14rwBVV9ssJVfAJ4Xiv9_yX3CFumuwRWlEKVJHNLTcggFbvTRWlW00FLEuRBmX2-rWh3_BKf5s83UxE1aO9r-dEKfr3QinjNs8eyznBpIL4R_TQxIY7ULVU7o1KooQjWspF6MEX1XL5AYY3cUzXK1grf0"
        }
    ];

    return (
        <section className="px-6 md:px-10 lg:px-40 py-16 md:py-24 bg-white dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
                {programs.map((program, index) => (
                    <div key={index} className="flex flex-col bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                        <div className="relative h-72 overflow-hidden">
                            {program.featured && (
                                <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">star</span> Featured
                                </div>
                            )}
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${program.image}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80 mix-blend-multiply"></div>
                            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-base">hourglass_top</span>
                                {program.duration}
                            </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-primary dark:text-purple-300 mb-3 group-hover:text-purple-700 dark:group-hover:text-white transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                                {program.description}
                            </p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {program.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                        <span className="material-symbols-outlined text-accent text-xl shrink-0">check_circle</span>
                                        <span className="mt-0.5">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full group/btn mt-auto bg-white dark:bg-transparent border-2 border-primary text-primary dark:text-purple-300 dark:border-purple-500 font-bold py-3.5 px-6 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-purple-600 dark:hover:text-white dark:hover:border-purple-600 transition-all flex items-center justify-center gap-2">
                                View Program Details
                                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramsGrid;
