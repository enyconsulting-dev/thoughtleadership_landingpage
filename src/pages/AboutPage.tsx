import React from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import TlbsButton from '../components/tlbs/TlbsButton';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const AboutPage: React.FC = () => {
  useDocumentTitle(
    'About Thought Leadership Business School | TLBS',
    'The apex tier of the ENY education ecosystem — built for six-figure professionals scaling to seven-figure authority.'
  );

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell className="max-w-3xl">
        <TlbsEyebrow centered={false}>About TLBS</TlbsEyebrow>
        <h1 className="font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          The Apex Tier for Authority, Revenue, and Legacy
        </h1>
        <div className="mt-10 space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            Thought Leadership Business School sits at the top of the ENY education ecosystem — a deliberate,
            exclusive program for professionals who already earn six figures and are ready to architect a
            seven-figure personal brand.
          </p>
          <p>
            This is not mass-market training. TLBS is application-based, high-touch, and built around the STORY
            Framework™ — the same system Eno Eka used to build a multi-seven-figure brand across three
            continents.
          </p>
          <p>
            Speaking, advisory, media, intellectual property, and premium offers: the curriculum is designed
            for people who want opportunities to come to them — not for those still looking for shortcuts or
            hype.
          </p>
          <p className="font-serif text-lg italic text-tlbs-gold">
            Restraint over noise. Proof over promises. Authority over audience vanity metrics.
          </p>
        </div>
        <div className="mt-12">
          <TlbsButton to="/contact">Apply to TLBS</TlbsButton>
        </div>
      </TlbsShell>
    </div>
  );
};

export default AboutPage;
