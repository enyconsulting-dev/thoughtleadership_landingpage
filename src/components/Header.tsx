import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const nav = [
  { label: 'Programs', to: '/programs' },
  { label: 'TLBS Live', to: '/live' },
  { label: 'Resources', to: '/resources' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'About', to: '/about' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-white/[0.08] bg-tlbs-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" className="font-serif text-xl tracking-tight text-tlbs-gold md:text-2xl">
          TLBS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                pathname === item.to ? 'text-tlbs-gold-lt' : 'text-tlbs-cream/70 hover:text-tlbs-cream'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/free-training"
            className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-tlbs-cream/55 hover:text-tlbs-cream"
          >
            Free Training
          </Link>
          <Link
            to="/contact"
            className="rounded-tlbs bg-tlbs-gold px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-tlbs-black transition-colors hover:bg-tlbs-gold-lt"
          >
            Apply
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-tlbs-cream md:hidden"
          aria-expanded={menuOpen}
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-tlbs-border bg-tlbs-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-tlbs-cream/90"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/free-training"
              onClick={() => setMenuOpen(false)}
              className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-tlbs-cream/70"
            >
              Free Training
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-tlbs bg-tlbs-gold py-3 text-center text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black"
            >
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
