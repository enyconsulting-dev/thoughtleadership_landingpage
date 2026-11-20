import React from 'react';
import { Link } from 'react-router-dom';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import TlbsButton from '../components/tlbs/TlbsButton';
import { testimonials } from '../data/tlbs';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { pageSeo } from '../data/seo';

const SuccessStoriesPage: React.FC = () => {
  useDocumentTitle(pageSeo['/success-stories'].title, pageSeo['/success-stories'].description);

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell>
        <TlbsEyebrow>Success Stories</TlbsEyebrow>
        <h1 className="mx-auto max-w-3xl text-center font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          What Happens When You Build Authority
        </h1>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} className="flex h-full flex-col border border-tlbs-border bg-tlbs-card p-8">
              <blockquote className="font-light text-[0.94rem] leading-relaxed text-tlbs-cream/88">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-tlbs-border pt-6 text-sm">
                <p className="font-medium text-tlbs-cream">{t.author}</p>
                <p className="mt-1 text-tlbs-gold">{t.result}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <TlbsButton to="/programs">Explore Programs</TlbsButton>
          <Link
            to="/free-training"
            className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-tlbs-cream/55 hover:text-tlbs-gold"
          >
            Start with the free masterclass
          </Link>
        </div>
      </TlbsShell>
    </div>
  );
};

export default SuccessStoriesPage;
