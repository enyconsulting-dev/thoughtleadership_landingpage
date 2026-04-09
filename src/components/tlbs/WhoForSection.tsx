import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import TlbsGoldRule from './TlbsGoldRule';

const WhoForSection: React.FC = () => {
  return (
    <section className="border-t border-tlbs-border bg-tlbs-dark py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow centered={false}>Who This Is For</TlbsEyebrow>
        <h2 className="font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          You Earn Six Figures. You Have Deep Expertise. But You’re Still Invisible.
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            You’ve been told you should write a book. Start speaking. Launch a podcast. Build an audience. People with half your expertise are landing keynotes, signing advisory deals, and building media empires — while you remain the best-kept secret in your industry.
          </p>
          <p>
            The gap between where you are and where you should be isn’t talent. It isn’t knowledge. It isn’t experience. It’s positioning. It’s packaging. It’s the strategic architecture of a personal brand that converts authority into revenue.
          </p>
          <p className="font-serif text-[1.1rem] text-tlbs-gold">TLBS closes that gap. Permanently.</p>
        </div>
        <TlbsGoldRule className="mt-12" />
      </TlbsShell>
    </section>
  );
};

export default WhoForSection;
