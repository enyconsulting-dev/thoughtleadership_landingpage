import React from 'react';

const TlbsShell: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16 ${className}`}>{children}</div>
);

export default TlbsShell;
