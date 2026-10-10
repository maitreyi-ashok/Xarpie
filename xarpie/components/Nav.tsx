'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type DropdownItem = { href: string; num: string; label: string };
type NavItem = { href: string; label: string; dropdown?: DropdownItem[] };

const NAV: NavItem[] = [
  {
    href: '/insights',
    label: 'Insights',
    dropdown: [
      { href: '/insights/#intro',          num: '01', label: 'What we argue, and why' },
      { href: '/insights/#evidence',       num: '02', label: 'Build or buy, on evidence' },
      { href: '/insights/#foundation',     num: '03', label: 'The foundation decides' },
      { href: '/insights/#accountability', num: '04', label: 'Accountability past go-live' },
      { href: '/insights/#travels',        num: '05', label: 'A method that travels' },
    ],
  },
  {
    href: '/team',
    label: 'Leadership',
    dropdown: [
      { href: '/team/#intro', num: '01', label: 'Senior by default' },
      { href: '/team/#labs',  num: '02', label: 'Xarpie Labs' },
      { href: '/team/#mena',  num: '03', label: 'Xarpie MENA' },
    ],
  },
  { href: '/operating-model', label: 'Operating Model' },
  { href: '/capabilities',    label: 'Capabilities' },
  { href: '/industries',      label: 'Industries' },
  { href: '/about',           label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="brand" aria-label="Xarpie — home">
          <svg viewBox="0 0 220 120" className="brand-mark" fill="none" role="presentation" aria-hidden="true">
            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.2} strokeOpacity={0.92}>
              <use href="#xarpie-outer" />
              <use href="#xarpie-inner" />
            </g>
          </svg>
          <span className="brand-text">
            <span className="wordmark">XARPIE</span>
            <span className="parent">A Machani Group Company</span>
          </span>
        </Link>

        <div className="header-right">
          <nav className="header-nav" aria-label="Main">
            {NAV.map((item) => (
              <div key={item.href} className="nav-item">
                <Link href={item.href} aria-expanded={false}>
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="nav-menu" role="group" aria-label={`${item.label} sections`}>
                    {item.dropdown.map((d) => (
                      <Link key={d.href} href={d.href} className="nav-menu-item">
                        <span className="n">{d.num}</span>
                        <span>{d.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <button type="button" aria-disabled="true" title="Sign in — not yet available">
              Sign In
            </button>
            <a
              href="https://machani.darwinbox.in/ms/candidate/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </a>
            <Link href="/contact/">
              Contact<span className="arrow" aria-hidden="true">→</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('xarpie-theme-choice', next); } catch {}
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
        </svg>
      )}
      <span className="theme-toggle-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
