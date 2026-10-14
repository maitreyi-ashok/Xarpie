'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export type CapabilityPill = {
  num: string;
  title: string;
  sub: string;
  diagram?: ReactNode;   // optional small SVG diagram shown in the card
  img?: string;          // optional image (used if no diagram)
  alt?: string;
};

type Props = {
  id?: string;
  items: CapabilityPill[];
  ariaLabel?: string;
  variant?: 'eng' | 'intel';
};

export default function CapabilityPills({
  id = 'cap-pills',
  items,
  ariaLabel = 'Capabilities',
  variant = 'eng',
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const getStep = () => {
    const first = scrollerRef.current?.querySelector('.steps-overview > *') as HTMLElement | null;
    if (!first) return 0;
    return first.getBoundingClientRect().width + 16; // gap
  };

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getStep();
    if (!step) return;
    const maxScroll = el.scrollWidth - el.clientWidth - 4;
    const index = Math.round(el.scrollLeft / step);
    setActiveIdx(index);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll);
  };

  const scrollByOne = (dir: number) => {
    const step = getStep();
    if (!step) return;
    scrollerRef.current?.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const step = getStep();
    if (!step) return;
    scrollerRef.current?.scrollTo({ left: index * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const t = setTimeout(update, 60);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      clearTimeout(t);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByOne(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); scrollByOne(1); }
  };

  const scrollerClass = variant === 'intel'
    ? 'steps-overview steps-overview--intel'
    : 'steps-overview';

  return (
    <div className="hscroll-wrap">
      <div
        id={id}
        ref={scrollerRef}
        className={scrollerClass}
        role="list"
        tabIndex={0}
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
        {items.map((c, i) => (
          <article
            key={c.num + i}
            role="listitem"
            className={`step-pill step-pill--cap${c.diagram ? ' step-pill--with-diagram' : ''}`}
          >
            {c.diagram && (
              <div className="step-pill__diagram" aria-hidden="true">
                {c.diagram}
              </div>
            )}
            {!c.diagram && c.img && (
              <div className="step-pill__photo" aria-hidden="true">
                <img src={c.img} alt={c.alt ?? ''} loading="lazy" />
              </div>
            )}
            <span className="step-pill__num">{c.num}</span>
            <h3 className="step-pill__label">{c.title}</h3>
            <p className="step-pill__sub">{c.sub}</p>
          </article>
        ))}
      </div>

      {/* ⬇️ Same controls used by the Operating Model scroller */}
      <div className="hscroll-controls">
        <div className="hscroll-dots" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hscroll-dot${activeIdx === i ? ' active' : ''}`}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={activeIdx === i}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <div className="hscroll-arrows">
          <button
            type="button"
            className="hscroll-arrow"
            aria-label="Previous"
            disabled={atStart}
            onClick={() => scrollByOne(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5 L8 12 L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="hscroll-arrow"
            aria-label="Next"
            disabled={atEnd}
            onClick={() => scrollByOne(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5 L16 12 L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
