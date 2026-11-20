import React from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { pageSeo } from '../data/seo';

const bullets = [
  'Why most experts stay invisible — and the positioning shift that changes everything',
  'The STORY Framework™ overview — the 5-pillar system for building authority at scale',
  'How to create a signature methodology that becomes your ultimate competitive moat',
  'The monetization architecture — how thought leaders generate seven figures from expertise',
  'Eno’s personal journey from immigrant to Forbes-featured global authority (the real numbers)',
];

const FreeTrainingPage: React.FC = () => {
  useDocumentTitle(pageSeo['/free-training'].title, pageSeo['/free-training'].description);

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell className="max-w-2xl">
        <TlbsEyebrow>Free Masterclass</TlbsEyebrow>
        <h1 className="font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          The 7 Steps to Building a Seven-Figure Thought Leadership Brand
        </h1>
        <p className="mt-8 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          Learn the exact STORY Framework™ Eno Eka used to build a multi-seven-figure brand from scratch. This
          masterclass reveals the system behind the authority, the revenue, and the global recognition. Not
          theory. The actual system.
        </p>

        <div className="mt-12 border border-tlbs-border bg-tlbs-card p-8">
          <h2 className="font-serif text-xl text-tlbs-cream">Register for Instant Access</h2>
          <p className="mt-2 text-sm text-tlbs-cream/55">Immediate access. No fluff. Just the system.</p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="block text-sm text-tlbs-cream/70">
              Full name
              <input
                type="text"
                required
                className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-black px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
              />
            </label>
            <label className="block text-sm text-tlbs-cream/70">
              Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-black px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
              />
            </label>
            <label className="block text-sm text-tlbs-cream/70">
              Phone (WhatsApp preferred)
              <input
                type="tel"
                required
                className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-black px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt sm:w-auto"
            >
              Get Free Access
            </button>
          </form>
        </div>

        <div className="mt-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-gold">What you’ll discover</p>
          <ul className="mt-6 space-y-4 font-light text-[0.92rem] leading-relaxed text-tlbs-cream/80">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-tlbs-gold" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </TlbsShell>
    </div>
  );
};

export default FreeTrainingPage;
