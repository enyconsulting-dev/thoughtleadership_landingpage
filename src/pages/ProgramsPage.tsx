import React from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import ProgramCard from '../components/tlbs/ProgramCard';
import { programs } from '../data/tlbs';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { pageSeo } from '../data/seo';

const ProgramsPage: React.FC = () => {
  useDocumentTitle(pageSeo['/programs'].title, pageSeo['/programs'].description);

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell>
        <TlbsEyebrow>Programs</TlbsEyebrow>
        <h1 className="mx-auto max-w-3xl text-center font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          Four Pathways to Thought Leadership
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center font-light text-[0.94rem] leading-relaxed text-tlbs-cream/75">
          Application-based entry for every track. Choose the pathway that matches where you are — and where
          you intend to go.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </TlbsShell>
    </div>
  );
};

export default ProgramsPage;
