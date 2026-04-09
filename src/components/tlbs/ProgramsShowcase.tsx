import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import ProgramCard from './ProgramCard';
import { programs } from '../../data/tlbs';

const ProgramsShowcase: React.FC = () => {
  return (
    <section id="programs" className="border-t border-tlbs-border bg-tlbs-dark py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow>Programs</TlbsEyebrow>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          Four Pathways to Thought Leadership
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </TlbsShell>
    </section>
  );
};

export default ProgramsShowcase;
