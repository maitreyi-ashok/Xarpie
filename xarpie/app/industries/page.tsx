import Link from 'next/link';
import '@/app/boards/industries.css';
import PageHero from '@/components/PageHero';
import ClosingPanel from '@/components/ClosingPanel';
import {
  FieldOpsDiagram,
  LeadIntelDiagram,
  SovereignAIDiagram,
} from '@/components/IndustryDiagrams';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="05 / Industries"
        title="A method that travels to your domain."
        body="We are industry agnostic by design — but the work has to land somewhere. These are the deployments carrying real operational load today. References are anonymised."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
      >
        <a className="btn btn-primary" href="#case-01">
          Read the case studies <span aria-hidden>→</span>
        </a>
        <Link className="btn btn-ghost--on-dark" href="/operating-model">
          How the model runs
        </Link>
      </PageHero>

      {/* ============================================================
          CASE 01 — Field operations (updated diagram)
          ============================================================ */}
      <section className="board" id="case-01">
        <div className="case__header">
          <p className="case__tag">Case study · Field operations</p>
          <h2 className="t-h2 case__title">
            A construction and materials client, running payroll on field-verified data for the first time.
          </h2>
        </div>

        <div className="case">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 40px)' }}>
            <div className="case__section">
              <span className="status status--live">
                <span className="status__dot" aria-hidden="true" />
                01 · In production
              </span>
              <h3 className="t-h3">Integrated field operations and payroll.</h3>
            </div>

            <div className="case__section">
              <p className="case__section-k">The problem</p>
              <p>
                Field data was being captured across spreadsheets, paper tickets and
                point tools, then re-keyed by hand in several places every week
                before payroll could run.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">What we built</p>
              <p>
                A single application covering the full field workflow — capture,
                records and multi-stage approvals in one place — integrated directly
                with the client&apos;s ERP to drive the weekly payroll cycle, with a
                complete audit trail.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">Outcomes</p>
              <ul className="case__outcomes">
                <li>One point of capture that serves every downstream step</li>
                <li>Payroll runs on field-verified data</li>
                <li>Duplicate and fragmented data entry eliminated</li>
                <li>Supervisory time freed from chasing data back to site</li>
              </ul>
            </div>

            <p className="case__footer">
              Live in the client&apos;s environment — carrying real operational load.
            </p>
          </div>

          {/* ✅ NEW diagram */}
          <figure className="case__figure case__figure--wide">
            <FieldOpsDiagram />
          </figure>
        </div>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">Where the work lands</p>
          <h2 className="t-h2">Field data, verified once and trusted downstream.</h2>
          <p>The same application that captures a shift on site is the one that drives the weekly payroll cycle.</p>
        </div>
      </section>

      {/* ============================================================
          CASE 02 — Lead intelligence (updated diagram)
          ============================================================ */}
      <section className="board" id="case-02">
        <div className="case__header">
          <p className="case__tag">Case study · Lead intelligence</p>
          <h2 className="t-h2 case__title">
            A manufacturer running agentic AI across inbound and published sources, with a bespoke CRM around it.
          </h2>
        </div>

        <div className="case">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 40px)' }}>
            <div className="case__section">
              <span className="status status--live">
                <span className="status__dot" aria-hidden="true" />
                02 · In production
              </span>
              <h3 className="t-h3">Agentic lead intelligence and bespoke CRM.</h3>
            </div>

            <div className="case__section">
              <p className="case__section-k">The problem</p>
              <p>
                Opportunities arrived by email and were scattered across public
                portals, aggregators and contractor sites, each needing hundreds of
                pages read simply to qualify.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">What we built</p>
              <p>
                Agentic AI that continuously monitors inbound and published sources,
                applies the client&apos;s own multi-factor qualification criteria to
                every opportunity, and produces scoring, summaries and a structured
                funnel with management dashboards.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">Outcomes</p>
              <ul className="case__outcomes">
                <li>Qualification that took days now happens in minutes</li>
                <li>Market coverage well beyond what manual review could reach</li>
                <li>Live visibility into funnel quality, not just volume</li>
                <li>Qualification criteria configurable by the business itself</li>
              </ul>
            </div>

            <p className="case__footer">
              Live in the client&apos;s environment — carrying real operational load.
            </p>
          </div>

          {/* ✅ NEW diagram */}
          <figure className="case__figure case__figure--wide">
            <LeadIntelDiagram />
          </figure>
        </div>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">On the shop floor</p>
          <h2 className="t-h2">Every opportunity, read in full — not sampled.</h2>
        </div>
      </section>

      {/* ============================================================
          CASE 03 — Sovereign AI (updated diagram)
          ============================================================ */}
      <section className="board" id="case-03">
        <div className="case__header">
          <p className="case__tag">Case study · Sovereign AI</p>
          <h2 className="t-h2 case__title">
            A healthcare and biomedical client running a private intelligence assistant over its document estate.
          </h2>
        </div>

        <div className="case">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 40px)' }}>
            <div className="case__section">
              <span className="status status--uat">
                <span className="status__dot" aria-hidden="true" />
                03 · User acceptance testing
              </span>
              <h3 className="t-h3">Sovereign enterprise intelligence assistant.</h3>
            </div>

            <div className="case__section">
              <p className="case__section-k">The problem</p>
              <p>
                Knowledge was spread across a growing internal document estate and
                external publications, and specialists had begun turning to public
                AI tools — taking sensitive material outside the organisation&apos;s
                perimeter.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">What we built</p>
              <p>
                Conversational and text interfaces over the enterprise document
                estate, cross-referencing market, regulatory and governance context
                against publications, with persona- and role-based access enforced on
                an open-weight model running on sovereign infrastructure.
              </p>
            </div>

            <div className="case__section">
              <p className="case__section-k">Outcomes</p>
              <ul className="case__outcomes">
                <li>Research and report compilation collapses from a week into a single request</li>
                <li>Confidential material never leaves the sovereign boundary</li>
                <li>Every answer is referenced and scoped to the user&apos;s role</li>
              </ul>
            </div>

            <p className="case__footer">
              Nearing production — currently in user acceptance testing.
            </p>
          </div>

          {/* ✅ NEW diagram */}
          <figure className="case__figure case__figure--wide">
            <SovereignAIDiagram />
          </figure>
        </div>
      </section>

      {/* Photo strip */}
      <section className="photo-strip">
        <div className="photo-strip__media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=80" alt="" loading="lazy" />
        </div>
        <div className="photo-strip__scrim" aria-hidden="true" />
        <div className="photo-strip__content">
          <p className="photo-strip__k">Inside the perimeter</p>
          <h2 className="t-h2">Nothing leaves the sovereign boundary — including the model.</h2>
        </div>
      </section>

      <ClosingPanel
        kicker="The method travels"
        title="Construction, manufacturing, healthcare. The domain changes — the discipline does not."
        body="These are the deployments carrying real operational load today. If your sector has the same shape of problem, the method travels to it."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/insights"
        secondaryLabel="Read the positions"
      />
    </>
  );
}
