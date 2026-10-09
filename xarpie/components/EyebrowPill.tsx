/** "01 / Insights" → dark pill with a blue number chip; plain labels render as a pill without a chip. */
export default function EyebrowPill({ children }: { children: string }) {
  const m = children.match(/^(\d+)\s*\/\s*(.+)$/);
  return (
    <p className="eyebrow eyebrow--pill">
      {m ? (
        <>
          <span className="eyebrow__num">{m[1]}</span>
          <span className="eyebrow__label">{m[2]}</span>
        </>
      ) : (
        <span className="eyebrow__label">{children}</span>
      )}
    </p>
  );
}
