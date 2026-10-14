// ============================================================
// Engineering capability diagrams
// Each diagram is a small ~200×120 SVG that illustrates the
// capability. All share the same visual language: hairlines,
// accent blue, light cards, and a "structural" feel.
// ============================================================

export function AppEngDiagram() {
  return (
    <svg viewBox="0 0 200 120" fill="none" role="img" aria-label="Application layers — web, mobile and field, built on the same codebase">
      <g transform="translate(20, 12)">
        <rect x="0" y="0" width="120" height="76" rx="6" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.2" />
        <rect x="8" y="8" width="104" height="12" rx="3" fill="#3d6ff5" />
        <circle cx="14" cy="14" r="1.6" fill="#ffffff" opacity="0.9" />
        <circle cx="19" cy="14" r="1.6" fill="#ffffff" opacity="0.7" />
        <rect x="8" y="26" width="48" height="4" rx="2" fill="#cbd5e6" />
        <rect x="8" y="34" width="80" height="4" rx="2" fill="#e2e8f2" />
        <rect x="8" y="42" width="64" height="4" rx="2" fill="#e2e8f2" />
        <rect x="8" y="56" width="40" height="12" rx="6" fill="#3d6ff5" />
      </g>
      <g transform="translate(148, 30)">
        <rect x="0" y="0" width="32" height="52" rx="5" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <rect x="10" y="4" width="12" height="2" rx="1" fill="#cbd5e6" />
        <rect x="4" y="12" width="24" height="4" rx="2" fill="#e2e8f2" />
        <rect x="4" y="20" width="24" height="4" rx="2" fill="#e2e8f2" />
        <rect x="4" y="28" width="16" height="4" rx="2" fill="#3d6ff5" opacity="0.6" />
        <circle cx="16" cy="46" r="2.5" fill="#cbd5e6" />
      </g>
      <g transform="translate(148, 88)">
        <rect x="0" y="0" width="40" height="20" rx="4" fill="#f6f8fc" stroke="#cbd5e6" strokeWidth="1.2" />
        <circle cx="8" cy="10" r="3" fill="#16a34a" />
        <rect x="16" y="6" width="20" height="3" rx="1.5" fill="#cbd5e6" />
        <rect x="16" y="12" width="14" height="3" rx="1.5" fill="#e2e8f2" />
      </g>
      <text x="100" y="112" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8" letterSpacing="0.14em">
        ONE CODEBASE · THREE SURFACES
      </text>
    </svg>
  );
}

export function IntegrationDiagram() {
  return (
    <svg viewBox="0 0 200 120" fill="none" role="img" aria-label="Multiple systems joined into one flow">
      <g transform="translate(80, 46)">
        <circle cx="20" cy="20" r="20" fill="#3d6ff5" />
        <circle cx="20" cy="20" r="8" fill="#ffffff" opacity="0.9" />
      </g>
      <g transform="translate(10, 20)">
        <rect x="0" y="0" width="44" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <text x="22" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">ERP</text>
      </g>
      <g transform="translate(10, 82)">
        <rect x="0" y="0" width="44" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <text x="22" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">CRM</text>
      </g>
      <g transform="translate(146, 20)">
        <rect x="0" y="0" width="44" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <text x="22" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0e1621" letterSpacing="0.08em">WORKFLOW</text>
      </g>
      <g transform="translate(146, 82)">
        <rect x="0" y="0" width="44" height="20" rx="4" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <text x="22" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="#16a34a" letterSpacing="0.08em">AUDIT</text>
      </g>
      <g stroke="#3d6ff5" strokeWidth="1.4" strokeDasharray="3 3">
        <line x1="54" y1="30" x2="80" y2="55" />
        <line x1="54" y1="92" x2="80" y2="65" />
        <line x1="146" y1="30" x2="120" y2="55" />
        <line x1="146" y1="92" x2="120" y2="65" />
      </g>
      <text x="100" y="112" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8" letterSpacing="0.14em">
        SYSTEMS JOINED · ONE FLOW
      </text>
    </svg>
  );
}

export function DataDiagram() {
  return (
    <svg viewBox="0 0 200 120" fill="none" role="img" aria-label="Data pipelines — sources, transformation, and storage">
      <g transform="translate(10, 24)">
        <rect x="0" y="0" width="34" height="10" rx="2" fill="#cbd5e6" />
        <rect x="0" y="16" width="34" height="10" rx="2" fill="#cbd5e6" />
        <rect x="0" y="32" width="34" height="10" rx="2" fill="#cbd5e6" />
        <rect x="0" y="48" width="34" height="10" rx="2" fill="#cbd5e6" />
      </g>
      <path d="M48 44 L66 44" stroke="#3d6ff5" strokeWidth="1.6" strokeLinecap="round" markerEnd="url(#d-arrow)" />
      <defs>
        <marker id="d-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#3d6ff5" />
        </marker>
      </defs>
      <g transform="translate(72, 26)">
        <rect x="0" y="0" width="56" height="36" rx="4" fill="#f6f8fc" stroke="#3d6ff5" strokeWidth="1.4" />
        <text x="28" y="15" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#3d6ff5" letterSpacing="0.12em">PIPELINES</text>
        <rect x="8" y="22" width="40" height="3" rx="1.5" fill="#cbd5e6" />
        <rect x="8" y="28" width="28" height="3" rx="1.5" fill="#e2e8f2" />
      </g>
      <path d="M132 44 L150 44" stroke="#3d6ff5" strokeWidth="1.6" strokeLinecap="round" markerEnd="url(#d-arrow)" />
      <g transform="translate(154, 20)">
        <ellipse cx="18" cy="6" rx="18" ry="4" fill="#3d6ff5" />
        <path d="M0 6 V42 C0 44.2 8.1 46 18 46 C27.9 46 36 44.2 36 42 V6" fill="#3d6ff5" />
        <ellipse cx="18" cy="6" rx="18" ry="4" fill="#2f5ad6" />
        <rect x="10" y="18" width="16" height="2" rx="1" fill="#ffffff" opacity="0.7" />
        <rect x="10" y="24" width="16" height="2" rx="1" fill="#ffffff" opacity="0.5" />
      </g>
      <text x="100" y="112" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8" letterSpacing="0.14em">
        SOURCES · PIPELINES · STORAGE
      </text>
    </svg>
  );
}

export function CloudDiagram() {
  return (
    <svg viewBox="0 0 200 120" fill="none" role="img" aria-label="Cloud infrastructure — containerised services deployed via CI/CD">
      <g transform="translate(60, 8)">
        <path
          d="M22 42 C10 42 4 34 4 26 C4 18 10 12 18 12 C20 4 28 0 38 0 C50 0 58 6 60 16 C70 14 80 20 80 32 C80 40 74 44 66 44 Z"
          fill="#3d6ff5"
          opacity="0.15"
        />
        <path
          d="M22 42 C10 42 4 34 4 26 C4 18 10 12 18 12 C20 4 28 0 38 0 C50 0 58 6 60 16 C70 14 80 20 80 32 C80 40 74 44 66 44 Z"
          stroke="#3d6ff5"
          strokeWidth="1.6"
          fill="none"
        />
        <text x="42" y="28" textAnchor="middle" fontSize="8" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">
          CLOUD
        </text>
      </g>
      <g transform="translate(52, 68)">
        <rect x="0" y="0" width="22" height="22" rx="3" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <rect x="4" y="4" width="14" height="3" rx="1.5" fill="#3d6ff5" />
        <rect x="4" y="10" width="14" height="3" rx="1.5" fill="#cbd5e6" />
      </g>
      <g transform="translate(88, 68)">
        <rect x="0" y="0" width="22" height="22" rx="3" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <rect x="4" y="4" width="14" height="3" rx="1.5" fill="#3d6ff5" />
        <rect x="4" y="10" width="14" height="3" rx="1.5" fill="#cbd5e6" />
      </g>
      <g transform="translate(124, 68)">
        <rect x="0" y="0" width="22" height="22" rx="3" fill="#ffffff" stroke="#cbd5e6" strokeWidth="1.2" />
        <rect x="4" y="4" width="14" height="3" rx="1.5" fill="#3d6ff5" />
        <rect x="4" y="10" width="14" height="3" rx="1.5" fill="#cbd5e6" />
      </g>
      <g stroke="#3d6ff5" strokeWidth="1.4" strokeLinecap="round">
        <line x1="62" y1="52" x2="62" y2="66" />
        <line x1="98" y1="52" x2="98" y2="66" />
        <line x1="134" y1="52" x2="134" y2="66" />
      </g>
      <text x="100" y="108" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8" letterSpacing="0.14em">
        AUTOMATED DEPLOY · OBSERVED
      </text>
    </svg>
  );
}

export function LegacyDiagram() {
  return (
    <svg viewBox="0 0 200 120" fill="none" role="img" aria-label="Legacy system wrapped and exposed incrementally without replacement">
      <g transform="translate(14, 34)">
        <rect x="0" y="0" width="70" height="44" rx="4" fill="#f6f8fc" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3" />
        <text x="35" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#4a5a70" letterSpacing="0.14em">LEGACY</text>
        <rect x="14" y="28" width="42" height="3" rx="1.5" fill="#cbd5e6" />
        <rect x="14" y="34" width="30" height="3" rx="1.5" fill="#e2e8f2" />
      </g>
      <g transform="translate(94, 24)">
        <rect x="0" y="0" width="90" height="64" rx="6" fill="#ffffff" stroke="#3d6ff5" strokeWidth="1.8" />
        <text x="45" y="18" textAnchor="middle" fontSize="8" fontWeight="800" fill="#3d6ff5" letterSpacing="0.14em">NEW SURFACE</text>
        <rect x="14" y="28" width="62" height="3" rx="1.5" fill="#cbd5e6" />
        <rect x="14" y="36" width="46" height="3" rx="1.5" fill="#e2e8f2" />
        <rect x="14" y="48" width="40" height="10" rx="5" fill="#3d6ff5" />
      </g>
      <path d="M84 56 L94 56" stroke="#3d6ff5" strokeWidth="1.6" strokeLinecap="round" markerEnd="url(#l-arrow)" />
      <defs>
        <marker id="l-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#3d6ff5" />
        </marker>
      </defs>
      <text x="100" y="108" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8" letterSpacing="0.14em">
        WRAP · EXTEND · EXPOSE
      </text>
    </svg>
  );
}
