import React from 'react';

const TlbsGoldRule: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`h-px w-[60px] bg-tlbs-gold ${className}`}
    role="presentation"
    aria-hidden
  />
);

export default TlbsGoldRule;
