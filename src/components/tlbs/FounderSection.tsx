import React, { useState } from 'react';
import TlbsEyebrow from './TlbsEyebrow';
import TlbsShell from './TlbsShell';
import TlbsGoldRule from './TlbsGoldRule';

const awardImages = [
  '321796432_694803098845741_2309976205247633118_n.jpg',
  'IMG_2535.JPG',
  'IMG_2602.JPG',
  'IMG_2603.JPG',
  'IMG_2604.JPG',
  'IMG_2607.JPG',
  'IMG_2610(1).JPG',
  'IMG_2610.JPG',
  'IMG_2663.jpg',
  'IMG_3274.JPG',
  'IMG_3275.jpg',
  'IMG_3277.jpg',
  'IMG_3279.jpg',
  'IMG_3281.jpg',
  'IMG_4766 2.JPG',
  'IMG_5400.JPG',
  'IMG_6168.JPG',
  'IMG_6328.JPG',
  'IMG_7581.JPG',
  'IMG_8686.PNG',
  'IMG_9336.JPG',
  'Screen Shot 2022-06-26 at 3.11.11 AM.png',
];

const FounderSection: React.FC = () => {
  const [isAwardSliderPaused, setIsAwardSliderPaused] = useState(false);

  const renderAwardImages = (isDuplicate = false) => (
    <div className="flex shrink-0 gap-5 pr-5" aria-hidden={isDuplicate}>
      {awardImages.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="w-[min(76vw,19rem)] shrink-0 overflow-hidden rounded border border-tlbs-border bg-tlbs-card"
        >
          <div className="flex h-64 items-center justify-center bg-[#f7f5f0] p-3 sm:h-72 sm:p-4">
            <img
              src={`/awards/${encodeURIComponent(image)}`}
              alt={isDuplicate ? '' : `Award and recognition archive image ${index + 1} of ${awardImages.length}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
          <figcaption className="border-t border-tlbs-border px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-tlbs-cream/60">
            Recognition archive <span className="text-tlbs-gold">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-tlbs-cream/35"> / {awardImages.length}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section id="founder" className="border-t border-tlbs-border bg-tlbs-dark py-20 md:py-28">
      <TlbsShell>
        <TlbsEyebrow centered={false}>Your Instructor</TlbsEyebrow>
        <h2 className="font-serif text-tlbs-section font-normal leading-tight text-tlbs-cream">Eno Eka</h2>
        <TlbsGoldRule className="mt-8" />
        <div className="mt-10 max-w-3xl space-y-6 font-light text-[0.94rem] leading-relaxed text-tlbs-cream/85">
          <p>
            Eno Eka built a thought leadership brand that generates multi-seven-figure revenue across three
            continents. She didn’t have a roadmap. She didn’t have a network. She didn’t have a playbook.
            She created all three from scratch — and now she teaches the exact system inside TLBS.
          </p>
          <p>
            Featured in Forbes. Recognized with the Canadian Choice Award in 2025 and 2026, named among
            Canada’s Top 100 Most Powerful Women, and recognized by RBC Women of Influence. International
            keynote speaker across the USA, Canada, Australia, Nigeria, Ghana, and the UK. Trainer of
            100,000+ professionals across 90+ countries. Leader of a $6B+ digital transformation.
          </p>
          <p className="font-serif text-[1.15rem] text-tlbs-gold">She teaches what she’s done. Not what she’s read about.</p>
        </div>
        <div className="mt-14 border-t border-tlbs-border pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-tlbs-gold">
                Awards &amp; recognition
              </h3>
              <p className="mt-2 text-sm font-light text-tlbs-cream/60">
                Selected honors and recognition from Eno’s career.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[2025, 2026].map((year) => (
              <div
                key={year}
                className="relative flex min-h-32 items-center justify-between overflow-hidden rounded border border-tlbs-gold/35 bg-tlbs-card px-6 py-5"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-tlbs-gold" aria-hidden />
                <div className="pl-2">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-tlbs-gold/75">
                    Canadian Choice Award
                  </p>
                  <p className="mt-2 font-serif text-xl text-tlbs-cream">Recognized excellence</p>
                </div>
                <span className="font-serif text-3xl text-tlbs-gold">{year}</span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs text-tlbs-cream/55">
                Browse all {awardImages.length} images in the recognition archive.
              </p>
              <button
                type="button"
                aria-pressed={isAwardSliderPaused}
                onClick={() => setIsAwardSliderPaused((paused) => !paused)}
                className="shrink-0 rounded border border-tlbs-border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-tlbs-gold transition-colors hover:border-tlbs-gold/50"
              >
                {isAwardSliderPaused ? 'Play slideshow' : 'Pause slideshow'}
              </button>
            </div>
            <div
              aria-label="Awards and recognition image carousel"
              aria-roledescription="carousel"
              className="award-slider overflow-x-auto overscroll-x-contain rounded"
              data-paused={isAwardSliderPaused}
            >
              <div className="award-slider-track flex w-max">
                {renderAwardImages()}
                {renderAwardImages(true)}
              </div>
            </div>
          </div>
        </div>
      </TlbsShell>
    </section>
  );
};

export default FounderSection;
