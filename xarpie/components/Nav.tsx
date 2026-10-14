'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import InfinityMark from './InfinityMark';
import ThemeToggle from './ThemeToggle';

type DropdownItem = { href: string; num: string; label: string };
type NavItem = { href: string; label: string; dropdown: DropdownItem[] };

const NAV: NavItem[] = [
  {
    href: '/insights',
    label: 'Insights',
    dropdown: [
      { href: '/insights#intro',          num: '01', label: 'What we argue, and why' },
      { href: '/insights#evidence',       num: '02', label: 'Build or buy, on evidence' },
      { href: '/insights#foundation',     num: '03', label: 'The foundation decides' },
      { href: '/insights#accountability', num: '04', label: 'Accountability past go-live' },
      { href: '/insights#travels',        num: '05', label: 'A method that travels' },
    ],
  },
  {
    href: '/team',
    label: 'Leadership',
    dropdown: [
      { href: '/team#intro',      num: '01', label: 'Senior by default' },
      { href: '/team#team-title', num: '02', label: 'Xarpie Labs' },
      { href: '/team#mena-title', num: '03', label: 'Xarpie MENA' },
    ],
  },
  {
    href: '/operating-model',
    label: 'Operating Model',
    dropdown: [
      { href: '/operating-model#intro',    num: '01', label: 'One model, end to end' },
      { href: '/operating-model#decision', num: '02', label: 'Build, or buy' },
      { href: '/operating-model#method',   num: '03', label: 'The six steps' },
      { href: '/operating-model#step-01',  num: '04', label: '01 · Start at the business problem' },
      { href: '/operating-model#step-02',  num: '05', label: '02 · Decide build or buy on evidence' },
      { href: '/operating-model#step-03',  num: '06', label: '03 · Shape strategy and architecture' },
      { href: '/operating-model#step-04',  num: '07', label: '04 · Engineer the solution' },
      { href: '/operating-model#step-05',  num: '08', label: '05 · Deploy into live operations' },
      { href: '/operating-model#step-06',  num: '09', label: '06 · Stay accountable afterwards' },
      { href: '/operating-model#modes',    num: '10', label: 'Three ways to work with us' },
    ],
  },
  {
    href: '/capabilities',
    label: 'Capabilities',
    dropdown: [
      { href: '/capabilities#intro',    num: '01', label: 'Two layers, one team' },
      { href: '/capabilities#layer-01', num: '02', label: 'Engineering base' },
      { href: '/capabilities#layer-02', num: '03', label: 'Intelligence layer' },
      { href: '/capabilities#together', num: '04', label: 'One team, both layers' },
      { href: '/industries',            num: '→',  label: 'Industries — deployed work, by sector' },
    ],
  },
  {
    href: '/industries',
    label: 'Industries',
    dropdown: [
      { href: '/industries#intro',   num: '01', label: 'A method that travels' },
      { href: '/industries#case-01', num: '02', label: 'Construction & Materials' },
      { href: '/industries#case-02', num: '03', label: 'Manufacturing & Products' },
      { href: '/industries#case-03', num: '04', label: 'Healthcare & Biomedical' },
    ],
  },
  {
    href: '/about',
    label: 'About',
    dropdown: [
      { href: '/about#intro',           num: '01', label: 'Ownership, vision to operations' },
      { href: '/about#order',           num: '02', label: 'The order that makes it work' },
      { href: '/about#about-positions', num: '03', label: 'Where we stand — four positions' },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const [open, setOpen] = useState(false);

  // close the mobile menu on navigation, and lock page scroll while it is open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
    <header className="topbar">
      <Link href="/" className="brand" aria-label="Xarpie — home">
        <InfinityMark className="brand-infinity" />
        <span className="brand-stack">
          <span className="brand-mark">XARPIE</span>
          <span className="brand-sub">A Machani Group Company</span>
        </span>
      </Link>

      <nav aria-label="Primary">
        {NAV.map((item) => (
          <div key={item.href} className="nav-item has-dropdown">
            <Link href={item.href} className={isActive(item.href) ? 'active' : undefined}>
              {item.label}
            </Link>
            <div className="nav-dropdown">
              <ul>
                {item.dropdown.map((d) => (
                  <li key={d.href}>
                    <Link href={d.href}>
                      <span className="nav-dropdown__num">{d.num}</span>
                      <span className="nav-dropdown__label">{d.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>

      <div className="topbar-actions">
        <a className="hide-sm" aria-disabled="true" title="Sign in — not yet available">
          Sign In
        </a>
        <a
          className="hide-sm"
          href="https://machani.darwinbox.in/ms/candidate/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Careers
        </a>
        <Link href="/contact" className="cta">
          Contact <span aria-hidden>→</span>
        </Link>
        <ThemeToggle />
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>

    <div
      id="mobile-nav"
      className={`mobile-nav${open ? ' open' : ''}`}
      aria-hidden={!open}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) setOpen(false);
      }}
    >
      <nav aria-label="Mobile">
        {NAV.map((item) => (
          <details key={item.href} className="mobile-nav__group" open={isActive(item.href) || undefined}>
            <summary className={isActive(item.href) ? 'active' : undefined}>
              <span>{item.label}</span>
              <span className="mobile-nav__chev" aria-hidden="true" />
            </summary>
            <ul>
              {item.dropdown.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} tabIndex={open ? 0 : -1}>
                    <span className="nav-dropdown__num">{d.num}</span>
                    <span>{d.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <div className="mobile-nav__actions">
          <Link href="/dashboard" tabIndex={open ? 0 : -1}>Dashboard</Link>
          <a href="https://machani.darwinbox.in/ms/candidate/careers" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            Careers
          </a>
          <Link href="/contact" className="mobile-nav__cta" tabIndex={open ? 0 : -1}>
            Contact <span aria-hidden>→</span>
          </Link>
        </div>
      </nav>
    </div>
    </>
  );
}
