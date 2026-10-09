import Link from 'next/link';
import '@/app/boards/capabilities.css';
import PageHero from '@/components/PageHero';
import ClosingPanel from '@/components/ClosingPanel';
import EngineeringCapabilityScroller from '@/components/EngineeringCapabilityScroller';

/* ============================================================
   ENGINEERING BASE — 5 capabilities (photo cards)
   ============================================================ */
const ENGINEERING_CAPS = [
  {
    num: '01',
    title: 'Application engineering',
    sub: 'Enterprise, web and field applications, built end to end and taken into daily use.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    alt: 'A developer building an enterprise application',
  },
  {
    num: '02',
    title: 'Integration & interfaces',
    sub: 'ERP, workflow, service management and third-party systems joined into one flow.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Multiple systems and interfaces joined together',
  },
  {
    num: '03',
    title: 'Data engineering & platform',
    sub: 'The pipelines, data models and foundation that everything above depends on.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Server racks and data infrastructure',
  },
  {
    num: '04',
    title: 'Cloud & platform engineering',
    sub: 'Migration, infrastructure automation, release pipelines and observability.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cloud infrastructure and connected systems',
  },
  {
    num: '05',
    title: 'Modernising the older core',
    sub: 'Legacy systems extended and exposed incrementally, without a disruptive rip-and-replace.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Legacy infrastructure being modernised',
  },
];

/* ============================================================
   INTELLIGENCE LAYER — 5 capabilities (photo cards)
   ============================================================ */
const INTELLIGENCE_CAPS = [
  {
    num: '01',
    title: 'Agentic AI & AI agents',
    sub: 'Systems that read, reason and act across business and operational workflows.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    alt: 'An agentic AI system in action',
  },
  {
    num: '02',
    title: 'AI & machine learning',
    sub: 'Document intelligence, scoring, prediction and decision support.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Machine learning output and analytics',
  },
  {
    num: '03',
    title: 'Retrieval & knowledge systems',
    sub: 'Answers grounded in your own material, cited, and limited to what a role permits.',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Structured knowledge and documents ready for retrieval',
  },
  {
    num: '04',
    title: 'Evaluation, guardrails & governance',
    sub: 'An agent register, risk-based limits and controls — written as code, not as policy alone.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    alt: 'A register of controls and governance rules',
  },
  {
    num: '05',
    title: 'Managed AI operations',
    sub: 'Accuracy, drift, cost and reliability watched and improved after go-live.',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    alt: 'A live operations dashboard tracking AI telemetry',
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="04 / Capabilities"
        title="Two layers, built by one team."
        body="Modular by design — engage one capability, several, or the whole chain. Each stands on its own and connects to the next."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80"
      >
        <a className="btn btn-primary" href="#layer-01">
          See the two layers <span aria-hidden>→</span>
        </a>
        <Link className="btn btn-ghost--on-dark" href="/operating-model">
          How the model runs
        </Link>
      </PageHero>

      {/* ============================================================
          LAYER 01 — Engineering base intro + infographic
          ============================================================ */}
      <section className="board" id="layer-01">
        <div className="layer-intro">
          <div>
            <span className="layer-tag">
              <span className="layer-tag__chip">01</span>
              <span className="layer-tag__txt">Engineering base</span>
            </span>
            <h2 className="t-h2 stack-sm">The foundation an intelligence layer depends on.</h2>
            <p className="t-lead stack-sm">
              Where an estate is scattered or fragmented, this is the work that has to come first.
            </p>
          </div>

          <figure
            role="img"
            aria-label="Two layers built in order: the engineering base below, the intelligence layer above."
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'var(--surface-2)',
              border: '1px solid var(--hairline)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <svg viewBox="0 0 420 240" fill="none" style={{ width: '100%', maxWidth: 400, height: 'auto' }}>
              <rect x="140" y="8" width="140" height="22" rx="11" fill="#0e1621" />
              <text x="210" y="23" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
                TWO LAYERS · ONE TEAM
              </text>
              <rect x="60" y="52" width="300" height="52" rx="10" fill="#f3eefe" stroke="#c9befa" strokeWidth="1.8" opacity="0.65" />
              <circle cx="92" cy="78" r="16" fill="#7c5cf0" opacity="0.65" />
              <text x="92" y="84" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">02</text>
              <text x="120" y="72" fontSize="9" fontWeight="800" fill="#7c5cf0" letterSpacing="0.14em" opacity="0.75">
                INTELLIGENCE LAYER
              </text>
              <text x="120" y="90" fontSize="12" fontWeight="700" fill="#0e1621" opacity="0.65">
                Depends on what sits below
              </text>
              <line x1="210" y1="104" x2="210" y2="124" stroke="#cbd5e6" strokeWidth="2" />
              <circle cx="210" cy="114" r="4" fill="#3d6ff5" />
              <line x1="100" y1="114" x2="204" y2="114" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />
              <line x1="216" y1="114" x2="320" y2="114" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />
              <rect x="60" y="124" width="300" height="52" rx="10" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.8" />
              <circle cx="92" cy="150" r="16" fill="#3d6ff5" />
              <text x="92" y="156" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">01</text>
              <text x="120" y="144" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
                ENGINEERING BASE
              </text>
              <text x="120" y="162" fontSize="12" fontWeight="700" fill="#0e1621">
                The work that comes first
              </text>
              <text x="210" y="208" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3d6ff5" letterSpacing="0.1em">
                FOUNDATION FIRST
              </text>
              <text x="210" y="226" textAnchor="middle" fontSize="9" fontWeight="600" fill="#5a6b82" letterSpacing="0.08em">
                the ground everything above depends on
              </text>
            </svg>
          </figure>
        </div>
      </section>

      {/* ============================================================
          LAYER 01 caps — HORIZONTAL SCROLL (photo cards, blue accent)
          ============================================================ */}
      <section className="board">
        <p className="eyebrow">Five capabilities</p>
        <h3 className="t-h3 stack-sm">
          The engineering base, capability by capability.
        </h3>

        <EngineeringCapabilityScroller
          id="eng-caps"
          items={ENGINEERING_CAPS}
          ariaLabel="Five engineering capabilities"
          variant="eng"
        />

        <p className="layer-closing">
          Foundation first — the work everything above depends on.
        </p>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">On the ground</p>
          <h2 className="t-h2">Applications, integration, data and platform — the ground the intelligence stands on.</h2>
        </div>
      </section>

      {/* ============================================================
          LAYER 02 — Intelligence layer intro + infographic
          ============================================================ */}
      <section className="board" id="layer-02">
        <div className="layer-intro">
          <div>
            <span className="layer-tag layer-tag--intel">
              <span className="layer-tag__chip">02</span>
              <span className="layer-tag__txt">Intelligence layer</span>
            </span>
            <h2 className="t-h2 stack-sm">Applied where it changes the outcome.</h2>
            <p className="t-lead stack-sm">
              Engineered to perform in production rather than in the demo.
            </p>
          </div>

          <figure
            role="img"
            aria-label="The intelligence layer active on top of the engineering base."
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'var(--surface-2)',
              border: '1px solid var(--hairline)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <svg viewBox="0 0 420 240" fill="none" style={{ width: '100%', maxWidth: 400, height: 'auto' }}>
              <rect x="140" y="8" width="140" height="22" rx="11" fill="#0e1621" />
              <text x="210" y="23" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
                TWO LAYERS · ONE TEAM
              </text>
              <rect x="60" y="52" width="300" height="52" rx="10" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.6" opacity="0.75" />
              <circle cx="92" cy="78" r="16" fill="#94a3b8" opacity="0.75" />
              <text x="92" y="84" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">01</text>
              <text x="120" y="72" fontSize="9" fontWeight="800" fill="#94a3b8" letterSpacing="0.14em">
                ENGINEERING BASE
              </text>
              <text x="120" y="90" fontSize="12" fontWeight="700" fill="#0e1621" opacity="0.65">
                Carried, not repeated
              </text>
              <line x1="210" y1="104" x2="210" y2="124" stroke="#c9befa" strokeWidth="2" />
              <circle cx="210" cy="114" r="4" fill="#7c5cf0" />
              <line x1="100" y1="114" x2="204" y2="114" stroke="#c9befa" strokeWidth="1.4" strokeDasharray="3 3" />
              <line x1="216" y1="114" x2="320" y2="114" stroke="#c9befa" strokeWidth="1.4" strokeDasharray="3 3" />
              <rect x="60" y="124" width="300" height="52" rx="10" fill="#f3eefe" stroke="#7c5cf0" strokeWidth="1.8" />
              <circle cx="92" cy="150" r="16" fill="#7c5cf0" />
              <text x="92" y="156" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">02</text>
              <text x="120" y="144" fontSize="9" fontWeight="800" fill="#7c5cf0" letterSpacing="0.14em">
                INTELLIGENCE LAYER
              </text>
              <text x="120" y="162" fontSize="12" fontWeight="700" fill="#0e1621">
                Built for production
              </text>
              <text x="210" y="208" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c5cf0" letterSpacing="0.1em">
                PRODUCTION, NOT DEMO
              </text>
              <text x="210" y="226" textAnchor="middle" fontSize="9" fontWeight="600" fill="#5a6b82" letterSpacing="0.08em">
                already carries the groundwork beneath it
              </text>
            </svg>
          </figure>
        </div>
      </section>

      {/* ============================================================
          LAYER 02 caps — HORIZONTAL SCROLL (photo cards, violet accent)
          ============================================================ */}
      <section className="board">
        <p className="eyebrow">Five capabilities</p>
        <h3 className="t-h3 stack-sm">
          The intelligence layer, capability by capability.
        </h3>

        <EngineeringCapabilityScroller
          id="intel-caps"
          items={INTELLIGENCE_CAPS}
          ariaLabel="Five intelligence capabilities"
          variant="intel"
        />

        <p className="layer-closing">Built for production, not for the demo.</p>
      </section>

      <ClosingPanel
        kicker="One team, both layers"
        title="Any AI we propose already carries the groundwork beneath it."
        body="Because one team delivers both layers, any AI solution we propose already carries the data, integration and platform work it depends on."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/industries"
        secondaryLabel="See deployed work"
      />
    </>
  );
}
