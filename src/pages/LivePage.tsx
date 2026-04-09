import React from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LivePage: React.FC = () => {
  useDocumentTitle(
    'TLBS Live | 2-Day Thought Leadership Immersive Experience',
    'Premium in-person event. Calgary, Lagos, Atlanta, London. Limited seats. Apply for tickets.'
  );

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell className="max-w-3xl">
        <TlbsEyebrow>TLBS Live</TlbsEyebrow>
        <h1 className="font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          Two Days That Will Transform Your Brand, Your Pricing, and Your Positioning
        </h1>
        <div className="mt-8 space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            TLBS Live is a 2-day immersive experience held in premium venues worldwide. This is not a
            conference with 500 people in a ballroom. This is a curated room of accomplished professionals
            working shoulder-to-shoulder with Eno Eka on their thought leadership brands.
          </p>
          <p>
            20+ sessions covering every pillar of the STORY Framework™ — with live workshops, hot seats,
            brand audits, and networking with peers who are building at your level.
          </p>
        </div>
        <div className="mt-10 space-y-2 text-sm text-tlbs-cream/65">
          <p>
            <span className="text-tlbs-gold">Past:</span> Calgary, Canada
          </p>
          <p>
            <span className="text-tlbs-gold">Upcoming:</span> Lagos • Atlanta • London
          </p>
        </div>

        <div className="mt-14 border border-tlbs-border bg-tlbs-card p-8">
          <h2 className="font-serif text-xl text-tlbs-cream">Get on the Waitlist for Next Event</h2>
          <p className="mt-2 text-sm text-tlbs-cream/55">
            Limited seats. Premium venues only. Application required.
          </p>
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
              Phone
              <input
                type="tel"
                required
                className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-black px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
              />
            </label>
            <label className="block text-sm text-tlbs-cream/70">
              Preferred city
              <input
                type="text"
                className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-black px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </TlbsShell>
    </div>
  );
};

export default LivePage;
