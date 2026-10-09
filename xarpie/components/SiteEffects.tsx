'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const PAGE_SECTIONS: Record<string, { id: string; num: string; label: string }[]> = {
  '/insights': [
    { id: 'ins-evidence',       num: '01', label: 'What we argue, and why' },
    { id: 'ins-foundation',     num: '02', label: 'The foundation decides' },
    { id: 'ins-accountability', num: '03', label: 'Accountability past go-live' },
    { id: 'ins-travels',        num: '04', label: 'A method that travels' },
  ],
  '/operating-model': [
    { id: 'method',   num: '01', label: 'Six steps' },
    { id: 'step-01',  num: '02', label: 'Start at the problem' },
    { id: 'step-02',  num: '03', label: 'Build or buy' },
    { id: 'step-03',  num: '04', label: 'Strategy & architecture' },
    { id: 'step-04',  num: '05', label: 'Engineer the solution' },
    { id: 'step-05',  num: '06', label: 'Deploy into operations' },
    { id: 'step-06',  num: '07', label: 'Stay accountable' },
  ],
  '/capabilities': [
    { id: 'layer-01', num: '01', label: 'Engineering base' },
    { id: 'layer-02', num: '02', label: 'Intelligence layer' },
  ],
  '/industries': [
    { id: 'case-01', num: '01', label: 'Field operations' },
    { id: 'case-02', num: '02', label: 'Lead intelligence' },
    { id: 'case-03', num: '03', label: 'Sovereign AI' },
  ],
  '/about': [
    { id: 'about-positions', num: '01', label: 'Where we stand' },
  ],
};

export default function SiteEffects() {
  const pathname = usePathname();
  const sections = PAGE_SECTIONS[pathname] ?? [];

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (sections.length === 0) return;
    const onScroll = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 160 <= 0) current = s.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname, sections]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  }, [pathname]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {sections.length > 0 && (
        <div className="subnav-wrap">
          <div className="subnav">
            {sections.map((s) => (
              <a
                key={s.id}
                className={activeId === s.id ? 'active' : ''}
                onClick={() => scrollTo(s.id)}
              >
                <span className="num">{s.num}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="page-progress">
        <div className="page-progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </>
  );
}
