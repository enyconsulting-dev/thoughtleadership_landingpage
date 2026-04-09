import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import TlbsButton, { TlbsButtonOutline } from './TlbsButton';

const HomeHero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-20 md:pb-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[min(40vh,420px)] w-[min(40vh,420px)] -translate-x-1/2 rounded-full bg-tlbs-gold/15 blur-[60px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-tlbs-gold to-transparent opacity-80"
        aria-hidden
      />

      <TlbsShell className="relative z-10 text-center">
        <TlbsEyebrow>Thought Leadership Business School</TlbsEyebrow>

        <h1 className="font-serif text-tlbs-display font-normal leading-[1.12] text-tlbs-cream">
          You’ve Built a Six-Figure Career.
          <br />
          <span className="text-tlbs-gold italic">Now Build a Seven-Figure Brand.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          The elite program for accomplished professionals who want to monetize their expertise at the highest level — through speaking, consulting, coaching, advisory, media, and intellectual property. Build the personal brand that makes opportunities come to you instead of chasing them.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TlbsButton to="/contact">Apply to TLBS</TlbsButton>
          <TlbsButtonOutline to="/free-training">Watch Free Masterclass</TlbsButtonOutline>
        </div>
      </TlbsShell>
    </section>
  );
};

export default HomeHero;
