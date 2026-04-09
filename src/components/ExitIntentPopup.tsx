import React, { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'tlbs_exit_popup_shown';

const ExitIntentPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, '1');
      setOpen(true);
    };

    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => document.documentElement.removeEventListener('mouseleave', onLeave);
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <div className="relative w-full max-w-md border border-tlbs-gold/40 bg-tlbs-black p-8 shadow-tlbs-glow">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 text-tlbs-cream/50 hover:text-tlbs-cream"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        <h3 id="exit-popup-title" className="pr-8 font-serif text-2xl font-normal text-tlbs-cream">
          Before You Leave — Take the Framework
        </h3>
        <p className="mt-4 font-light text-sm leading-relaxed text-tlbs-cream/75">
          Download the STORY Framework™ Quick-Start Guide — the 5-pillar system Eno Eka used to build a
          multi-seven-figure thought leadership brand. Free. Instant delivery.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            dismiss();
          }}
        >
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-sm text-tlbs-cream placeholder:text-tlbs-cream/40 focus:border-tlbs-gold focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-tlbs bg-tlbs-gold py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt"
          >
            Download the Framework
          </button>
        </form>
        <button
          type="button"
          onClick={dismiss}
          className="mt-4 w-full text-center text-xs text-tlbs-cream/45 hover:text-tlbs-cream/70"
        >
          No thanks, I’ll build authority on my own
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
