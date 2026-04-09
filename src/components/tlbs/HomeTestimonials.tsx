import React from 'react';
import { Link } from 'react-router-dom';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import { testimonials } from '../../data/tlbs';

const HomeTestimonials: React.FC = () => {
  const featured = testimonials.slice(0, 6);
  return (
    <section id="success-stories" className="border-t border-tlbs-border bg-tlbs-dark py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow>Success Stories</TlbsEyebrow>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          What Happens When You Build Authority
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featured.map((t) => (
            <figure
              key={t.author}
              className="flex h-full flex-col border border-tlbs-border bg-tlbs-card p-8"
            >
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
        <p className="mt-12 text-center">
          <Link
            to="/success-stories"
            className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-tlbs-gold hover:text-tlbs-gold-lt"
          >
            View all success stories
          </Link>
        </p>
      </TlbsShell>
    </section>
  );
};

export default HomeTestimonials;
