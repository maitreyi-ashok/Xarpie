'use client';

import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';

import raviImg  from '@/app/team/Ravi.png';
import phaniImg from '@/app/team/phani.jpeg';
import ziyadImg from '@/app/team/Ziyad.webp';
import mohanImg from '@/app/team/mohan.webp';

type Leader = {
  name: string;
  role: string;
  photo: StaticImageData;
  hoverTitle: string;
  hoverBio: string;
  bio: string[];
};

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
    <div className="team-page">
      {/* ==============================
          Photo hero
          ============================== */}
      <section className="photo-hero" aria-labelledby="hero-title">
        <div className="photo-hero__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80"
            alt=""
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

      {/* ==============================
          Team grid
          ============================== */}
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

      {/* ==============================
          MENA section — photo + copy
          ============================== */}
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
            accountability line, same order of work — engineering foundation first,
            then the intelligence on top of it.
          </p>
          <ul className="mena__list">
            <li>Regional delivery and managed operations across the GCC</li>
            <li>Same two-layer model — digital transformation, then applied AI</li>
            <li>Local senior leadership, group-level accountability</li>
          </ul>
        </div>
      </section>

      {/* ==============================
          Modal
          ============================== */}
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
                aria-label="Close profile"
                onClick={() => setOpenIdx(null)}
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
    </div>
  );
}
