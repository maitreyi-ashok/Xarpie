/** Xarpie ∞ mark — a tube-style outline (outer stroke in ink, inner stroke in the page colour). */
const PATH =
  'M32 15 C26 3 9 3 9 15 C9 27 26 27 32 15 C38 3 55 3 55 15 C55 27 38 27 32 15 Z';

export default function InfinityMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 30" fill="none" aria-hidden="true">
      <path d={PATH} stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d={PATH} style={{ stroke: 'var(--paper)' }} strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
