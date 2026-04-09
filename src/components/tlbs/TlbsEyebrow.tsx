import React from 'react';

type Props = {
  children: React.ReactNode;
  centered?: boolean;
};

const TlbsEyebrow: React.FC<Props> = ({ children, centered = true }) => {
  const line = <span className="h-px flex-1 max-w-[72px] bg-tlbs-gold/35" aria-hidden />;
  return (
    <div
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : 'justify-start'}`}
    >
      {centered && line}
      <span className="font-display font-bold text-[0.62rem] uppercase tracking-[0.2em] text-tlbs-gold shrink-0">
        {children}
      </span>
      {centered && line}
    </div>
  );
};

export default TlbsEyebrow;
