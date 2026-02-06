import React from 'react';

const CredibilityStrip: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-[#1f1a24] border-y border-gray-100 dark:border-gray-800 py-10 px-6">
            <div className="max-w-[960px] mx-auto text-center">
                <p className="text-[#725c8a] dark:text-purple-300 text-xs font-bold tracking-widest uppercase mb-8">
                    As seen in leading media outlets
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
                    <div className="h-8 flex items-center text-xl font-serif font-bold text-gray-800 dark:text-gray-200">Forbes</div>
                    <div className="h-8 flex items-center text-xl font-sans font-black tracking-tight text-gray-800 dark:text-gray-200">HBR</div>
                    <div className="h-8 flex items-center text-xl font-serif font-bold italic text-gray-800 dark:text-gray-200">Entrepreneur</div>
                    <div className="h-8 flex items-center text-xl font-sans font-bold text-gray-800 dark:text-gray-200 tracking-tighter">TED<span className="text-red-600">x</span></div>
                    <div className="h-8 flex items-center text-xl font-serif font-bold text-gray-800 dark:text-gray-200">Inc.</div>
                </div>
            </div>
        </section>
    );
};

export default CredibilityStrip;
