import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import TlbsGoldRule from './TlbsGoldRule';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="border-t border-tlbs-border bg-tlbs-dark py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow centered={false}>Your Instructor</TlbsEyebrow>
        <h2 className="font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">Eno Eka</h2>
        <TlbsGoldRule className="mt-8" />
        <div className="mt-10 max-w-3xl space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            Eno Eka built a thought leadership brand that generates multi-seven-figure revenue across three
            continents. She didn’t have a roadmap. She didn’t have a network. She didn’t have a playbook.
            She created all three from scratch — and now she teaches the exact system inside TLBS.
          </p>
          <p>
            Featured in Forbes. Named one of Canada’s Top 100 Most Powerful Women. Winner of the RBC Women
            Entrepreneur Award. International keynote speaker across the USA, Canada, Australia, Nigeria,
            Ghana, and the UK. Trainer of 100,000+ professionals across 90+ countries. Leader of a $6B+
            digital transformation — one of Canada’s largest.
          </p>
          <p className="font-serif text-[1.15rem] text-tlbs-gold">She teaches what she’s done. Not what she’s read about.</p>
        </div>
      </TlbsShell>
    </section>
  );
};

export default FounderSection;
