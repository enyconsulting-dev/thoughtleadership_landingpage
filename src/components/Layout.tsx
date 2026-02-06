import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
    return (
        <div className="relative flex flex-col min-h-screen w-full font-display bg-background-light dark:bg-background-dark text-[#141018] dark:text-gray-100 overflow-x-hidden antialiased">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
