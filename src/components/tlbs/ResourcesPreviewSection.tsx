import React from 'react';
import { Link } from 'react-router-dom';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import { resources } from '../../data/tlbs';

const ResourcesPreviewSection: React.FC = () => {
  return (
    <section className="border-t border-tlbs-border bg-tlbs-black py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow>Free Resources</TlbsEyebrow>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          Begin Building Your Authority
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {resources.map((r) => (
            <div
              key={r.title}
              className="border border-tlbs-border bg-tlbs-card p-8 transition-colors hover:border-tlbs-gold/35"
            >
              <h3 className="font-serif text-lg font-normal text-tlbs-cream">{r.title}</h3>
              <p className="mt-3 font-light text-sm leading-relaxed text-tlbs-cream/65">{r.description}</p>
              <p className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-tlbs-gold">
                {r.cta}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center">
          <Link
            to="/resources"
            className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-tlbs-gold hover:text-tlbs-gold-lt"
          >
            Explore all resources
          </Link>
        </p>
      </TlbsShell>
    </section>
  );
};

export default ResourcesPreviewSection;
