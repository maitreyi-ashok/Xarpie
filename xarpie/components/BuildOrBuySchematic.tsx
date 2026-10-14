export default function BuildOrBuySchematic() {
  return (
    <figure className="ins-art" role="img" aria-label="A decision forking to buy or build on evidence.">
      <svg viewBox="0 0 480 160" fill="none">
        <g transform="translate(20, 60)">
          <circle cx="20" cy="20" r="18" fill="#0e1621" />
          <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="800" fill="#ffffff">?</text>
        </g>
        <g stroke="#3d6ff5" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M58 80 Q100 80 120 50 T180 30" />
          <path d="M58 80 Q100 80 120 110 T180 130" />
        </g>
        <g transform="translate(190, 18)">
          <rect width="100" height="24" rx="6" fill="#94a3b8" />
          <text x="50" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" letterSpacing="0.12em">BUY</text>
        </g>
        <g transform="translate(190, 118)">
          <rect width="100" height="24" rx="6" fill="#3d6ff5" />
          <text x="50" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" letterSpacing="0.12em">BUILD</text>
        </g>
      </svg>
    </figure>
  );
}
