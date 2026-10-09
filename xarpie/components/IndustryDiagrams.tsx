// ============================================================
// Industry case study diagrams
// Each SVG tells a "before → during → after" story with a clean
// structure: inputs on one side, the Xarpie-built system in the
// middle, and outcomes/status on the other side.
// ============================================================

/* ============================================================
   01 · Field operations & payroll
   Before: scattered spreadsheets & paper
   During: one application + ERP integration
   After:  field-verified payroll with full audit trail
   ============================================================ */
export function FieldOpsDiagram() {
  return (
    <svg viewBox="0 0 560 400" fill="none" role="img"
         aria-label="Scattered field data captured across three tools, consolidated into one application, flowing through multi-stage approvals into the client ERP, driving a field-verified payroll cycle with a complete audit trail.">
      <defs>
        <marker id="arrow-fo" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#3d6ff5" />
        </marker>
        <marker id="arrow-fo-out" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#16a34a" />
        </marker>
        <linearGradient id="fo-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d6ff5" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#3d6ff5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Header — Before / After labels */}
      <g fontSize="10" fontWeight="800" letterSpacing="0.16em">
        <text x="80" y="22" textAnchor="middle" fill="#94a3b8">BEFORE</text>
        <text x="280" y="22" textAnchor="middle" fill="#3d6ff5">XARPIE BUILT</text>
        <text x="480" y="22" textAnchor="middle" fill="#15803d">AFTER</text>
      </g>
      <line x1="10" y1="32" x2="550" y2="32" stroke="#e2e8f2" strokeWidth="1" />

      {/* BEFORE column — three scattered sources */}
      <g transform="translate(20, 60)">
        {/* spreadsheet */}
        <g>
          <rect x="0" y="0" width="120" height="46" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.4" />
          <rect x="0" y="0" width="120" height="14" rx="6" fill="#f6f8fc" />
          <line x1="40" y1="0" x2="40" y2="46" stroke="#e2e8f2" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="46" stroke="#e2e8f2" strokeWidth="1" />
          <line x1="0" y1="23" x2="120" y2="23" stroke="#e2e8f2" strokeWidth="1" />
          <text x="10" y="11" fontSize="7.5" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">SPREADSHEETS</text>
          <rect x="6" y="20" width="26" height="3" rx="1.5" fill="#cbd5e6" />
          <rect x="46" y="30" width="26" height="3" rx="1.5" fill="#cbd5e6" />
          <rect x="86" y="36" width="26" height="3" rx="1.5" fill="#cbd5e6" />
        </g>
        {/* paper tickets */}
        <g transform="translate(0, 62)">
          <rect x="6" y="0" width="108" height="40" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.4" transform="rotate(-3 60 20)" />
          <rect x="6" y="4" width="108" height="40" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.4" />
          <text x="16" y="18" fontSize="7.5" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">PAPER TICKETS</text>
          <rect x="16" y="26" width="70" height="3" rx="1.5" fill="#cbd5e6" />
          <rect x="16" y="33" width="52" height="3" rx="1.5" fill="#e2e8f2" />
        </g>
        {/* point tools */}
        <g transform="translate(0, 124)">
          <rect x="0" y="0" width="120" height="46" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.4" />
          <text x="10" y="16" fontSize="7.5" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">POINT TOOLS</text>
          <circle cx="16" cy="30" r="3" fill="#cbd5e6" />
          <rect x="24" y="28" width="60" height="3" rx="1.5" fill="#e2e8f2" />
          <circle cx="16" cy="40" r="3" fill="#cbd5e6" />
          <rect x="24" y="38" width="50" height="3" rx="1.5" fill="#e2e8f2" />
        </g>
        {/* "re-keyed by hand" annotation */}
        <g transform="translate(0, 178)">
          <rect x="0" y="0" width="120" height="26" rx="13" fill="#fef2f2" stroke="#fecaca" strokeWidth="1.2" />
          <text x="60" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fill="#cf3324" letterSpacing="0.1em">
            RE-KEYED BY HAND
          </text>
        </g>
      </g>

      {/* Arrows from BEFORE to XARPIE BUILT */}
      <g stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" fill="none">
        <path d="M150 90 Q180 90 200 130" markerEnd="url(#arrow-fo)" />
        <path d="M150 152 L195 152" markerEnd="url(#arrow-fo)" />
        <path d="M150 214 Q180 214 200 178" markerEnd="url(#arrow-fo)" />
      </g>

      {/* XARPIE BUILT — the consolidated application */}
      <g transform="translate(210, 60)">
        <rect x="0" y="0" width="180" height="230" rx="12" fill="url(#fo-glow)" stroke="#3d6ff5" strokeWidth="1.8" />
        <rect x="0" y="0" width="180" height="32" rx="12" fill="#3d6ff5" />
        <rect x="0" y="16" width="180" height="16" fill="#3d6ff5" />
        <circle cx="14" cy="16" r="2" fill="#ffffff" opacity="0.9" />
        <circle cx="24" cy="16" r="2" fill="#ffffff" opacity="0.7" />
        <text x="90" y="20" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.14em">
          ONE APPLICATION
        </text>

        {/* Step 1 — Capture */}
        <g transform="translate(14, 46)">
          <rect x="0" y="0" width="152" height="34" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <circle cx="14" cy="17" r="6" fill="#3d6ff5" />
          <text x="14" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff">1</text>
          <text x="30" y="14" fontSize="9" fontWeight="700" fill="#0e1621">Field capture</text>
          <text x="30" y="26" fontSize="7.5" fill="#5a6b82">One point of entry</text>
        </g>
        {/* Step 2 — Records */}
        <g transform="translate(14, 88)">
          <rect x="0" y="0" width="152" height="34" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <circle cx="14" cy="17" r="6" fill="#3d6ff5" />
          <text x="14" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff">2</text>
          <text x="30" y="14" fontSize="9" fontWeight="700" fill="#0e1621">Records &amp; data</text>
          <text x="30" y="26" fontSize="7.5" fill="#5a6b82">One source of truth</text>
        </g>
        {/* Step 3 — Approvals */}
        <g transform="translate(14, 130)">
          <rect x="0" y="0" width="152" height="34" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <circle cx="14" cy="17" r="6" fill="#3d6ff5" />
          <text x="14" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff">3</text>
          <text x="30" y="14" fontSize="9" fontWeight="700" fill="#0e1621">Multi-stage approvals</text>
          <text x="30" y="26" fontSize="7.5" fill="#5a6b82">Site → supervisor → payroll</text>
        </g>
        {/* Connector — ERP */}
        <g transform="translate(14, 174)">
          <rect x="0" y="0" width="152" height="34" rx="6" fill="#f6f8fc" stroke="#3d6ff5" strokeWidth="1.6" />
          <circle cx="14" cy="17" r="6" fill="#0e1621" />
          <text x="14" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff">↔</text>
          <text x="30" y="14" fontSize="9" fontWeight="700" fill="#0e1621">Integrated ERP</text>
          <text x="30" y="26" fontSize="7.5" fill="#5a6b82">Direct feed to payroll</text>
        </g>

        {/* Vertical connectors between steps */}
        <g stroke="#3d6ff5" strokeWidth="1.4" strokeDasharray="3 3" fill="none">
          <line x1="90" y1="80" x2="90" y2="86" />
          <line x1="90" y1="122" x2="90" y2="128" />
          <line x1="90" y1="164" x2="90" y2="172" />
        </g>
      </g>

      {/* Arrows from XARPIE BUILT to AFTER */}
      <path d="M390 145 L430 145" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-fo-out)" />

      {/* AFTER column — outcomes */}
      <g transform="translate(440, 60)">
        {/* Outcome chip */}
        <g>
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.4" />
          <circle cx="14" cy="17" r="5" fill="#16a34a" />
          <path d="M11 17 L13 19 L17 14" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="26" y="14" fontSize="8" fontWeight="700" fill="#15803d">One point</text>
          <text x="26" y="25" fontSize="8" fontWeight="700" fill="#15803d">of capture</text>
        </g>
        <g transform="translate(0, 46)">
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.4" />
          <circle cx="14" cy="17" r="5" fill="#16a34a" />
          <path d="M11 17 L13 19 L17 14" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="26" y="14" fontSize="8" fontWeight="700" fill="#15803d">Field-verified</text>
          <text x="26" y="25" fontSize="8" fontWeight="700" fill="#15803d">payroll</text>
        </g>
        <g transform="translate(0, 92)">
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.4" />
          <circle cx="14" cy="17" r="5" fill="#16a34a" />
          <path d="M11 17 L13 19 L17 14" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="26" y="14" fontSize="8" fontWeight="700" fill="#15803d">Duplicate entry</text>
          <text x="26" y="25" fontSize="8" fontWeight="700" fill="#15803d">eliminated</text>
        </g>
        <g transform="translate(0, 138)">
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.4" />
          <circle cx="14" cy="17" r="5" fill="#16a34a" />
          <path d="M11 17 L13 19 L17 14" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="26" y="14" fontSize="8" fontWeight="700" fill="#15803d">Time back for</text>
          <text x="26" y="25" fontSize="8" fontWeight="700" fill="#15803d">supervisors</text>
        </g>
        {/* Audit trail badge */}
        <g transform="translate(0, 190)">
          <rect x="0" y="0" width="100" height="24" rx="12" fill="#0e1621" />
          <circle cx="12" cy="12" r="2.6" fill="#3d6ff5" />
          <text x="22" y="15" fontSize="8" fontWeight="800" fill="#ffffff" letterSpacing="0.1em">AUDIT TRAIL</text>
        </g>
      </g>
    </svg>
  );
}

/* ============================================================
   02 · Agentic lead intelligence
   Before: scattered sources, manual review, days
   During: agentic AI + bespoke CRM
   After:  minutes, wider coverage, live funnel
   ============================================================ */
export function LeadIntelDiagram() {
  return (
    <svg viewBox="0 0 560 400" fill="none" role="img"
         aria-label="Four scattered sources (email, portals, aggregators, contractor sites) flowing through an agentic AI that applies the client's multi-factor qualification criteria and produces scored opportunities in a structured funnel with live dashboards.">
      <defs>
        <marker id="arrow-li" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#3d6ff5" />
        </marker>
        <marker id="arrow-li-out" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#16a34a" />
        </marker>
      </defs>

      {/* Header */}
      <g fontSize="10" fontWeight="800" letterSpacing="0.16em">
        <text x="80" y="22" textAnchor="middle" fill="#94a3b8">BEFORE</text>
        <text x="280" y="22" textAnchor="middle" fill="#3d6ff5">AGENTIC AI</text>
        <text x="480" y="22" textAnchor="middle" fill="#15803d">AFTER</text>
      </g>
      <line x1="10" y1="32" x2="550" y2="32" stroke="#e2e8f2" strokeWidth="1" />

      {/* BEFORE — four sources */}
      <g transform="translate(20, 60)">
        {[
          { label: 'INBOUND EMAIL', row: 0 },
          { label: 'PUBLIC PORTALS', row: 1 },
          { label: 'AGGREGATORS', row: 2 },
          { label: 'CONTRACTOR SITES', row: 3 },
        ].map((s, i) => (
          <g key={s.label} transform={`translate(0, ${i * 46})`}>
            <rect x="0" y="0" width="130" height="34" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
            <circle cx="14" cy="17" r="3" fill="#94a3b8" />
            <text x="26" y="21" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.06em">
              {s.label}
            </text>
          </g>
        ))}
        <g transform="translate(0, 190)">
          <rect x="0" y="0" width="130" height="26" rx="13" fill="#fef2f2" stroke="#fecaca" strokeWidth="1.2" />
          <text x="65" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fill="#cf3324" letterSpacing="0.1em">
            DAYS · MANUAL
          </text>
        </g>
      </g>

      {/* Arrows into agentic AI */}
      <g stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" fill="none">
        <path d="M150 77 Q180 77 200 130" markerEnd="url(#arrow-li)" />
        <path d="M150 123 Q180 123 200 145" markerEnd="url(#arrow-li)" />
        <path d="M150 169 Q180 169 200 175" markerEnd="url(#arrow-li)" />
        <path d="M150 215 Q180 215 200 190" markerEnd="url(#arrow-li)" />
      </g>

      {/* AGENTIC AI hub */}
      <g transform="translate(210, 60)">
        <rect x="0" y="0" width="180" height="230" rx="12" fill="#3d6ff5" />
        <text x="90" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff" letterSpacing="0.16em">
          AGENTIC AI
        </text>
        <text x="90" y="44" textAnchor="middle" fontSize="8" fontWeight="600" fill="#ffffff" opacity="0.85">
          continuous · multi-factor
        </text>

        {/* Three-stage pipeline */}
        <g transform="translate(16, 66)">
          <rect x="0" y="0" width="148" height="42" rx="6" fill="#ffffff" opacity="0.98" />
          <circle cx="14" cy="21" r="7" fill="#3d6ff5" />
          <text x="14" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff">1</text>
          <text x="30" y="17" fontSize="9" fontWeight="700" fill="#0e1621">Reads every page</text>
          <text x="30" y="30" fontSize="7.5" fill="#5a6b82">Not sampled</text>
        </g>
        <g transform="translate(16, 116)">
          <rect x="0" y="0" width="148" height="42" rx="6" fill="#ffffff" opacity="0.98" />
          <circle cx="14" cy="21" r="7" fill="#3d6ff5" />
          <text x="14" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff">2</text>
          <text x="30" y="17" fontSize="9" fontWeight="700" fill="#0e1621">Qualifies</text>
          <text x="30" y="30" fontSize="7.5" fill="#5a6b82">Client criteria · configurable</text>
        </g>
        <g transform="translate(16, 166)">
          <rect x="0" y="0" width="148" height="42" rx="6" fill="#ffffff" opacity="0.98" />
          <circle cx="14" cy="21" r="7" fill="#3d6ff5" />
          <text x="14" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff">3</text>
          <text x="30" y="17" fontSize="9" fontWeight="700" fill="#0e1621">Scores &amp; summarises</text>
          <text x="30" y="30" fontSize="7.5" fill="#5a6b82">Bespoke CRM output</text>
        </g>

        {/* Mini connector line */}
        <g stroke="#ffffff" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" fill="none">
          <line x1="90" y1="108" x2="90" y2="114" />
          <line x1="90" y1="158" x2="90" y2="164" />
        </g>
      </g>

      {/* Arrow to AFTER */}
      <path d="M390 175 L430 175" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-li-out)" />

      {/* AFTER — funnel + live dashboard */}
      <g transform="translate(440, 60)">
        {/* Funnel */}
        <g>
          <rect x="0" y="0" width="100" height="18" rx="4" fill="#3d6ff5" />
          <rect x="12" y="24" width="76" height="18" rx="4" fill="#6a90ff" />
          <rect x="24" y="48" width="52" height="18" rx="4" fill="#94b0ff" />
          <text x="50" y="12" textAnchor="middle" fontSize="7" fontWeight="800" fill="#ffffff" letterSpacing="0.1em">SCORED</text>
          <text x="50" y="36" textAnchor="middle" fontSize="7" fontWeight="800" fill="#ffffff" letterSpacing="0.1em">QUALIFIED</text>
          <text x="50" y="60" textAnchor="middle" fontSize="7" fontWeight="800" fill="#0e1621" letterSpacing="0.1em">FUNNEL</text>
        </g>
        {/* Live badge */}
        <g transform="translate(0, 82)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.2" />
          <circle cx="12" cy="11" r="3" fill="#16a34a" />
          <text x="22" y="14" fontSize="8" fontWeight="700" fill="#15803d" letterSpacing="0.06em">
            LIVE FUNNEL
          </text>
        </g>
        {/* Metrics */}
        <g transform="translate(0, 116)">
          <text x="0" y="0" fontSize="22" fontWeight="800" fill="#0e1621">Days</text>
          <text x="52" y="-4" fontSize="14" fontWeight="700" fill="#94a3b8">→</text>
          <text x="76" y="0" fontSize="22" fontWeight="800" fill="#15803d">Min</text>
          <text x="0" y="18" fontSize="8" fontWeight="600" fill="#5a6b82">qualification time</text>
        </g>
        {/* Coverage */}
        <g transform="translate(0, 156)">
          <rect x="0" y="0" width="100" height="40" rx="6" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="10" y="16" fontSize="8" fontWeight="700" fill="#4a5a70" letterSpacing="0.08em">
            COVERAGE
          </text>
          <text x="10" y="30" fontSize="12" fontWeight="800" fill="#3d6ff5">Beyond manual</text>
        </g>
      </g>
    </svg>
  );
}

/* ============================================================
   03 · Sovereign AI
   Before: knowledge scattered, workarounds with public AI
   During: private intelligence assistant inside a sovereign boundary
   After:  single-request research, everything stays inside
   ============================================================ */
export function SovereignAIDiagram() {
  return (
    <svg viewBox="0 0 560 400" fill="none" role="img"
         aria-label="Scattered internal documents and public publications, resolved by a private intelligence assistant running on sovereign infrastructure, providing role-scoped, cited answers without leaving the organisation's boundary.">
      <defs>
        <marker id="arrow-sa" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#3d6ff5" />
        </marker>
        <marker id="arrow-sa-out" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#16a34a" />
        </marker>
        <pattern id="sa-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0 L0 0 0 12" fill="none" stroke="#e2e8f2" strokeWidth="0.6" />
        </pattern>
      </defs>

      {/* Header */}
      <g fontSize="10" fontWeight="800" letterSpacing="0.16em">
        <text x="80" y="22" textAnchor="middle" fill="#94a3b8">BEFORE</text>
        <text x="280" y="22" textAnchor="middle" fill="#3d6ff5">INSIDE THE BOUNDARY</text>
        <text x="480" y="22" textAnchor="middle" fill="#15803d">AFTER</text>
      </g>
      <line x1="10" y1="32" x2="550" y2="32" stroke="#e2e8f2" strokeWidth="1" />

      {/* BEFORE */}
      <g transform="translate(20, 60)">
        {/* internal docs */}
        <g>
          <rect x="0" y="0" width="120" height="52" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="10" y="16" fontSize="7.5" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
            INTERNAL DOCS
          </text>
          <rect x="10" y="26" width="70" height="3" rx="1.5" fill="#cbd5e6" />
          <rect x="10" y="34" width="90" height="3" rx="1.5" fill="#e2e8f2" />
          <rect x="10" y="42" width="60" height="3" rx="1.5" fill="#e2e8f2" />
        </g>
        {/* public publications */}
        <g transform="translate(0, 68)">
          <rect x="0" y="0" width="120" height="52" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="10" y="16" fontSize="7.5" fontWeight="700" fill="#5a6b82" letterSpacing="0.1em">
            PUBLICATIONS
          </text>
          <rect x="10" y="26" width="80" height="3" rx="1.5" fill="#cbd5e6" />
          <rect x="10" y="34" width="56" height="3" rx="1.5" fill="#e2e8f2" />
          <rect x="10" y="42" width="90" height="3" rx="1.5" fill="#e2e8f2" />
        </g>
        {/* Workaround warning */}
        <g transform="translate(0, 138)">
          <rect x="0" y="0" width="120" height="48" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1.4" />
          <text x="10" y="16" fontSize="7.5" fontWeight="700" fill="#cf3324" letterSpacing="0.1em">
            WORKAROUND
          </text>
          <text x="10" y="28" fontSize="8" fontWeight="700" fill="#cf3324">
            Public AI tools
          </text>
          <text x="10" y="40" fontSize="7.5" fill="#cf3324" opacity="0.8">
            material leaves the perimeter
          </text>
        </g>
      </g>

      {/* Arrows into sovereign boundary */}
      <g stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" fill="none">
        <path d="M150 86 Q180 86 200 140" markerEnd="url(#arrow-sa)" />
        <path d="M150 154 Q180 154 200 180" markerEnd="url(#arrow-sa)" />
        <path d="M150 222 Q180 222 200 200" markerEnd="url(#arrow-sa)" />
      </g>

      {/* SOVEREIGN BOUNDARY — the big rectangle containing everything */}
      <g transform="translate(210, 60)">
        <rect x="0" y="0" width="180" height="230" rx="12"
              fill="#f6f8fc" stroke="#3d6ff5" strokeWidth="2" strokeDasharray="6 5" />
        {/* Label */}
        <text x="90" y="-8" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
          SOVEREIGN BOUNDARY
        </text>

        {/* Model core */}
        <g transform="translate(90, 78)">
          <circle cx="0" cy="0" r="34" fill="#3d6ff5" />
          <circle cx="0" cy="0" r="22" stroke="#ffffff" strokeWidth="1.4" fill="none" opacity="0.7" />
          <circle cx="0" cy="0" r="12" stroke="#ffffff" strokeWidth="1.4" fill="none" opacity="0.7" />
          <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
          <text x="0" y="52" textAnchor="middle" fontSize="8" fontWeight="800" fill="#3d6ff5" letterSpacing="0.12em">
            OPEN-WEIGHT MODEL
          </text>
        </g>

        {/* Inputs — internal + pubs, drawn inside the boundary */}
        <g transform="translate(14, 128)">
          <rect x="0" y="0" width="66" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="33" y="13" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">
            INTERNAL DOCS
          </text>
        </g>
        <g transform="translate(100, 128)">
          <rect x="0" y="0" width="66" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="33" y="13" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">
            PUBLICATIONS
          </text>
        </g>

        {/* Connector lines */}
        <g stroke="#3d6ff5" strokeWidth="1.2" strokeDasharray="3 3" fill="none">
          <line x1="47" y1="128" x2="60" y2="112" />
          <line x1="133" y1="128" x2="120" y2="112" />
        </g>

        {/* Role-scoped badge */}
        <g transform="translate(14, 164)">
          <rect x="0" y="0" width="152" height="26" rx="13" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.4" />
          <circle cx="14" cy="13" r="4" fill="#3d6ff5" />
          <text x="24" y="17" fontSize="8" fontWeight="800" fill="#3d6ff5" letterSpacing="0.1em">
            ROLE-SCOPED ACCESS
          </text>
        </g>

        {/* Every answer cited */}
        <g transform="translate(14, 200)">
          <rect x="0" y="0" width="152" height="22" rx="11" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.2" />
          <circle cx="12" cy="11" r="3.5" fill="#16a34a" />
          <path d="M9.5 11 L11 12.5 L14.5 9" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="22" y="14" fontSize="7.5" fontWeight="800" fill="#15803d" letterSpacing="0.1em">
            EVERY ANSWER CITED
          </text>
        </g>
      </g>

      {/* Arrow to AFTER */}
      <path d="M390 175 L430 175" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-sa-out)" />

      {/* AFTER */}
      <g transform="translate(440, 60)">
        {/* Collapse badge */}
        <g>
          <rect x="0" y="0" width="100" height="46" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.4" />
          <text x="10" y="16" fontSize="8" fontWeight="700" fill="#15803d" letterSpacing="0.08em">
            ONE WEEK
          </text>
          <text x="10" y="32" fontSize="14" fontWeight="800" fill="#0e1621">
            → 1 request
          </text>
        </g>
        {/* Confidential material stays */}
        <g transform="translate(0, 56)">
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.4" />
          <text x="10" y="14" fontSize="8" fontWeight="700" fill="#3d6ff5" letterSpacing="0.08em">
            NO MATERIAL
          </text>
          <text x="10" y="26" fontSize="8" fontWeight="700" fill="#3d6ff5" letterSpacing="0.08em">
            LEAVES PERIMETER
          </text>
        </g>
        {/* Referenced */}
        <g transform="translate(0, 102)">
          <rect x="0" y="0" width="100" height="34" rx="6" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
          <text x="10" y="14" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">
            EVERY ANSWER
          </text>
          <text x="10" y="26" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">
            REFERENCED
          </text>
        </g>
        {/* UAT status */}
        <g transform="translate(0, 148)">
          <rect x="0" y="0" width="100" height="24" rx="12" fill="#fef6e7" stroke="#fcd9a1" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" fill="#d97706" />
          <text x="22" y="15" fontSize="8" fontWeight="800" fill="#d97706" letterSpacing="0.1em">
            IN UAT
          </text>
        </g>
      </g>
    </svg>
  );
}
