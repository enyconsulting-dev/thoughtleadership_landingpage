import React, { useState, useEffect } from 'react';

const MasterclassTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        // Target Date: November 14th, 2026
        // Note: In a real app, you might want to handle the year dynamically or via props
        const targetDate = new Date('2026-11-14T00:00:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <React.Fragment>
            {/* Masterclass Hero Section */}
            <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#5a2d8b] via-[#4a2374] to-[#1e0a3c] py-20 px-4 sm:px-10">
                {/* Decorative abstract background pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://placeholder.pics/svg/1200x800/FFFFFF/FFFFFF')] bg-cover bg-center mix-blend-overlay" data-alt="Abstract geometric pattern overlay"></div>
                <div className="layout-content-container flex flex-col max-w-[960px] w-full items-center z-10 gap-10">
                    <div className="flex flex-col gap-4 text-center items-center max-w-[800px]">
                        <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-gold-action uppercase tracking-wider backdrop-blur-sm">
                            Free Live Masterclass
                        </span>
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                            The Executive Blueprint: Monetize Your Expertise
                        </h1>
                        <h2 className="text-gray-200 text-lg font-normal leading-normal max-w-[600px]">
                            Join 500+ C-suite leaders in our next live session. Learn the framework used by top consultants to scale their advisory revenue.
                        </h2>
                    </div>
                    {/* Timer Component Integration */}
                    <div className="flex flex-wrap justify-center gap-4 py-4 w-full">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                                <p className="text-white text-3xl font-bold leading-tight">{formatTime(timeLeft.days)}</p>
                                <p className="text-gray-300 text-xs uppercase tracking-wide">Days</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                                <p className="text-white text-3xl font-bold leading-tight">{formatTime(timeLeft.hours)}</p>
                                <p className="text-gray-300 text-xs uppercase tracking-wide">Hours</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                                <p className="text-white text-3xl font-bold leading-tight">{formatTime(timeLeft.minutes)}</p>
                                <p className="text-gray-300 text-xs uppercase tracking-wide">Mins</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                                <p className="text-white text-3xl font-bold leading-tight">{formatTime(timeLeft.seconds)}</p>
                                <p className="text-gray-300 text-xs uppercase tracking-wide">Secs</p>
                            </div>
                        </div>
                    </div>
                    <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-gold-action hover:bg-[#f59e0b] transition-colors text-[#2e1065] text-lg font-bold leading-normal tracking-[0.015em] shadow-xl shadow-purple-900/20">
                        <span className="truncate">Register Free</span>
                    </button>
                    <p className="text-white/60 text-sm">Limited spots available. No replay.</p>
                </div>
            </section>
            {/* Dark Stats Section */}
            <section className="bg-background-dark py-20 px-4 sm:px-10">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
                        <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
                            <h3 className="text-white text-2xl font-bold">Trusted by Industry Leaders</h3>
                            <p className="text-gray-400">Our alumni network drives global impact.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Stat Card 1 */}
                            <div className="flex flex-col gap-3 rounded-xl p-8 bg-[#231b2a] border border-[#352a3f]">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-gold-action mb-2">
                                    <span className="material-symbols-outlined">school</span>
                                </div>
                                <p className="text-gold-action tracking-tight text-4xl md:text-5xl font-black leading-tight">10,000+</p>
                                <p className="text-gray-300 text-lg font-medium leading-normal border-t border-gray-700 pt-3 mt-1">Professionals Trained</p>
                            </div>
                            {/* Stat Card 2 */}
                            <div className="flex flex-col gap-3 rounded-xl p-8 bg-[#231b2a] border border-[#352a3f]">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-gold-action mb-2">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <p className="text-gold-action tracking-tight text-4xl md:text-5xl font-black leading-tight">$50M+</p>
                                <p className="text-gray-300 text-lg font-medium leading-normal border-t border-gray-700 pt-3 mt-1">Alumni Revenue Generated</p>
                            </div>
                            {/* Stat Card 3 */}
                            <div className="flex flex-col gap-3 rounded-xl p-8 bg-[#231b2a] border border-[#352a3f]">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-gold-action mb-2">
                                    <span className="material-symbols-outlined">star</span>
                                </div>
                                <p className="text-gold-action tracking-tight text-4xl md:text-5xl font-black leading-tight">4.9/5</p>
                                <p className="text-gray-300 text-lg font-medium leading-normal border-t border-gray-700 pt-3 mt-1">Average Program Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default MasterclassTimer;
