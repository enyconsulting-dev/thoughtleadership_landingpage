import React, { useState } from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { postToWebhook } from '../services/webhookService';

const CONTACT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/c5251ed6-c875-41ec-9fd7-b43bafffedca';

const ContactPage: React.FC = () => {
  const [submitMessage, setSubmitMessage] = useState('');

  useDocumentTitle(
    'Apply & Contact | Thought Leadership Business School',
    'Submit your application or reach the TLBS team. Advisory follow-up within 24 hours.'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      programOfInterest: formData.get('programOfInterest') as string,
      goals: formData.get('goals') as string,
      tag: 'Contact Form Submission',
      source: 'Thought Leadership Business School',
      type: 'contact',
      timestamp: new Date().toISOString(),
    };

    // Fire and forget the webhook
    postToWebhook(CONTACT_WEBHOOK_URL, data);

    setSubmitMessage('Thank you! Your application has been submitted. A member of our team will reach out within 24 hours.');
    e.currentTarget.reset();
  };

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <TlbsEyebrow centered={false}>Apply</TlbsEyebrow>
            <h1 className="font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream md:text-tlbs-display">
              Submit Your Application
            </h1>
            <p className="mt-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/75">
              TLBS is application-based for all programs. A member of our advisory team will review your
              application and reach out within 24 hours to schedule a conversation.
            </p>
            <form
              className="mt-10 space-y-4"
              onSubmit={handleSubmit}
            >
              <label className="block text-sm text-tlbs-cream/70">
                Full name
                <input
                  type="text"
                  name="fullName"
                  required
                  className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
                />
              </label>
              <label className="block text-sm text-tlbs-cream/70">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
                />
              </label>
              <label className="block text-sm text-tlbs-cream/70">
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
                />
              </label>
              <label className="block text-sm text-tlbs-cream/70">
                Program of interest
                <select
                  name="programOfInterest"
                  className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
                >
                  <option value="">Select</option>
                  <option>Thought Leader Foundation</option>
                  <option>Authority Accelerator</option>
                  <option>TLBS Mastermind</option>
                  <option>Private Advisory</option>
                  <option>Not sure — advise me</option>
                </select>
              </label>
              <label className="block text-sm text-tlbs-cream/70">
                Tell us about your goals
                <textarea
                  name="goals"
                  rows={5}
                  className="mt-2 w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream focus:border-tlbs-gold focus:outline-none"
                />
              </label>
              {submitMessage && (
                <div className={`rounded-tlbs p-4 ${submitMessage.includes('Thank you') ? 'bg-green-900/20 border border-green-700/50' : 'bg-red-900/20 border border-red-700/50'}`}>
                  <p className={`text-sm ${submitMessage.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
                    {submitMessage}
                  </p>
                </div>
              )}
              <button
                type="submit"
                className="rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div>
            <TlbsEyebrow centered={false}>Direct Contact</TlbsEyebrow>
            <h2 className="font-serif text-2xl font-normal text-tlbs-cream">Reach the team</h2>
            <ul className="mt-8 space-y-4 font-light text-[0.94rem] text-tlbs-cream/80">
              <li>
                <a href="mailto:hello@thoughtleadershipbusinessschool.com" className="text-tlbs-gold hover:text-tlbs-gold-lt">
                  hello@thoughtleadershipbusinessschool.com
                </a>
              </li>
              <li>
                <a href="tel:+15873288469" className="hover:text-tlbs-cream">
                  +1-587-328-8469
                </a>
              </li>
              <li>
                <a href="tel:+2349085515969" className="hover:text-tlbs-cream">
                  +234-908-551-5969
                </a>
              </li>
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-tlbs-cream/55">
              Private Advisory inquiries receive a personal response from Eno’s executive team — not automated
              sequences.
            </p>
          </div>
        </div>
      </TlbsShell>
    </div>
  );
};

export default ContactPage;
