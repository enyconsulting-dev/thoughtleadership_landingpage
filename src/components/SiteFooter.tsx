import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-tlbs-border bg-tlbs-black pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
        <div>
          <p className="font-serif text-lg text-tlbs-cream">Thought Leadership Business School</p>
          <p className="mt-4 font-light text-sm leading-relaxed text-tlbs-cream/60">
            The elite program for six-figure professionals building seven-figure thought leadership brands. A
            brand of ENY Consulting Inc.
          </p>
        </div>
        <div>
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-gold-deep">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-tlbs-cream/65">
            <li>
              <a href="https://course.businessanalysisschool.com/offers/G2dWJBCW" target="_blank" rel="noopener noreferrer" className="hover:text-tlbs-gold">
                Thought Leader Foundation
              </a>
            </li>
            <li>
              <a href="https://course.businessanalysisschool.com/offers/kbwjeAHt" target="_blank" rel="noopener noreferrer" className="hover:text-tlbs-gold">
                Authority Accelerator
              </a>
            </li>
            <li>
              <a href="https://course.businessanalysisschool.com/offers/HuG2vHLm" target="_blank" rel="noopener noreferrer" className="hover:text-tlbs-gold">
                TLBS Mastermind
              </a>
            </li>
            <li>
              <Link to="/programs" className="hover:text-tlbs-gold">
                Private Advisory
              </Link>
            </li>
            <li>
              <Link to="/live" className="hover:text-tlbs-gold">
                TLBS Live
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-gold-deep">
            Resources
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-tlbs-cream/65">
            <li>
              <Link to="/free-training" className="hover:text-tlbs-gold">
                Free Masterclass
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-tlbs-gold">
                STORY Framework Guide
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-tlbs-gold">
                Brand Audit
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-tlbs-gold">
                Speaking Tracker
              </Link>
            </li>
            <li>
              <span className="text-tlbs-cream/40">Blog</span>
            </li>
            <li>
              <span className="text-tlbs-cream/40">Podcast</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-gold-deep">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-tlbs-cream/65">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-tlbs-gold">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.supportEmail}`} className="hover:text-tlbs-gold">
                {contactInfo.supportEmail}
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-tlbs-gold">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <Link to="/contact" className="font-medium text-tlbs-gold hover:text-tlbs-gold-lt">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1200px] border-t border-tlbs-border px-6 md:px-10 lg:px-16">
        <p className="pt-8 text-center text-xs text-tlbs-cream/45 md:text-left">
          © {new Date().getFullYear()} Thought Leadership Business School. A brand of ENY Consulting Inc.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
