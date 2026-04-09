import React from 'react';
import { Link } from 'react-router-dom';

const MobileApplyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-tlbs-border bg-tlbs-black/95 px-4 py-3 backdrop-blur-md md:hidden">
      <Link
        to="/contact"
        className="flex w-full items-center justify-center rounded-tlbs bg-tlbs-gold py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt"
      >
        Apply
      </Link>
    </div>
  );
};

export default MobileApplyBar;
