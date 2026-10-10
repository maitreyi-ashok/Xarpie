'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InfinityMark from './InfinityMark';
import ThemeToggle from './ThemeToggle';

type DropdownItem = { href: string; num: string; label: string };
type NavItem = { href: string; label: string; dropdown?: DropdownItem[]; external?: boolean };

const NAV: NavItem[] = [
  {
    href: '/insights',
    label: 'Insights',
    dropdown: [
      { href: '/insights#evidence',       num: '01', label: 'What we argue, and why' },
      { href: '/insights#foundation',     num: '02', label: 'The foundation decides' },
      { href: '/insights#accountability', num: '03', label: 'Accountability past go-live' },
      { href: '/insights#travels',        num: '04', label: 'A method that travels' },
    ],
  },
  { href: '/team', label: 'Leadership' },
  {
    href: '/operating-model',
    label: 'Operating Model',
    dropdown: [
      { href: '/operating-model#method',   num: '01', label: 'Six steps' },
      { href: '/operating-model#step-01',  num: '02', label: 'Start at the problem' },
      { href: '/operating-model#step-02',  num: '03', label: 'Build or buy on evidence' },
      { href: '/operating-model#step-03',  num: '04', label: 'Shape strategy & architecture' },
      { href: '/operating-model#step-04',  num: '05', label: 'Engineer the solution' },
      { href: '/operating-model#step-05',  num: '06', label: 'Deploy into operations' },
      { href: '/operating-model#step-06',  num: '07', label: 'Stay accountable' },
    ],
  },
  {
    href: '/capabilities',
    label: 'Capabilities',
    dropdown: [
      { href: '/capabilities#layer-01', num: '01', label: 'Engineering base' },
      { href: '/capabilities#layer-02', num: '02', label: 'Intelligence layer' },
    ],
  },
  {
    href: '/industries',
    label: 'Industries',
    dropdown: [
      { href: '/industries#case-01', num: '01', label: 'Field operations' },
      { href: '/industries#case-02', num: '02', label: 'Lead intelligence' },
      { href: '/industries#case-03', num: '03', label: 'Sovereign AI' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/signin', label: 'Sign In' },
  { href: 'https://machani.darwinbox.in/ms/candidate/careers', label: 'Careers', external: true },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.href === '/insights')        return pathname.startsWith('/insights');
    if (item.href === '/operating-model') return pathname.startsWith('/operating-model');
    if (item.href === '/capabilities')    return pathname.startsWith('/capabilities');
    if (item.href === '/industries')      return pathname.startsWith('/industries');
    return pathname === item.href;
  };

  return (
    <header className="topbar">
      {/* ---------- Brand: ∞ + XARPIE stacked over A MACHANI GROUP COMPANY ---------- */}
      <Link href="/" className="brand" aria-label="Xarpie Labs home">
        <InfinityMark className="brand-infinity" />
        <span className="brand-stack">
          <span className="brand-mark">XARPIE</span>
          <span className="brand-sub">A MACHANI GROUP COMPANY</span>
        </span>
      </Link>

      {/* ---------- Primary navigation ---------- */}
      <nav aria-label="Primary" className="nav-primary">
        {NAV.map((item) => (
          <div
            key={item.href}
            className={`nav-item${item.dropdown ? ' has-dropdown' : ''}${item.label === 'Careers' ? ' nav-item--careers' : ''}`}
          >
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={isActive(item) ? 'active' : ''}>
                {item.label}
              </Link>
            )}

            {item.dropdown && (
              <div className="nav-dropdown" role="menu">
                <ul>
                  {item.dropdown.map((d) => (
                    <li key={d.href}>
                      <Link href={d.href} role="menuitem">
                        <span className="nav-dropdown__num">{d.num}</span>
                        <span className="nav-dropdown__label">{d.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* ---------- Right-hand actions ---------- */}
      <div className="topbar-actions">
        <Link href="/contact" className="cta">
          Contact <span aria-hidden>→</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
