import React from 'react';
import { Link } from 'react-router-dom';

type Base = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = Base &
  (
    | { to: string; href?: never; type?: never; onClick?: never }
    | { href: string; to?: never; type?: never; onClick?: never }
    | { onClick: () => void; type?: 'button' | 'submit'; to?: never; href?: never }
  );

const base =
  'inline-flex items-center justify-center gap-2 rounded-tlbs px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tlbs-gold';

const TlbsButton: React.FC<ButtonProps> = (props) => {
  const cls = `${base} ${props.className ?? ''}`;
  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={`${cls} bg-tlbs-gold text-tlbs-black hover:bg-tlbs-gold-lt`}>
        {props.children}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={`${cls} bg-tlbs-gold text-tlbs-black hover:bg-tlbs-gold-lt`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={`${cls} bg-tlbs-gold text-tlbs-black hover:bg-tlbs-gold-lt`}
    >
      {props.children}
    </button>
  );
};

export const TlbsButtonOutline: React.FC<ButtonProps> = (props) => {
  const cls = `${base} border-2 border-tlbs-gold text-tlbs-gold hover:bg-tlbs-gold/10 ${props.className ?? ''}`;
  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {props.children}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {props.children}
      </a>
    );
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {props.children}
    </button>
  );
};

export default TlbsButton;
