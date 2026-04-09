import React from 'react';
import { Link } from 'react-router-dom';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import { resources } from '../data/tlbs';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ResourcesPage: React.FC = () => {
  useDocumentTitle(
    'Resources | TLBS',
    'Framework guides, audits, tools, and assessments to build seven-figure authority.'
  );

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell>
        <TlbsEyebrow>Resources</TlbsEyebrow>
        <h1 className="mx-auto max-w-3xl text-center font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          Begin Building Your Authority
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center font-light text-[0.94rem] text-tlbs-cream/70">
          Gated lead magnets route to nurture sequences in GHL. Highest-converting assets are called out
          below.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <div
              key={r.title}
              className="flex flex-col border border-tlbs-border bg-tlbs-card p-8 transition-colors hover:border-tlbs-gold/35"
            >
              <h2 className="font-serif text-lg font-normal text-tlbs-cream">{r.title}</h2>
              <p className="mt-3 flex-grow font-light text-sm leading-relaxed text-tlbs-cream/65">
                {r.description}
              </p>
              {r.title.includes('Masterclass') ? (
                <Link
                  to="/free-training"
                  className="mt-8 inline-flex w-fit rounded-tlbs border-2 border-tlbs-gold px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-tlbs-gold hover:bg-tlbs-gold/10"
                >
                  {r.cta}
                </Link>
              ) : (
                <button
                  type="button"
                  className="mt-8 w-fit rounded-tlbs bg-tlbs-gold px-5 py-2.5 text-left text-[0.72rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt"
                >
                  {r.cta}
                </button>
              )}
              {(i === 1 || i === 2) && (
                <p className="mt-3 text-xs text-tlbs-gold/80">High-converting TLBS lead magnet</p>
              )}
            </div>
          ))}
        </div>
      </TlbsShell>
    </div>
  );
};

export default ResourcesPage;
