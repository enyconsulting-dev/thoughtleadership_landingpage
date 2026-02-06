import React from 'react';

const SiteFooter: React.FC = () => {
    return (
        <React.Fragment>
            {/* Final CTA / Newsletter Section */}
            <section className="bg-background-light dark:bg-zinc-100 py-24 px-4 sm:px-10 border-t border-gray-100 dark:border-gray-200">
                <div className="flex justify-center">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center">
                        <div className="flex flex-col gap-4 mb-10 max-w-[720px]">
                            <h2 className="text-[#141018] tracking-tight text-3xl font-bold leading-tight md:text-4xl">
                                Not ready for the masterclass? <br />
                                <span className="text-primary">Join our newsletter.</span>
                            </h2>
                            <p className="text-[#555] text-lg font-normal leading-relaxed">
                                Get expert insights on consulting, executive leadership, and business strategy delivered to your inbox weekly.
                            </p>
                        </div>
                        <div className="w-full max-w-[500px]">
                            <label className="flex flex-col w-full h-16 relative">
                                <div className="flex w-full h-full items-stretch rounded-lg shadow-sm border border-gray-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
                                    <div className="pl-4 flex items-center text-gray-400">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent px-4 text-[#141018] placeholder:text-gray-400 focus:outline-none text-base h-full border-none" placeholder="Enter your email address" defaultValue="" />
                                    <div className="flex items-center justify-center pr-2">
                                        <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-md h-12 px-6 bg-primary hover:bg-[#3e1f60] transition-colors text-white text-base font-bold shadow-md">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </label>
                            <p className="text-xs text-gray-400 mt-3">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#2e104e] text-white py-16 px-4 sm:px-10 border-t border-[#3e1f60]">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1100px] flex-1 gap-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                            {/* Brand Column */}
                            <div className="flex flex-col gap-4 max-w-xs">
                                <div className="flex items-center gap-2 text-white font-bold text-xl">
                                    <span className="material-symbols-outlined text-gold-action">school</span>
                                    <span>TL Business School</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Empowering senior professionals to transition from corporate leadership to independent thought leadership.
                                </p>
                            </div>
                            {/* Links Container */}
                            <div className="flex flex-wrap gap-10 md:gap-20">
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-gold-action font-bold text-sm uppercase tracking-wider">Programs</h4>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Executive MBA</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Consulting Masterclass</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Advisory Certification</a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-gold-action font-bold text-sm uppercase tracking-wider">Resources</h4>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Industry Reports</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Case Studies</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Blog & Insights</a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-gold-action font-bold text-sm uppercase tracking-wider">Company</h4>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">About Us</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Careers</a>
                                    <a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="h-px bg-[#3e1f60] w-full"></div>
                        {/* Bottom Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-gray-400 text-sm">© 2023 Thought Leadership Business School. All rights reserved.</p>
                            <div className="flex items-center gap-4">
                                <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white" href="#">
                                    <span className="text-xl">
                                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                                    </span>
                                </a>
                                <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white" href="#">
                                    <span className="text-xl">
                                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                    </span>
                                </a>
                                <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white" href="#">
                                    <span className="text-xl">
                                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default SiteFooter;
