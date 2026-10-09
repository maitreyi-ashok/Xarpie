import '@/app/boards/operating-model.css';
import PhotoHero from '@/components/PageHero';
import ClosingPanel from '@/components/ClosingPanel';
import HorizontalScroller from '@/components/HorizontalScroller';

const STEPS = [
  { num: '01', title: 'Start at the business problem', sub: 'Engagements begin with your operational problem, not a product.', href: '#step-01' },
  { num: '02', title: 'Decide build or buy on evidence', sub: 'Where a product fits, we integrate it; where it does not, we build.', href: '#step-02' },
  { num: '03', title: 'Shape strategy & architecture', sub: 'Both layers drawn as one system before engineering begins.', href: '#step-03' },
  { num: '04', title: 'Engineer the solution', sub: 'One team builds both layers; legacy extended, not replaced.', href: '#step-04' },
  { num: '05', title: 'Deploy into live operations', sub: 'Systems carrying real operational load, joined to your systems of record.', href: '#step-05' },
  { num: '06', title: 'Stay accountable afterwards', sub: 'Accuracy, drift, cost and reliability watched — under the same line.', href: '#step-06' },
];

export default function OperatingModelPage() {
  return (
    <>
      <PhotoHero
        eyebrow="03 / Operating Model"
        title="One model, end to end."
        body="Every engagement runs on the same model, from first conversation to systems running in production."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Opening question + decision scale SVG */}
      <section className="board">
        <div className="question">
          <div>
            <p className="eyebrow">03 / Opening question</p>
            <h2 className="t-h2 stack-sm">Every engagement opens with one question.</h2>
            <p className="t-lead stack-sm">
              Should you build, or should you buy? We answer it on the evidence of
              what works best in your circumstances.
            </p>
          </div>

          {/* ✅ Decision scale SVG */}
          <figure
            style={{
              padding: 20,
              borderRadius: 'var(--radius)',
              background: 'var(--surface-2)',
              border: '1px solid var(--hairline)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <svg
              viewBox="0 0 320 220"
              fill="none"
              role="img"
              aria-label="A scale weighing build against buy on evidence, with either pan carried through to production."
              style={{ width: '100%', maxWidth: 340, height: 'auto' }}
            >
              <text x="160" y="20" textAnchor="middle" fontSize="10" fontWeight="800" fill="#5a6b82" letterSpacing="0.16em">
                EVIDENCE
              </text>
              <line x1="160" y1="44" x2="160" y2="170" stroke="#0e1621" strokeWidth="3" strokeLinecap="round" />
              <line x1="60" y1="60" x2="260" y2="60" stroke="#0e1621" strokeWidth="3" strokeLinecap="round" />
              <circle cx="160" cy="44" r="5" fill="#3d6ff5" />
              <line x1="100" y1="60" x2="100" y2="78" stroke="#3d6ff5" strokeWidth="2" />
              <path d="M70 78 L130 78 L118 100 A22 22 0 0 1 82 100 Z" fill="#3d6ff5" />
              <path d="M90 88 L100 80 L110 88 L110 98 L90 98 Z" fill="#ffffff" opacity="0.9" />
              <text x="100" y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
                BUILD
              </text>
              <line x1="220" y1="60" x2="220" y2="78" stroke="#94a3b8" strokeWidth="2" />
              <path d="M190 78 L250 78 L238 100 A22 22 0 0 1 202 100 Z" fill="#94a3b8" />
              <rect x="210" y="82" width="20" height="14" rx="2" fill="#ffffff" opacity="0.9" />
              <text x="220" y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="#94a3b8" letterSpacing="0.14em">
                BUY
              </text>
              <line x1="130" y1="170" x2="190" y2="170" stroke="#0e1621" strokeWidth="3" strokeLinecap="round" />
              <line x1="100" y1="138" x2="100" y2="162" stroke="#cbd5e6" strokeWidth="1.6" strokeDasharray="3 3" />
              <line x1="220" y1="138" x2="220" y2="162" stroke="#cbd5e6" strokeWidth="1.6" strokeDasharray="3 3" />
              <line x1="100" y1="162" x2="220" y2="162" stroke="#cbd5e6" strokeWidth="1.6" />
              <line x1="160" y1="162" x2="160" y2="182" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
              <circle cx="160" cy="192" r="10" fill="#16a34a" />
              <path d="M155 192 L159 196 L166 188" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="160" y="216" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#15803d" letterSpacing="0.1em">
                PRODUCTION
              </text>
            </svg>
          </figure>
        </div>
      </section>

      {/* The method — Six steps scroller */}
      <section className="board" id="method">
        <p className="eyebrow">03 / The method</p>
        <h2 className="t-h2 stack-sm">Six steps, the same every time.</h2>
        <p className="t-lead stack-sm">Xarpie follows the same method on every engagement.</p>

        <HorizontalScroller
          id="steps-scroller"
          variant="step"
          ariaLabel="The six steps of the method"
          items={STEPS}
        />
      </section>

      {/* ============================================================
          STEP 01 — Learning the domain SVG
          ============================================================ */}
      <section className="board" id="step-01">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 01 · of 06</p>
              <h2 className="t-h2 step__title">Start at the business problem.</h2>
            </div>
            <p className="step__lede">
              Engagements begin with your actual operational problem, not a product
              or a platform.
            </p>
            <p className="step__copy">
              The people who shape the engagement are the people who will build it,
              and they learn the business from the people who run it.
            </p>

            {/* ✅ SVG: senior team learning the domain */}
            <figure
              className="step__diagram"
              role="img"
              aria-label="A senior team learning the domain directly from the operators."
            >
              <svg viewBox="0 0 480 200" fill="none">
                <g transform="translate(40, 40)">
                  <circle cx="20" cy="20" r="18" fill="#3d6ff5" />
                  <circle cx="20" cy="15" r="5" fill="#ffffff" />
                  <path d="M10 30 Q10 24 20 24 Q30 24 30 30 Z" fill="#ffffff" />
                  <text x="20" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4a5a70" letterSpacing="0.1em">
                    OPERATIONS
                  </text>
                </g>
                <g transform="translate(40, 120)">
                  <circle cx="20" cy="20" r="18" fill="#94a3b8" />
                  <circle cx="20" cy="15" r="5" fill="#ffffff" />
                  <path d="M10 30 Q10 24 20 24 Q30 24 30 30 Z" fill="#ffffff" />
                  <text x="20" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4a5a70" letterSpacing="0.1em">
                    FINANCE
                  </text>
                </g>
                <g transform="translate(40, 20)">
                  <circle cx="20" cy="20" r="18" fill="#7c5cf0" />
                  <circle cx="20" cy="15" r="5" fill="#ffffff" />
                  <path d="M10 30 Q10 24 20 24 Q30 24 30 30 Z" fill="#ffffff" />
                  <text x="20" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4a5a70" letterSpacing="0.1em">
                    LEADERSHIP
                  </text>
                </g>
                <g stroke="#cbd5e6" strokeWidth="1.4" strokeDasharray="3 3">
                  <line x1="80" y1="60" x2="180" y2="100" />
                  <line x1="80" y1="140" x2="180" y2="100" />
                  <line x1="80" y1="40" x2="180" y2="100" />
                </g>
                <circle cx="180" cy="100" r="4" fill="#3d6ff5" />

                <g transform="translate(210, 60)">
                  <rect x="0" y="0" width="120" height="80" rx="10" fill="#f6f8fc" stroke="#3d6ff5" strokeWidth="1.8" />
                  <text x="60" y="22" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.12em">
                    SENIOR TEAM
                  </text>
                  <rect x="14" y="34" width="92" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="14" y="45" width="70" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="14" y="56" width="80" height="3" rx="1.5" fill="#cbd5e6" />
                </g>

                <path d="M340 100 L370 100" stroke="#3d6ff5" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-step-01)" />
                <defs>
                  <marker id="arrow-step-01" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 Z" fill="#3d6ff5" />
                  </marker>
                </defs>

                <g transform="translate(378, 60)">
                  <rect x="0" y="0" width="90" height="80" rx="10" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.8" />
                  <rect x="10" y="16" width="60" height="3" rx="1.5" fill="#3d6ff5" />
                  <rect x="10" y="28" width="70" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="10" y="40" width="50" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="10" y="52" width="66" height="3" rx="1.5" fill="#cbd5e6" />
                  <text x="45" y="74" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3d6ff5" letterSpacing="0.1em">
                    PROBLEM
                  </text>
                </g>
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>An agreed statement of the operational problem, in the language of the business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STEP 02 — Build/Buy fork SVG
          ============================================================ */}
      <section className="board" id="step-02">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 02 · of 06</p>
              <h2 className="t-h2 step__title">Decide build or buy on evidence.</h2>
            </div>
            <p className="step__lede">
              Where an off-the-shelf product genuinely fits, we integrate it.
            </p>
            <p className="step__copy">
              The call is made on what works best in your circumstances.
            </p>

            {/* ✅ SVG: build/buy fork */}
            <figure className="step__diagram" role="img" aria-label="A decision forking to buy or build on evidence.">
              <svg viewBox="0 0 480 160" fill="none">
                <g transform="translate(20, 60)">
                  <circle cx="20" cy="20" r="18" fill="#0e1621" />
                  <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="800" fill="#ffffff">?</text>
                </g>
                <g stroke="#3d6ff5" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M58 80 Q100 80 120 50 T180 30" />
                  <path d="M174 26 L182 30 L174 34" />
                  <path d="M58 80 Q100 80 120 110 T180 130" />
                  <path d="M174 126 L182 130 L174 134" />
                </g>
                <g transform="translate(190, 18)">
                  <rect width="100" height="24" rx="6" fill="#94a3b8" />
                  <text x="50" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" letterSpacing="0.12em">
                    BUY
                  </text>
                </g>
                <g transform="translate(190, 118)">
                  <rect width="100" height="24" rx="6" fill="#3d6ff5" />
                  <text x="50" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" letterSpacing="0.12em">
                    BUILD
                  </text>
                </g>
                <path d="M300 80 L340 80" stroke="#3d6ff5" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-step-02)" />
                <defs>
                  <marker id="arrow-step-02" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 Z" fill="#3d6ff5" />
                  </marker>
                </defs>
                <g transform="translate(348, 40)">
                  <rect width="118" height="80" rx="10" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.8" />
                  <rect x="12" y="18" width="46" height="3" rx="1.5" fill="#3d6ff5" />
                  <rect x="12" y="30" width="80" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="12" y="42" width="70" height="3" rx="1.5" fill="#cbd5e6" />
                  <rect x="12" y="54" width="86" height="3" rx="1.5" fill="#cbd5e6" />
                  <text x="59" y="72" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3d6ff5" letterSpacing="0.1em">
                    DECISION
                  </text>
                </g>
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>A build-or-buy decision with the evidence behind it written down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">From the workshop</p>
          <h2 className="t-h2">Designed as one system, before anyone writes code.</h2>
        </div>
      </section>

      {/* ============================================================
          STEP 03 — Architecture two-layer SVG
          ============================================================ */}
      <section className="board" id="step-03">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 03 · of 06</p>
              <h2 className="t-h2 step__title">Shape strategy and architecture.</h2>
            </div>
            <p className="step__lede">
              Data, integration and platform work — plus any intelligence layer — is
              designed as one system before engineering begins.
            </p>

            {/* ✅ SVG: one architecture, one sequence */}
            <figure className="step__diagram" role="img" aria-label="Two layers designed as one system.">
              <svg viewBox="0 0 480 220" fill="none">
                <rect x="180" y="10" width="120" height="22" rx="11" fill="#0e1621" />
                <text x="240" y="25" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
                  ONE SYSTEM
                </text>

                <rect x="60" y="52" width="360" height="52" rx="10" fill="#f3eefe" stroke="#c9befa" strokeWidth="1.8" />
                <circle cx="92" cy="78" r="16" fill="#7c5cf0" />
                <text x="92" y="84" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">02</text>
                <text x="120" y="72" fontSize="9" fontWeight="800" fill="#7c5cf0" letterSpacing="0.14em">
                  INTELLIGENCE LAYER
                </text>
                <text x="120" y="90" fontSize="12" fontWeight="700" fill="#0e1621">
                  Agents · ML · Retrieval · Guardrails
                </text>

                <line x1="240" y1="104" x2="240" y2="124" stroke="#cbd5e6" strokeWidth="2" />
                <circle cx="240" cy="114" r="4" fill="#3d6ff5" />
                <line x1="120" y1="114" x2="234" y2="114" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />
                <line x1="246" y1="114" x2="360" y2="114" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />

                <rect x="60" y="124" width="360" height="52" rx="10" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.8" />
                <circle cx="92" cy="150" r="16" fill="#3d6ff5" />
                <text x="92" y="156" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">01</text>
                <text x="120" y="144" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
                  ENGINEERING BASE
                </text>
                <text x="120" y="162" fontSize="12" fontWeight="700" fill="#0e1621">
                  Applications · Integration · Data · Platform
                </text>

                <g stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" fill="none">
                  <path d="M40 78 Q20 78 20 100 T20 150 Q20 172 60 172" />
                </g>
                <text
                  x="16"
                  y="115"
                  fontSize="8"
                  fontWeight="700"
                  fill="#94a3b8"
                  letterSpacing="0.12em"
                  transform="rotate(-90 16 115)"
                >
                  LEGACY ESTATE
                </text>

                <text x="240" y="208" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3d6ff5" letterSpacing="0.1em">
                  ONE ARCHITECTURE, ONE SEQUENCE
                </text>
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>One architecture covering both layers, and the sequence they are built in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STEP 04 — One team, both layers SVG
          ============================================================ */}
      <section className="board" id="step-04">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 04 · of 06</p>
              <h2 className="t-h2 step__title">Engineer the solution.</h2>
            </div>
            <p className="step__lede">
              The same team builds the engineering base and the intelligence on top of it.
            </p>

            {/* ✅ SVG: one team building both layers */}
            <figure className="step__diagram" role="img" aria-label="One team building both layers.">
              <svg viewBox="0 0 480 200" fill="none">
                <g transform="translate(20, 68)">
                  <rect x="0" y="0" width="120" height="64" rx="10" fill="#f6f8fc" stroke="#3d6ff5" strokeWidth="1.8" />
                  <text x="60" y="22" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.12em">
                    ONE TEAM
                  </text>
                  <text x="60" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill="#0e1621">
                    Two layers
                  </text>
                  <text x="60" y="54" textAnchor="middle" fontSize="10" fontWeight="600" fill="#0e1621">
                    One backlog
                  </text>
                </g>

                <g stroke="#3d6ff5" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M148 100 Q190 100 200 60 T250 40" />
                  <path d="M244 36 L252 40 L244 44" />
                  <path d="M148 100 Q190 100 200 140 T250 160" />
                  <path d="M244 156 L252 160 L244 164" />
                </g>

                <g transform="translate(262, 20)">
                  <rect x="0" y="0" width="140" height="40" rx="8" fill="#f3eefe" stroke="#c9befa" strokeWidth="1.6" />
                  <text x="70" y="17" textAnchor="middle" fontSize="8" fontWeight="800" fill="#7c5cf0" letterSpacing="0.14em">
                    INTELLIGENCE
                  </text>
                  <text x="70" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0e1621">
                    Carries its groundwork
                  </text>
                </g>

                <g transform="translate(262, 140)">
                  <rect x="0" y="0" width="140" height="40" rx="8" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.6" />
                  <text x="70" y="17" textAnchor="middle" fontSize="8" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
                    ENGINEERING BASE
                  </text>
                  <text x="70" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0e1621">
                    Extended, not replaced
                  </text>
                </g>

                <g transform="translate(412, 90)">
                  <rect x="0" y="0" width="56" height="24" rx="12" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="2.4" fill="#16a34a" />
                  <text x="34" y="15" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#15803d" letterSpacing="0.1em">
                    LEGACY
                  </text>
                </g>
                <line x1="402" y1="102" x2="412" y2="102" stroke="#cbd5e6" strokeWidth="1.4" strokeDasharray="2 2" />
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>A working system, built against the architecture rather than around it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">Into production</p>
          <h2 className="t-h2">Carrying real load, not just running in a demo.</h2>
        </div>
      </section>

      {/* ============================================================
          STEP 05 — In production SVG
          ============================================================ */}
      <section className="board" id="step-05">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 05 · of 06</p>
              <h2 className="t-h2 step__title">Deploy into live operations.</h2>
            </div>
            <p className="step__lede">
              Systems go into production carrying real operational and financial load.
            </p>

            {/* ✅ SVG: in production */}
            <figure className="step__diagram" role="img" aria-label="A deployed system carrying live load.">
              <svg viewBox="0 0 480 200" fill="none">
                <g transform="translate(20, 20)">
                  <rect x="0" y="0" width="180" height="160" rx="10" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.8" />
                  <rect x="0" y="0" width="180" height="26" rx="10" fill="#3d6ff5" />
                  <rect x="0" y="14" width="180" height="12" fill="#3d6ff5" />
                  <circle cx="12" cy="13" r="2" fill="#ffffff" opacity="0.9" />
                  <circle cx="22" cy="13" r="2" fill="#ffffff" opacity="0.7" />
                  <text x="90" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
                    IN PRODUCTION
                  </text>
                  <polyline
                    points="12,80 30,80 36,66 44,96 54,74 62,80 90,80 96,66 104,96 114,74 122,80 150,80 156,66 164,96 172,80"
                    stroke="#3d6ff5"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text x="16" y="130" fontSize="8" fontWeight="700" fill="#4a5a70" letterSpacing="0.1em">
                    PAYROLL · FUNNEL · RESEARCH
                  </text>
                  <rect x="14" y="140" width="152" height="1" fill="#e2e8f2" />
                  <text x="16" y="154" fontSize="8" fontWeight="700" fill="#15803d" letterSpacing="0.1em">
                    AUDIT TRAIL ACTIVE
                  </text>
                </g>

                <g stroke="#3d6ff5" strokeWidth="1.8" strokeDasharray="3 3" fill="none">
                  <line x1="200" y1="60" x2="250" y2="40" />
                  <line x1="200" y1="100" x2="250" y2="100" />
                  <line x1="200" y1="140" x2="250" y2="160" />
                </g>

                <g>
                  <g transform="translate(260, 24)">
                    <rect x="0" y="0" width="200" height="32" rx="8" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.4" />
                    <text x="18" y="20" fontSize="10" fontWeight="700" fill="#0e1621">ERP</text>
                    <text x="60" y="20" fontSize="9" fontWeight="500" fill="#4a5a70">systems of record</text>
                  </g>
                  <g transform="translate(260, 84)">
                    <rect x="0" y="0" width="200" height="32" rx="8" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.4" />
                    <text x="18" y="20" fontSize="10" fontWeight="700" fill="#0e1621">WORKFLOW</text>
                    <text x="86" y="20" fontSize="9" fontWeight="500" fill="#4a5a70">operations</text>
                  </g>
                  <g transform="translate(260, 144)">
                    <rect x="0" y="0" width="200" height="32" rx="8" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.4" />
                    <text x="18" y="20" fontSize="10" fontWeight="700" fill="#0e1621">SERVICE</text>
                    <text x="72" y="20" fontSize="9" fontWeight="500" fill="#4a5a70">integrated</text>
                  </g>
                </g>
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>A system in production, integrated with your systems of record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STEP 06 — Always-watching SVG
          ============================================================ */}
      <section className="board" id="step-06">
        <div className="step">
          <div className="step__body">
            <div className="step__header">
              <p className="step__num">Step 06 · of 06</p>
              <h2 className="t-h2 step__title">Stay accountable afterwards.</h2>
            </div>
            <p className="step__lede">
              Managed support continues after go-live — watching accuracy, drift,
              cost and reliability.
            </p>

            {/* ✅ SVG: always watching */}
            <figure className="step__diagram" role="img" aria-label="The live system watched continuously.">
              <svg viewBox="0 0 260 200" fill="none" style={{ maxWidth: 280 }}>
                <circle cx="130" cy="100" r="70" stroke="#e2e8f2" strokeWidth="1.6" strokeDasharray="5 6" fill="none" />
                <line x1="0" y1="100" x2="260" y2="100" stroke="#3d6ff5" strokeWidth="1.6" opacity="0.55" />

                <rect x="10" y="90" width="52" height="20" rx="10" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.4" />
                <text x="36" y="103" textAnchor="middle" fontSize="8" fontWeight="800" fill="#2f5ad6" letterSpacing="0.14em">
                  ALWAYS
                </text>

                <path d="M130 62 L160 72 V98 C160 118 148 130 130 138 C112 130 100 118 100 98 V72 Z" fill="#3d6ff5" />
                <path d="M118 100 L125 107 L142 90" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                <g transform="translate(118, 12)">
                  <circle cx="12" cy="12" r="12" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="5" stroke="#3d6ff5" strokeWidth="1.6" fill="none" />
                  <circle cx="12" cy="12" r="1.6" fill="#3d6ff5" />
                  <text x="12" y="36" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
                    ACCURACY
                  </text>
                </g>
                <g transform="translate(224, 88)">
                  <circle cx="12" cy="12" r="12" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.6" />
                  <path d="M6 16 Q10 11 14 14 T22 10" stroke="#3d6ff5" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  <text x="12" y="36" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
                    DRIFT
                  </text>
                </g>
                <g transform="translate(118, 152)">
                  <circle cx="12" cy="12" r="12" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="5" stroke="#3d6ff5" strokeWidth="1.6" fill="none" />
                  <text x="12" y="14.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3d6ff5">$</text>
                  <text x="12" y="36" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
                    COST
                  </text>
                </g>
                <g transform="translate(0, 88)">
                  <circle cx="12" cy="12" r="12" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.6" />
                  <polyline
                    points="4,12 8,12 10,7 13,18 15,10 17,12 20,12"
                    stroke="#3d6ff5"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text x="12" y="36" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
                    RELIABILITY
                  </text>
                </g>

                <rect x="166" y="168" width="88" height="20" rx="10" fill="#f6f8fc" stroke="#e2e8f2" strokeWidth="1.2" />
                <circle cx="178" cy="178" r="2.6" fill="#3d6ff5" />
                <text x="186" y="181" fontSize="7.5" fontWeight="800" fill="#2f5ad6" letterSpacing="0.12em">
                  NO HANDOVER
                </text>
              </svg>
            </figure>

            <div className="step__outcome">
              <span className="step__outcome-k">Leaves you with</span>
              <p>Managed operations, under the accountability the engagement started with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three ways to work with us */}
      <section className="board">
        <p className="eyebrow">04 / How we deliver</p>
        <h2 className="t-h2 stack-sm">Three ways to work with us.</h2>
        <div className="ways">
          {[
            { k: 'Shape 01', t: 'End-to-end build', p: 'Net-new platforms and transformations where we own the full journey from design to run.', f: 'Organisations wanting a single accountable partner from idea to live system.' },
            { k: 'Shape 02', t: 'Embedded pods', p: 'Senior, forward-deployed squads that augment and accelerate your existing teams.', f: 'Mid-programme work, or when capacity and expertise are the constraint.' },
            { k: 'Shape 03', t: 'Agent Factory', p: 'A library of reusable AI agents assembled and tailored by our engineers.', f: 'Rapid, outcome-driven automation of defined workflows, where speed matters most.' },
          ].map((w) => (
            <article key={w.k} className="way">
              <span className="way__k">{w.k}</span>
              <h3>{w.t}</h3>
              <p>{w.p}</p>
              <div className="way__for">
                <b>For</b>
                {w.f}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingPanel
        kicker="From vision to operations"
        title="The shape stays constant. The distance is yours to choose."
        body="Tell us the operational problem, and we will tell you how far along the model you need us."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/insights"
        secondaryLabel="Read the positions"
      />
    </>
  );
}
