import React from 'react';
import TlbsShell from './TlbsShell';
import TlbsButton from './TlbsButton';

const CtaBanner: React.FC = () => {
  return (
    <section className="border-t border-tlbs-border bg-tlbs-black py-20 md:py-24">
      <TlbsShell className="text-center">
        <h2 className="mx-auto max-w-3xl font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">
          Your Expertise Deserves a Stage. Not a Cubicle.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-light text-[0.94rem] leading-relaxed text-tlbs-cream/80">
          Stop being the best-kept secret in your industry. Build the brand that matches your brilliance. The
          system is proven. The results speak for themselves. The only question left is whether you’re ready.
        </p>
        <div className="mt-10 flex justify-center">
          <TlbsButton to="/contact">Apply to TLBS</TlbsButton>
        </div>
      </TlbsShell>
    </section>
  );
};

export default CtaBanner;
