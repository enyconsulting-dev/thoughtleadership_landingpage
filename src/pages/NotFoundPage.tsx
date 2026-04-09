import React from 'react';
import { Link } from 'react-router-dom';
import TlbsShell from '../components/tlbs/TlbsShell';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFoundPage: React.FC = () => {
  useDocumentTitle('Page not found | TLBS');

  return (
    <div className="border-t border-tlbs-border py-24 md:py-32">
      <TlbsShell className="text-center">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-tlbs-gold">404</p>
        <h1 className="mt-4 font-serif text-tlbs-section text-tlbs-cream">This page does not exist</h1>
        <p className="mx-auto mt-4 max-w-md font-light text-sm text-tlbs-cream/65">
          The URL may have changed or the link could be outdated.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block rounded-tlbs border-2 border-tlbs-gold px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-gold hover:bg-tlbs-gold/10"
        >
          Back to home
        </Link>
      </TlbsShell>
    </div>
  );
};

export default NotFoundPage;
