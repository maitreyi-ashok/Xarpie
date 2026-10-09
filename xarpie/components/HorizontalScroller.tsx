'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export type ScrollerItem = {
  num: string;
  title: string;
  sub?: string;
  tag?: string;
  href?: string;
  onClick?: () => void;
  extra?: ReactNode;   // ← custom content (e.g. a diagram SVG) rendered below the title
};

type Props = {
  id: string;
  items: ScrollerItem[];
  variant?: 'card' | 'step' | 'capability';
  ariaLabel?: string;
};

export default function HorizontalScroller({
  id,
  items,
  variant = 'card',
  ariaLabel,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const itemSelector =
    variant === 'card' ? '.hscroll-item'
  : variant === 'step' ? '.step-pill'
  :                      '.hscroll-cap';

  const getCardStep = () => {
    const first = scrollerRef.current?.querySelector(itemSelector) as HTMLElement | null;
    if (!first) return 0;
    const gap = 16;
    return first.getBoundingClientRect().width + gap;
  };

  const updateControls = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getCardStep();
    if (!step) return;

    const maxScroll = el.scrollWidth - el.clientWidth - 4;
    const index = Math.round(el.scrollLeft / step);

    setActiveIdx(index);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll);
  };

  const scrollByOne = (dir: number) => {
    const step = getCardStep();
    if (!step) return;
    scrollerRef.current?.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const step = getCardStep();
    if (!step) return;
    scrollerRef.current?.scrollTo({ left: index * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    const t = setTimeout(updateControls, 50);
    return () => {
      el.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
      clearTimeout(t);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByOne(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByOne(1);
    }
  };

  const scrollerClass =
    variant === 'card' ? 'hscroll'
  : variant === 'step' ? 'steps-overview'
  :                      'hscroll hscroll--capability';

  return (
    <div className="hscroll-wrap">
      <div
        id={id}
        ref={scrollerRef}
        className={scrollerClass}
        role="list"
        tabIndex={0}
        aria-label={ariaLabel ?? 'Horizontal carousel'}
        onKeyDown={onKeyDown}
      >
        {items.map((item, i) => {
          const Wrapper: any = item.href ? 'a' : 'div';
          const wrapperProps = item.href
            ? { href: item.href, onClick: item.onClick }
            : { onClick: item.onClick, tabIndex: 0 };

          /* ---------- CAPABILITY variant ---------- */
          if (variant === 'capability') {
            return (
              <Wrapper
                key={`${item.num}-${i}`}
                role="listitem"
                className="hscroll-cap"
                {...wrapperProps}
              >
                <div className="hscroll-cap__diagram" aria-hidden="true">
                  {item.extra}
                </div>
                <div className="hscroll-cap__body">
                  <span className="hscroll-cap__num">{item.num}</span>
                  <h3 className="hscroll-cap__title">{item.title}</h3>
                  {item.sub && <p className="hscroll-cap__sub">{item.sub}</p>}
                </div>
              </Wrapper>
            );
          }

          /* ---------- CARD + STEP variants ---------- */
          return (
            <Wrapper
              key={`${item.num}-${i}`}
              role="listitem"
              className={variant === 'card' ? 'hscroll-item' : 'step-pill'}
              {...wrapperProps}
            >
              <span className={variant === 'card' ? 'hscroll-num' : 'step-pill__num'}>
                {item.num}
              </span>
              <h3 className={variant === 'card' ? 'hscroll-title' : 'step-pill__label'}>
                {item.title}
              </h3>
              {item.sub && (
                <p className={variant === 'card' ? 'hscroll-sub' : 'step-pill__sub'}>
                  {item.sub}
                </p>
              )}
              {item.tag && <span className="hscroll-tag">{item.tag}</span>}
              {item.extra}
            </Wrapper>
          );
        })}
      </div>

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
