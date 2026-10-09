'use client';

import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';

// Local image imports — colocated in app/team/
import raviImg  from '@/app/team/Ravi.png';
import phaniImg from '@/app/team/phani.jpeg';
import ziyadImg from '@/app/team/Ziyad.webp';
import mohanImg from '@/app/team/mohan.webp';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Leader = {
  name: string;
  role: string;
  photo: StaticImageData;
  hoverTitle: string;
  hoverBio: string;
  bio: string[];
};

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const LEADERS: Leader[] = [
  {
    name: 'Ravi Machani',
    role: 'Founder & Advisory Board',
    photo: raviImg,
    hoverTitle: 'Founder & Advisory Board',
    hoverBio:
      'A seasoned entrepreneur with a track record of scaling high-growth ventures across industries. Founder of Machani Group, a diversified investment firm driving innovation and long-term value creation.',
    bio: [
      'A seasoned entrepreneur with a track record of scaling high-growth ventures across industries. Founder of Machani Group, a diversified investment firm driving innovation and long-term value creation.',
      'Passionate about leveraging technology to bring exponential transformation and co-elevation of communities.',
    ],
  },
  {
    name: 'Phani Pingali',
    role: 'Chief Operating Officer',
    photo: phaniImg,
    hoverTitle: 'Chief Operating Officer',
    hoverBio:
      'With over 30 years of global expertise, Phani Pingali has led IT services, consulting, and manufacturing transformations across BFSI, Hi-Tech, Automotive, Defense, and Aerospace.',
    bio: [
      'With over 30 years of global expertise, Phani Pingali has led IT services, consulting, and manufacturing transformations across BFSI, Hi-Tech, Automotive, Defense, and Aerospace.',
      'Skilled in pre-sales, IT outsourcing, M&A, and solutioning, he has driven service delivery, managed services, and go-to-market strategies across the USA, UK, India, the Middle East, Europe, and the Nordics — powering business growth and digital transformation at scale.',
    ],
  },
  {
    name: 'Ziyad Alsulais',
    role: 'Chairman & CEO — MENA',
    photo: ziyadImg,
    hoverTitle: 'Chairman & CEO — MENA',
    hoverBio:
      'A transformation-focused executive with over 20 years of experience driving organizational growth, operational excellence, and strategic capability building.',
    bio: [
      'A transformation-focused executive with over 20 years of experience driving organizational growth, operational excellence, and strategic capability building. He has a proven ability to lead complex change, elevate performance, and align people, strategy, and execution to deliver measurable business value.',
      'Equipped with global executive education and board-level experience, he is committed to creating sustainable, high-impact outcomes. With an Executive MBA from HEC Paris and advanced certifications from leading institutions including MIT Sloan, IMD, and London Business School, he combines a strong academic foundation with practical, results-oriented leadership.',
      'His focus lies in delivering transformative human capital strategies that create long-term value while enabling individuals to thrive in dynamic and evolving environments.',
    ],
  },
  {
    name: 'Barathi Mohan',
    role: 'Co-Founder & COO — MENA',
    photo: mohanImg,
    hoverTitle: 'Co-Founder & COO — MENA',
    hoverBio:
      'With over 40 years of experience in Human Resources, Barathimohan has played a pivotal role in shaping people strategies and driving transformation across leading organizations, including Almarai.',
    bio: [
      'With over 40 years of experience in Human Resources, Barathimohan has played a pivotal role in shaping people strategies and driving transformation across leading organizations, including Almarai.',
      'As the Founder & Chairman of A2Z HR Services, he focuses on delivering fractional HR solutions in the MENA region that are efficient, inclusive, AI-driven, and cost-effective. His expertise spans the entire employee lifecycle — from onboarding to offboarding — supported by certifications in executive leadership and global remuneration.',
      'He brings a strong focus on optimizing organizational performance through strategic HR initiatives and leveraging AI-driven approaches to human capital management. At his core, he is committed to aligning with organizational values, bringing diverse perspectives, and fostering high-performing, people-first workplaces.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function LeadershipPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const leader = openIdx !== null ? LEADERS[openIdx] : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
    };
    document.addEventListener('keydown', onKey);

    if (openIdx !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener('keydown', onKey);
      };
    }

    return () => document.removeEventListener('keydown', onKey);
  }, [openIdx]);

  return (
    <>
      <style jsx global>{`
        /* ============================================================
           Design tokens
           ============================================================ */
        :root {
          --paper: #ffffff;
          --ink: #0e1621;
          --surface: #ffffff;
          --surface-2: #f6f8fc;
          --muted: #4a5a70;
          --faint: #5a6b82;
          --accent: #3d6ff5;
          --accent-deep: #2f5ad6;
          --cyan: #16a34a;
          --coral: #cf3324;
          --hairline: #e2e8f2;
          --hairline-strong: #cbd5e6;
          --control: #94a3b8;
          --btn-fg: #ffffff;

          --radius: 14px;
          --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
          --ease-inout: cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { box-sizing: border-box; }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-size: 17px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          font-feature-settings: "ss01", "cv01";
        }

        ::selection { background: rgba(61, 111, 245, 0.2); color: #101319; }
        :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
          border-radius: 2px;
        }

        img { display: block; max-width: 100%; }
        a { color: inherit; text-decoration: none; }

        /* ============================================================
           Grain
           ============================================================ */
        .grain {
          position: fixed;
          inset: 0;
          z-index: 45;
          pointer-events: none;
          opacity: 0.022;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 160px 160px;
        }

        /* ============================================================
           Top bar
           ============================================================ */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          gap: 24px;
          border-bottom: 1px solid var(--hairline);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.02em;
        }
        .brand-mark {
          width: 26px; height: 26px;
          border-radius: 7px;
          background: var(--accent);
          display: grid;
          place-items: center;
          color: var(--btn-fg);
          font-weight: 900;
          font-size: 13px;
        }

        .topbar nav {
          display: flex;
          gap: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--muted);
        }
        .topbar nav a {
          padding: 8px 14px;
          border-radius: 8px;
          transition: background-color 0.15s var(--ease-out), color 0.15s var(--ease-out);
        }
        .topbar nav a:hover { background: var(--surface-2); color: var(--ink); }
        .topbar nav a[aria-current="page"] { background: var(--surface-2); color: var(--ink); }

        /* ============================================================
           Layout
           ============================================================ */
        main {
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 32px 96px;
        }

        .board {
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--radius);
          padding: clamp(28px, 4.5vw, 56px);
          margin-bottom: 20px;
        }

        section { margin-top: 20px; }

        /* ============================================================
           Type
           ============================================================ */
        .t-h1 {
          font-weight: 800;
          font-size: clamp(2.25rem, 4.6vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .t-h2 {
          font-weight: 800;
          font-size: clamp(1.625rem, 3vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .t-lead {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          line-height: 1.6;
          margin: 0;
          color: var(--muted);
        }

        .stack-sm { margin-top: clamp(0.7rem, 2.4vh, 1.75rem); }
        .stack-md { margin-top: clamp(0.9rem, 3.2vh, 2.5rem); }
        .stack-lg { margin-top: clamp(1.1rem, 4.4vh, 3.5rem); }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0;
        }
        .eyebrow::before {
          content: "";
          width: 24px; height: 1px;
          background: linear-gradient(90deg, var(--accent), transparent);
        }
        .eyebrow--on-dark { color: rgba(255, 255, 255, 0.82); }
        .eyebrow--on-dark::before {
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), transparent);
        }

        /* ============================================================
           Buttons
           ============================================================ */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.2s var(--ease-out), background-color 0.2s var(--ease-out),
            color 0.15s var(--ease-out), border-color 0.2s var(--ease-out);
        }
        .btn-primary {
          background: var(--accent);
          color: var(--btn-fg);
        }
        .btn-primary:hover {
          background: var(--accent-deep);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px -10px rgba(61, 111, 245, 0.5);
        }
        .btn-ghost--on-dark {
          background: transparent;
          color: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .btn-ghost--on-dark:hover {
          color: #ffffff;
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        /* ============================================================
           Photo hero
           ============================================================ */
        .photo-hero {
          position: relative;
          min-height: min(70vh, 600px);
          display: grid;
          align-items: end;
          border-radius: var(--radius);
          overflow: hidden;
          color: #f4f1ea;
          isolation: isolate;
        }

        .photo-hero__media,
        .photo-hero__media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .photo-hero__media img {
          object-fit: cover;
          object-position: 50% 42%;
          filter: saturate(0.9) contrast(1.03) brightness(0.96);
        }

        .photo-hero__scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(14, 22, 33, 0.88) 0%,
              rgba(14, 22, 33, 0.62) 38%,
              rgba(14, 22, 33, 0.28) 68%,
              rgba(14, 22, 33, 0.14) 100%
            ),
            radial-gradient(
              120% 90% at 12% 100%,
              rgba(61, 111, 245, 0.16),
              transparent 60%
            );
        }

        .photo-hero__content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          padding: clamp(32px, 6vw, 88px);
        }

        .photo-hero__content .t-h1 { color: #ffffff; max-width: 20ch; }
        .photo-hero__content p {
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          line-height: 1.6;
          max-width: 56ch;
        }

        /* ============================================================
           Team grid — portrait cards with hover reveal
           ============================================================ */
        .team-section__head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: end;
          margin-bottom: clamp(20px, 3vw, 40px);
        }
        .team-section__hint {
          font-size: 0.875rem;
          color: var(--faint);
          max-width: 34ch;
          margin: 0;
          text-align: right;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .leader {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--hairline);
          cursor: pointer;
          transition: transform 0.24s var(--ease-out), border-color 0.24s var(--ease-out),
            box-shadow 0.24s var(--ease-out);
        }
        .leader:hover {
          transform: translateY(-3px);
          border-color: var(--control);
          box-shadow: 0 20px 44px -24px rgba(14, 22, 33, 0.28);
        }

        .leader__photo {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--surface-2);
        }

        .leader__photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 14%;
          filter: saturate(0.94) contrast(1.02);
          transition: transform 0.5s var(--ease-out);
        }
        .leader:hover .leader__photo img { transform: scale(1.03); }

        .leader__hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.5rem;
          padding: 20px;
          background: linear-gradient(
            to top,
            rgba(14, 22, 33, 0.94) 0%,
            rgba(14, 22, 33, 0.82) 55%,
            rgba(14, 22, 33, 0.45) 100%
          );
          color: #ffffff;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.24s var(--ease-out), transform 0.32s var(--ease-out);
          pointer-events: none;
          overflow: hidden;
        }
        .leader:hover .leader__hover,
        .leader:focus-visible .leader__hover { opacity: 1; transform: none; }

        .leader__hover-title {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
        }

        .leader__hover-bio {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: #ffffff;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .leader__hover-cue {
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin: 6px 0 0;
        }

        .leader__meta {
          padding: 16px 18px 18px;
          border-top: 1px solid var(--hairline);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .leader__name {
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.01em;
          color: var(--ink);
          line-height: 1.25;
          margin: 0;
        }
        .leader__role {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--faint);
          line-height: 1.4;
          margin: 0;
        }

        @media (hover: none) {
          .leader__hover { display: none; }
          .leader::after {
            content: "Tap for the full profile";
            position: absolute;
            left: 10px;
            bottom: calc(100% - 4px);
            transform: translateY(-100%);
            padding: 5px 10px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.92);
            font-size: 0.5625rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--ink);
            opacity: 0;
            pointer-events: none;
          }
        }

        /* ============================================================
           MENA section — photo strip with copy
           ============================================================ */
        .mena {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--hairline);
        }

        .mena__media {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          background: var(--surface-2);
        }
        .mena__media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 45%;
          filter: saturate(0.92) contrast(1.03) brightness(0.98);
        }
        .mena__media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(14, 22, 33, 0.28), transparent 60%);
          pointer-events: none;
        }

        .mena__copy {
          padding: clamp(32px, 5vw, 72px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        .mena__copy h2 { max-width: 18ch; }
        .mena__copy p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted);
          max-width: 52ch;
        }
        .mena__list {
          list-style: none;
          margin: 4px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mena__list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9375rem;
          color: var(--muted);
        }
        .mena__list li::before {
          content: "";
          flex: none;
          margin-top: 8px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        /* ============================================================
           Modal dialog (leader profile)
           ============================================================ */
        .dialog {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: max(20px, env(safe-area-inset-top)) 20px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .dialog__card {
          display: grid;
          grid-template-columns: 300px 1fr;
          width: min(880px, 100%);
          max-height: min(560px, calc(100svh - 48px));
          overflow: auto;
          border: 1px solid var(--hairline-strong);
          border-radius: var(--radius);
          background: var(--surface);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
        }

        .dialog__photo {
          position: relative;
          overflow: hidden;
          background: var(--surface-2);
        }
        .dialog__photo img {
          width: 100%;
          height: 100%;
          min-height: 240px;
          object-fit: cover;
          object-position: 50% 14%;
        }

        .dialog__body {
          padding: clamp(24px, 3.4vw, 40px);
        }
        .dialog__body h3 {
          margin: 0 0 4px;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .dialog__role {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 20px;
        }
        .dialog__body p {
          margin: 0 0 16px;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--muted);
        }

        .dialog__close {
          position: absolute;
          top: 12px;
          right: 14px;
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--hairline-strong);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          color: var(--ink);
          font-size: 1.3rem;
          line-height: 1;
          cursor: pointer;
          transition: border-color 0.2s var(--ease-out), background-color 0.2s var(--ease-out);
        }
        .dialog__close:hover { border-color: var(--ink); background: var(--surface-2); }

        /* ============================================================
           Footer
           ============================================================ */
        .site-footer {
          max-width: 1180px;
          margin: 0 auto;
          padding: 32px 32px 56px;
          border-top: 1px solid var(--hairline);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--faint);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          text-transform: uppercase;
        }

        /* ============================================================
           Responsive
           ============================================================ */
        @media (max-width: 1000px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .mena { grid-template-columns: 1fr; }
          .mena__media { min-height: 320px; }
          .dialog__card { grid-template-columns: 1fr; max-height: 90vh; }
        }

        @media (max-width: 720px) {
          .topbar { padding: 14px 20px; }
          .topbar nav { display: none; }
          main { padding: 16px 20px 64px; }
          .board { padding: 24px 20px; }
          .team-section__head { grid-template-columns: 1fr; }
          .team-section__hint { text-align: left; }
          .team-grid { grid-template-columns: 1fr; }
          .photo-hero { min-height: 60vh; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
          .leader:hover .leader__photo img { transform: none; }
        }
      `}</style>

      <div className="grain" aria-hidden="true" />

      {/* ============================================================
           Top bar
           ============================================================ */}
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">X</span>
          Xarpie Labs
        </a>
        <nav aria-label="Primary">
          <a href="/about">About</a>
          <a href="/team" aria-current="page">Team</a>
          <a href="/operating-model">Operating model</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* ============================================================
             Hero with photograph
             ============================================================ */}
        <section className="photo-hero" aria-labelledby="hero-title">
          <div className="photo-hero__media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80"
              alt=""
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="photo-hero__scrim" aria-hidden="true" />

          <div className="photo-hero__content">
            <p className="eyebrow eyebrow--on-dark">02 / Leadership</p>
            <h1 id="hero-title" className="t-h1 stack-sm">
              You work with the people who do the thinking — and the building.
            </h1>
            <p>
              Senior by default. The same people who shape the strategy stay accountable
              through to live operations.
            </p>
          </div>
        </section>

        {/* ============================================================
             The team grid
             ============================================================ */}
        <section className="board" aria-labelledby="team-title">
          <div className="team-section__head">
            <div>
              <p className="eyebrow">02 / Xarpie Labs</p>
              <h2 id="team-title" className="t-h2 stack-sm">
                The people accountable for the work.
              </h2>
            </div>
            <p className="team-section__hint">
              Hover a profile for the details, or select it for the full biography.
            </p>
          </div>

          <div className="team-grid">
            {LEADERS.map((l, i) => (
              <article
                key={l.name}
                className="leader"
                tabIndex={0}
                role="button"
                aria-label={`Open full profile for ${l.name}`}
                onClick={() => setOpenIdx(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIdx(i);
                  }
                }}
              >
                <div className="leader__photo">
                  <img src={l.photo.src} alt={l.name} loading="lazy" />
                  <div className="leader__hover">
                    <p className="leader__hover-title">{l.hoverTitle}</p>
                    <p className="leader__hover-bio">{l.hoverBio}</p>
                    <p className="leader__hover-cue">Select for the full profile</p>
                  </div>
                </div>
                <div className="leader__meta">
                  <p className="leader__name">{l.name}</p>
                  <p className="leader__role">{l.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================
             MENA section — photo + copy
             ============================================================ */}
        <section className="mena" aria-labelledby="mena-title">
          <div className="mena__media">
            <img
              src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1600&q=80"
              alt="A skyline view representing the Middle East region"
              loading="lazy"
            />
          </div>
          <div className="mena__copy">
            <p className="eyebrow">03 / Xarpie MENA</p>
            <h2 id="mena-title" className="t-h2 stack-sm">
              Our Middle East leadership.
            </h2>
            <p>
              Xarpie MENA continues as part of the group, extending the same delivery
              model across the Middle East. Same senior-by-default team, same
              accountability line, same order of work — engineering foundation first, then
              the intelligence on top of it.
            </p>
            <ul className="mena__list">
              <li>Regional delivery and managed operations across the GCC</li>
              <li>Same two-layer model — digital transformation, then applied AI</li>
              <li>Local senior leadership, group-level accountability</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© XARPIE LABS · A MACHANI GROUP COMPANY</span>
        <span>OWNERSHIP FROM VISION TO OPERATIONS</span>
      </footer>

      {/* ============================================================
           Dialog — full profile (opens on click)
           ============================================================ */}
      {leader && (
        <div
          className="dialog"
          role="dialog"
          aria-modal="true"
          aria-hidden={false}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenIdx(null);
          }}
        >
          <div className="dialog__card">
            <div className="dialog__photo">
              <img src={leader.photo.src} alt={leader.name} />
              <button
                className="dialog__close"
                onClick={() => setOpenIdx(null)}
                aria-label="Close profile"
              >
                ×
              </button>
            </div>
            <div className="dialog__body">
              <h3>{leader.name}</h3>
              <p className="dialog__role">{leader.role}</p>
              {leader.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
