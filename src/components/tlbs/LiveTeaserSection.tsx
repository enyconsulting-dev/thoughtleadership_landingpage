import React from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import TlbsButton from './TlbsButton';

const LiveTeaserSection: React.FC = () => {
  return (
    <section className="border-t border-tlbs-border bg-tlbs-black py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow>TLBS Live</TlbsEyebrow>
        <h2 className="max-w-3xl font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          Two Days That Will Transform Your Brand, Your Pricing, and Your Positioning
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            TLBS Live is a 2-day immersive experience held in premium venues worldwide. This is not a
            conference with 500 people in a ballroom. This is a curated room of accomplished professionals
            working shoulder-to-shoulder with Eno Eka on their thought leadership brands.
          </p>
          <p>
            20+ sessions covering every pillar of the STORY Framework™ — with live workshops, hot seats,
            brand audits, and networking with peers who are building at your level. You leave with a complete
            roadmap and playbook for your seven-figure thought leadership brand.
          </p>
        </div>
        <div className="mt-10 space-y-3 text-sm text-tlbs-cream/70">
          <p>
            <span className="text-tlbs-gold">Past event:</span> Calgary, Canada.
          </p>
          <p>
            Dates and locations for the next event will be announced when confirmed.
          </p>
          <p className="pt-2 text-tlbs-cream/55">Limited seats. Premium venues only. Application required.</p>
        </div>
        <div className="mt-10">
          <TlbsButton to="/live">Get on the Waitlist for Next Event</TlbsButton>
        </div>
      </TlbsShell>
    </section>
  );
};

export default LiveTeaserSection;
