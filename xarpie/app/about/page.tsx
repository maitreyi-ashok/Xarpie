import '@/app/boards/about.css';
import PhotoHero from '@/components/PageHero';
import ClosingPanel from '@/components/ClosingPanel';
import HorizontalScroller from '@/components/HorizontalScroller';

const POSITIONS = [
  {
    num: '01',
    title: 'Build or buy, decided on evidence',
    sub: 'Where an off-the-shelf product fits, we integrate it. Where it does not, we build.',
    tag: 'On the first question',
    href: '/insights#ins-evidence',
  },
  {
    num: '02',
    title: 'Bespoke where it earns its place',
    sub: 'We build the workflow around your business, rather than configuring your business around a package.',
    tag: 'On sequence',
    href: '/insights#ins-foundation',
  },
  {
    num: '03',
    title: 'Domain and industry agnostic',
    sub: 'Our method learns the business directly from the people who run it.',
    tag: 'On what happens after',
    href: '/insights#ins-accountability',
  },
  {
    num: '04',
    title: 'Accountable after deployment',
    sub: 'Our solutions are already deployed and carrying real operational load today.',
    tag: 'On domain',
    href: '/insights#ins-travels',
  },
];

export default function AboutPage() {
  return (
    <>
      <PhotoHero
        eyebrow="About"
        title="Ownership from vision to operations."
        body="Xarpie Labs is a consulting partner that does not stop at advice. We start at your business problem, shape the strategy and architecture around it, engineer the solution, deploy it into live operations, and stay accountable for it afterwards."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="board">
        <p className="eyebrow">01 / What we do</p>
        <h2 className="t-h2 stack-sm">Two things, in the order that makes them work.</h2>
        <p className="t-lead stack-sm">
          We do digital transformation and we do artificial intelligence — and the
          order matters. Most organisations already have applications, a landscape, an
          infrastructure. Where those are scattered, fragmented or inconsistent, they
          will not carry AI reliably.
        </p>
      </section>

      <section className="board">
        <div className="abt-hero" style={{ marginTop: 0 }}>
          <div className="abt-hero-inner">
            <p className="abt-hero-title">One system, two layers — built in order</p>
            <div className="abt-stack">
              <div className="abt-layer abt-layer--eng">
                <div className="abt-layer__photo">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className="abt-layer__body">
                  <span className="abt-layer-num">01</span>
                  <span className="abt-layer-tag">Engineering base</span>
                  <h3>Digital transformation</h3>
                  <p>
                    Applications, integration, data and platform — the ground the
                    intelligence stands on.
                  </p>
                </div>
              </div>

              <div className="abt-layer abt-layer--intel">
                <div className="abt-layer__photo">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className="abt-layer__body">
                  <span className="abt-layer-num">02</span>
                  <span className="abt-layer-tag">Intelligence layer</span>
                  <h3>AI &amp; applied intelligence</h3>
                  <p>
                    Agents, machine learning, retrieval, guardrails and managed AI
                    operations.
                  </p>
                </div>
              </div>
            </div>
            <p className="abt-hero-caption">Prerequisite, not a phase</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          02 / Where we stand — Four positions in horizontal scroller
          ============================================================ */}
      <section className="board" id="about-positions">
        <p className="eyebrow">02 / Where we stand</p>
        <h2 className="t-h2 stack-sm">
          Four positions we hold on every engagement.
        </h2>
        <p className="t-lead stack-sm">
          The industry and the technology change from client to client. These do not.
        </p>

        <HorizontalScroller
          id="positions-scroller"
          variant="card"
          ariaLabel="Four positions we hold on every engagement"
          items={POSITIONS}
        />

        <p className="layer-closing">The industry changes. These do not.</p>
      </section>

      <ClosingPanel
        kicker="From vision to operations"
        title="Ownership that does not end at go-live."
        body="We start at your business problem and stay accountable through to live operations."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/team"
        secondaryLabel="Meet the leadership"
      />
    </>
  );
}
