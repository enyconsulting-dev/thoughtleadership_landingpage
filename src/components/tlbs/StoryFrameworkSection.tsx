import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import { storyPillars } from '../../data/tlbs';

const StoryFrameworkSection: React.FC = () => {
  return (
    <section className="border-t border-tlbs-border bg-tlbs-black py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow>The STORY Framework™</TlbsEyebrow>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          The Proven System for Building a Seven-Figure Thought Leadership Brand
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px border border-tlbs-gold/35 bg-tlbs-gold/35 md:grid-cols-3">
          {storyPillars.map((p) => (
            <div key={p.letter} className="bg-tlbs-card p-8 md:p-10">
              <p className="font-serif text-5xl leading-none text-tlbs-gold/90 md:text-6xl">{p.letter}</p>
              <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-tlbs-cream/55">
                {p.name}
              </p>
              <p className="mt-4 font-light text-[0.92rem] leading-relaxed text-tlbs-cream/80">{p.body}</p>
            </div>
          ))}
          <div className="flex items-center bg-tlbs-card p-8 md:p-10">
            <div className="w-full rounded-tlbs border border-tlbs-gold/25 bg-tlbs-gold/[0.06] p-8 shadow-tlbs-glow">
              <p className="text-center font-serif text-lg italic leading-relaxed text-tlbs-cream md:text-xl">
                This is the exact framework Eno Eka used to build a multi-seven-figure brand across three
                continents — from immigrant professional to Forbes-featured global authority.
              </p>
            </div>
          </div>
        </div>
      </TlbsShell>
    </section>
  );
};

export default StoryFrameworkSection;
