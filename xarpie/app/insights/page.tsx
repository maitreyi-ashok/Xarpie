import Link from 'next/link';
import '@/app/boards/insights.css';
import PageHero from '@/components/PageHero';
import ClosingPanel from '@/components/ClosingPanel';

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="01 / Insights"
        title="What we argue, and what we have to show for it."
        body="Four positions we hold on every engagement, and where each one shows up in the work. They are the reason the rest of this site reads the way it does."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
      >
        <a className="btn btn-primary" href="#evidence">
          Read the four positions <span aria-hidden>→</span>
        </a>
        <Link className="btn btn-ghost--on-dark" href="/operating-model">
          How an engagement runs
        </Link>
      </PageHero>

      {/* ============================================================
          Contents TOC
          ============================================================ */}
      <section className="board">
        <p className="ins-pill">
          <span className="ins-pill-chip">01</span>
          <span className="ins-pill-txt">Insights</span>
        </p>
        <h2 className="t-h1 ins-headline stack-sm">
          Four positions, and where each one shows up.
        </h2>
        <p className="ins-lede stack-sm">
          The industry and the technology change from client to client. These do not.
          Each position below links through to the work it governs.
        </p>

        <nav className="ins-toc stack-md" aria-label="Insights contents">
          <a className="ins-toc-row" href="#evidence">
            <span className="ins-toc-num">01</span>
            <span className="ins-toc-title">Build or buy is a question of evidence, not preference.</span>
            <span className="ins-toc-tag">On the first question</span>
          </a>
          <a className="ins-toc-row" href="#foundation">
            <span className="ins-toc-num">02</span>
            <span className="ins-toc-title">The foundation decides whether the intelligence works.</span>
            <span className="ins-toc-tag">On sequence</span>
          </a>
          <a className="ins-toc-row" href="#accountability">
            <span className="ins-toc-num">03</span>
            <span className="ins-toc-title">Accountability should not move at handover.</span>
            <span className="ins-toc-tag">On what happens after</span>
          </a>
          <a className="ins-toc-row" href="#travels">
            <span className="ins-toc-num">04</span>
            <span className="ins-toc-title">A method that travels beats a sector specialism.</span>
            <span className="ins-toc-tag">On domain</span>
          </a>
        </nav>
      </section>

      {/* ============================================================
          Slide 1 — Build or buy is a question of evidence
          ============================================================ */}
      <section className="board" id="evidence">
        <p className="ins-tag">On the first question</p>
        <h2 className="t-h2 ins-h2 stack-sm">
          Build or buy is a question of evidence, not preference.
        </h2>

        <div className="ins-body">
          <div>
            <div className="ins-copy">
              <p>
                Every engagement opens with the same question, and the answer is not
                ours to prefer. Where an off-the-shelf product genuinely fits, we
                integrate it. Where it does not, we build to your context rather than
                configuring your business around a package.
              </p>
              <p>
                The call is made on what works best in your circumstances — not on
                what we would rather sell. A partner who only builds will always find
                a reason to build; the discipline is in being able to answer either
                way, and then carrying the result all the way into production.
              </p>
            </div>
            <p className="ins-link-row">
              <Link className="ins-link" href="/operating-model#step-02">
                How that decision runs <span className="ins-arrow" aria-hidden>→</span>
              </Link>
            </p>
          </div>

          <figure className="ins-art-photo">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="A team reviewing options on evidence at a workshop table"
              loading="lazy"
            />
            <div className="ins-art-photo__scrim" aria-hidden="true" />
            <figcaption className="ins-art-photo__caption">
              <b>On the first question</b>
              The evidence decides, and either answer is carried to production.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============================================================
          Slide 2 — Foundation decides — WITH two-layer SVG
          ============================================================ */}
      <section className="board" id="foundation">
        <p className="ins-tag">On sequence</p>
        <h2 className="t-h2 ins-h2 stack-sm">
          The foundation decides whether the intelligence works.
        </h2>

        <div className="ins-body">
          <div>
            <div className="ins-copy">
              <p>
                Most organisations already have applications, a landscape, an
                infrastructure. Where those are scattered, fragmented or
                inconsistent, they will not carry AI reliably — and no amount of
                model quality compensates for an estate that cannot feed it.
              </p>
              <p>
                So the engineering foundation comes first: applications, integration,
                data and platform. It is often the prerequisite, and always the
                ground the intelligence stands on. Because one team delivers both
                layers, any AI we propose already carries the data, integration and
                platform work it depends on.
              </p>
            </div>
            <p className="ins-link-row">
              <Link className="ins-link" href="/capabilities">
                The two layers <span className="ins-arrow" aria-hidden>→</span>
              </Link>
            </p>
          </div>

          {/* ✅ UPDATED — the two-layer SVG from insights.html */}
          <figure className="ins-art">
            <svg
              viewBox="0 0 260 200"
              fill="none"
              role="img"
              aria-label="Two layers built in order: 01 engineering base, digital transformation; 02 intelligence layer, AI and applied intelligence. The base is a prerequisite, not a phase."
            >
              <rect x="88" y="10" width="84" height="20" rx="10" fill="#0e1621" />
              <text x="130" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
                BUILT IN ORDER
              </text>

              <rect x="30" y="46" width="200" height="52" rx="8" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.8" />
              <circle cx="56" cy="72" r="14" fill="#3d6ff5" />
              <text x="56" y="76" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">01</text>
              <text x="80" y="68" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
                ENGINEERING BASE
              </text>
              <text x="80" y="84" fontSize="11.5" fontWeight="700" fill="#0e1621">
                Digital transformation
              </text>

              <line x1="130" y1="98" x2="130" y2="112" stroke="#cbd5e6" strokeWidth="2" />
              <circle cx="130" cy="105" r="3.5" fill="#3d6ff5" />
              <line x1="60" y1="105" x2="124" y2="105" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />
              <line x1="136" y1="105" x2="200" y2="105" stroke="#e2e8f2" strokeWidth="1.4" strokeDasharray="3 3" />

              <rect x="30" y="112" width="200" height="52" rx="8" fill="#f3eefe" stroke="#c9befa" strokeWidth="1.8" />
              <circle cx="56" cy="138" r="14" fill="#7c5cf0" />
              <text x="56" y="142" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">02</text>
              <text x="80" y="134" fontSize="9" fontWeight="800" fill="#7c5cf0" letterSpacing="0.14em">
                INTELLIGENCE LAYER
              </text>
              <text x="80" y="150" fontSize="11.5" fontWeight="700" fill="#0e1621">
                AI &amp; applied intelligence
              </text>

              <text x="130" y="188" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#3d6ff5" letterSpacing="0.1em">
                PREREQUISITE, NOT A PHASE
              </text>
            </svg>
          </figure>
        </div>
      </section>

      {/* ============================================================
          Photo strip — Foundations first
          ============================================================ */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">In the field</p>
          <h2 className="t-h2">Foundations first, then the intelligence on top of it.</h2>
          <p>
            The base layer is not a phase to be completed; it is the ground that
            stays under everything that follows.
          </p>
        </div>
      </section>

      {/* ============================================================
          Slide 3 — Accountability should not move at handover
          ============================================================ */}
      <section className="board" id="accountability">
        <p className="ins-tag">On what happens after</p>
        <h2 className="t-h2 ins-h2 stack-sm">
          Accountability should not move at handover.
        </h2>

        <div className="ins-body">
          <div>
            <div className="ins-copy">
              <p>
                A system that reaches production is not finished; it is only
                beginning to carry load. Accuracy, drift, cost and reliability all
                move once real work runs through it, and they keep moving.
              </p>
              <p>
                Our solutions are already deployed and carrying real operational load
                in client environments, and we stay accountable once they are live
                through managed operations — under the same accountability line the
                engagement started with.
              </p>
            </div>
            <p className="ins-link-row">
              <Link className="ins-link" href="/operating-model#step-06">
                The step that keeps running <span className="ins-arrow" aria-hidden>→</span>
              </Link>
            </p>
          </div>

          <figure className="ins-art-photo">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=80"
              alt="An operator monitoring a live system dashboard"
              loading="lazy"
            />
            <div className="ins-art-photo__scrim" aria-hidden="true" />
            <figcaption className="ins-art-photo__caption">
              <b>Always watching</b>
              Accuracy, drift, cost and reliability — under the same line the engagement started with.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============================================================
          Slide 4 — A method that travels — WITH globe SVG
          ============================================================ */}
      <section className="board" id="travels">
        <p className="ins-tag">On domain</p>
        <h2 className="t-h2 ins-h2 stack-sm">
          A method that travels beats a sector specialism.
        </h2>

        <div className="ins-body">
          <div>
            <div className="ins-copy">
              <p>
                Our method is to learn the business directly from the people who run
                it — its components, its actors and its rules. That method travels,
                which is why we do not restrict ourselves to a single sector.
              </p>
              <p>
                We are industry agnostic by design, but the work has to land
                somewhere: construction and materials, manufacturing, healthcare.
                The domain changes and the method does not.
              </p>
            </div>
            <p className="ins-link-row">
              <Link className="ins-link" href="/industries">
                Where it has landed <span className="ins-arrow" aria-hidden>→</span>
              </Link>
            </p>
          </div>

          {/* ✅ UPDATED — the globe + sector chips SVG from insights.html */}
          <figure className="ins-art">
            <svg
              viewBox="0 0 260 200"
              fill="none"
              role="img"
              aria-label="One method at the centre, reaching construction, manufacturing, healthcare, finance, public and industry alike."
            >
              <g transform="translate(130, 100)">
                <circle cx="0" cy="0" r="34" fill="#3d6ff5" />
                <ellipse cx="0" cy="0" rx="13" ry="34" stroke="#ffffff" strokeWidth="1.6" fill="none" opacity="0.85" />
                <line x1="-34" y1="0" x2="34" y2="0" stroke="#ffffff" strokeWidth="1.6" opacity="0.85" />
                <path d="M-28 -16 Q0 -22 28 -16" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.65" />
                <path d="M-28 16 Q0 22 28 16" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.65" />
              </g>

              <g fontSize="8" fontWeight="800" letterSpacing="0.08em">
                <g transform="translate(14, 30)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">CONSTRUCTION</text>
                </g>
                <g transform="translate(14, 88)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">MANUFACTURING</text>
                </g>
                <g transform="translate(14, 146)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">HEALTHCARE</text>
                </g>
                <g transform="translate(174, 30)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">FINANCE</text>
                </g>
                <g transform="translate(174, 88)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">PUBLIC</text>
                </g>
                <g transform="translate(174, 146)">
                  <rect width="72" height="20" rx="10" fill="#ffffff" stroke="#e2e8f2" strokeWidth="1.2" />
                  <text x="36" y="14" textAnchor="middle" fill="#4a5a70">INDUSTRY</text>
                </g>
              </g>

              <g stroke="#e2e8f2" strokeWidth="1.2" strokeDasharray="3 3">
                <line x1="90" y1="40" x2="106" y2="80" />
                <line x1="90" y1="98" x2="96" y2="100" />
                <line x1="90" y1="156" x2="106" y2="120" />
                <line x1="170" y1="40" x2="154" y2="80" />
                <line x1="170" y1="98" x2="164" y2="100" />
                <line x1="170" y1="156" x2="154" y2="120" />
              </g>
            </svg>
          </figure>
        </div>
      </section>

      <ClosingPanel
        kicker="Where it has landed"
        title="The domain changes. The method does not."
        body="Construction and materials, manufacturing, healthcare — the second engagement in an unfamiliar sector looks like the tenth."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/about"
        primaryLabel="About Xarpie Labs"
        secondaryHref="/industries"
        secondaryLabel="See the deployed work"
      />
    </>
  );
}
