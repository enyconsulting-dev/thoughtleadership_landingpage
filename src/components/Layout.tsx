import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SiteFooter from './SiteFooter';
import MobileApplyBar from './MobileApplyBar';
import ExitIntentPopup from './ExitIntentPopup';

const Layout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-tlbs-black font-display text-tlbs-cream antialiased">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileApplyBar />
      <ExitIntentPopup />
    </div>
  );
};

export default Layout;
