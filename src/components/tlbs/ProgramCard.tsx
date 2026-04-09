import React from 'react';
import { Link } from 'react-router-dom';
import type { Program } from '../../data/tlbs';

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  const shell = program.featured
    ? 'border-2 border-tlbs-gold bg-tlbs-card shadow-tlbs-glow'
    : 'border border-tlbs-border bg-tlbs-card';

  return (
    <article className={`rounded-tlbs p-8 md:p-10 ${shell}`}>
      {program.featured && (
        <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-tlbs-gold">
          Featured
        </p>
      )}
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-cream/55">{program.tier}</p>
      <h3 className="mt-2 font-serif text-xl md:text-2xl font-normal text-tlbs-cream">{program.title}</h3>
      <p className="mt-4 font-serif text-2xl text-tlbs-gold">{program.pricing}</p>
      <p className="mt-2 text-sm text-tlbs-cream/60">{program.spots}</p>

      {program.includesPrefix && (
        <p className="mt-8 text-sm font-medium text-tlbs-cream/90">{program.includesPrefix}</p>
      )}

      <ul className="mt-4 space-y-3 text-[0.92rem] font-light leading-relaxed text-tlbs-cream/80">
        {program.items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tlbs-gold/80" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {program.target && (
        <p className="mt-8 border-t border-tlbs-border pt-6 text-sm font-light text-tlbs-cream/70">
          {program.target}
        </p>
      )}
      {program.graduation && (
        <p className="mt-6 text-sm font-light italic text-tlbs-cream/75">{program.graduation}</p>
      )}

      <div className="mt-10">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt"
        >
          {program.cta}
        </Link>
        {program.ctaNote && (
          <p className="mt-3 text-xs text-tlbs-cream/50">{program.ctaNote}</p>
        )}
      </div>
    </article>
  );
};

export default ProgramCard;
