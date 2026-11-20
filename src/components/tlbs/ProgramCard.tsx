import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Program } from '../../data/tlbs';
import OptInDialog, { type OptInFormData } from '../OptInDialog';
import { submitLead } from '../../services/webhookService';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shell = program.featured
    ? 'border-2 border-tlbs-gold bg-tlbs-card shadow-tlbs-glow'
    : 'border border-tlbs-border bg-tlbs-card';

  const handleOptInSubmit = async (formData: OptInFormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        formType: 'program',
        fullName: formData.fullName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        tag: program.title,
        programId: program.id,
      }, formData.turnstileToken);

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit opt-in information');
      }

      // Close dialog and redirect to enrollment link
      setDialogOpen(false);
      setIsSubmitting(false);

      if (program.link) {
        window.open(program.link, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      setIsSubmitting(false);
      throw error;
    }
  };

  const handleCTAClick = (e: React.MouseEvent) => {
    // If there's an external link and it's for one of the three programs requiring opt-in
    if (program.link && ['foundation', 'accelerator', 'mastermind'].includes(program.id)) {
      e.preventDefault();
      setDialogOpen(true);
    }
  };

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
        {program.link && ['foundation', 'accelerator', 'mastermind'].includes(program.id) ? (
          // For programs with enrollment links, show button that opens dialog
          <>
            <button
              type="button"
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt disabled:opacity-50"
            >
              {program.cta}
            </button>
            <OptInDialog
              isOpen={dialogOpen}
              programName={program.title}
              onClose={() => setDialogOpen(false)}
              onSubmit={handleOptInSubmit}
              isLoading={isSubmitting}
            />
          </>
        ) : program.link ? (
          // For Private Advisory or other external links
          <a
            href={program.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt"
          >
            {program.cta}
          </a>
        ) : (
          // For programs without links (standard contact form)
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-tlbs bg-tlbs-gold px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt"
          >
            {program.cta}
          </Link>
        )}
        {program.ctaNote && (
          <p className="mt-3 text-xs text-tlbs-cream/50">{program.ctaNote}</p>
        )}
      </div>
    </article>
  );
};

export default ProgramCard;
